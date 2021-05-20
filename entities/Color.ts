import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Mujer } from "./Mujer";

@Entity()
export class Color extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    color: string;

    @ManyToMany(() => Mujer)
    @JoinTable()
    mujeres: Mujer[];

}