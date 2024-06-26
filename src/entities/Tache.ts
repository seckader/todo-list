import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Projet } from "./Projet";

@Entity()
export class Tache {

    @PrimaryGeneratedColumn()
    _idTache: number;

    @Column()
    titre: string;

    @Column()
    description: string;

    @Column()
    dateEcheance: Date;

    @Column()
    priorite: number;

    @Column({
        default: false
    })
    isDone: boolean;

    @ManyToOne(() => Projet, (projet) => projet.listeTaches)
    projet: Projet;
}