import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import Message from "./Message";

@Entity()
class Channel extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"text", nullable:false})
    channelName : string;

    @OneToMany(
        type => Message, 
        message => message.innerChannel)
    messages: Message[]

    @CreateDateColumn()
    createAt:string;

    @UpdateDateColumn()
    updateAt :string;

}

export default Channel;