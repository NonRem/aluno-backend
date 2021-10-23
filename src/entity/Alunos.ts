import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity()
export class Alunos
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;

    @Column()
    ra: string;

    @Column()
    idade: number;

    @Column({
        default: true
    })
    matriculado: boolean;

    @Column()
    data_de_nascimento: Date;

    @Column()
    endereco: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}