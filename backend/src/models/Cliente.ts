import { type } from "os";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Simulacao from "./Simulacao";

@Entity()
export default class Cliente extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column()
    uf: string;

    @Column()
    dataNascimento: string;

    @OneToMany(type => Simulacao, simulacao => simulacao.cliente)
    emprestimos: Simulacao[];
    constructor(cpf: string, uf: string, dataNascimento: string) {
        super();

        this.cpf = cpf;
        this.uf = uf;
        this.dataNascimento = dataNascimento;

    }

}