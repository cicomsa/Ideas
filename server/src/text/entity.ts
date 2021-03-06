import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Text extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable: true})
    idea: string

}