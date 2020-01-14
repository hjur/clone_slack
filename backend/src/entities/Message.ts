import { Entity, BaseEntity, Column, PrimaryGeneratedColumn , CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import Channel from "./Channel";


@Entity()
class Message extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"text", nullable:false})
    nickname:string;

    @Column({type:"text", nullable:false})
    contants:string;
    
    @ManyToOne(
        type => Channel,
        channel => channel.messages)
    innerChannel:Channel;

    @Column({type: "number", nullable:false})
    innerChannelId:number;

    @CreateDateColumn()
    createAt:string;

    @UpdateDateColumn()
    updateAt :string;



}

export default Message;