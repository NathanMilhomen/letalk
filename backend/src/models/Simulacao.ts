import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Cliente from "./Cliente";
import Parcela from "./Parcela";

@Entity()
export default class Simulacao extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToMany(type => Parcela, parcela => parcela.simulacao)
    parcelas: Parcela[];

    @Column('float')
    taxaJuros: number = 0;

    @Column()
    total: number;

    @Column()
    quantidadeParcelas: number;

    @Column()
    valorInicial: number;

    constructor(
            public cliente: Cliente, valorInicial: number, quantidadeParcelas: number){
        super();
    }

        private calcularEmprestimo() {
            switch (this.cliente.uf) {
                case 'MG':
                    this.taxaJuros = 1 / 100;
                    break;
                case 'SP':
                    this.taxaJuros = 0.8 / 100;
                    break;
                case 'RJ':
                    this.taxaJuros = 0.9 / 100;
                    break
                case 'ES':
                    this.taxaJuros = 1.11 / 100;
                    break
            
            }

            this.total = this.valorInicial * (1 + this.taxaJuros) ** this.quantidadeParcelas;
        }

    public calcularParcelas(): Simulacao {
        this.calcularEmprestimo();
        
        let valorParcela = this.total / this.quantidadeParcelas;
        
        this.parcelas = [];
        for (let parcelas = 0; parcelas < this.quantidadeParcelas; parcelas++) {
            let data = new Date();
            data.setMonth(data.getMonth() + parcelas + 1);
            this.parcelas.push(new Parcela(data, valorParcela))
           
        }

        return this;
    }
}