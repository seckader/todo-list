import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tache } from "./Tache";

@Entity()
export class Projet {

    @PrimaryGeneratedColumn()
    _idProjet: number;

    @Column({
        unique: true
    })
    nomProjet: string;

    @OneToMany(() => Tache, (tache) => tache.projet)
    listeTaches: Tache[];

}