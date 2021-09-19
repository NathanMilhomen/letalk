import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Simulacao from "./Simulacao";

@Entity()
export default class Parcela extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: Date;

    @Column()
    valor: number;

    @ManyToOne(type => Simulacao, simulacao => simulacao.parcelas)
    simulacao: Simulacao;

    constructor(data: Date, valor: number){
        super();
        this.data = data;
        this.valor = valor;
    }
}