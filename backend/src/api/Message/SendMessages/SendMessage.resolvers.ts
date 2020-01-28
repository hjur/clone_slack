import {Resolvers} from "src/types/resolvers";
import Channel from "../../../../src/entities/Channel";
import Message from "../../../../src/entities/Message";
import { SendMessageMutationArgs, SendMessageResponse } from "src/types/graphql";

const resolvers:Resolvers ={
    Mutation:{
        SendMessage: async(_, args:SendMessageMutationArgs):Promise<SendMessageResponse> =>{
            try{
                const {nickname,contents,thumbnail, innerChannelId} = args;

                const isExistChannel = await Channel.findOne({id: innerChannelId});

                if(!isExistChannel){
                    return{
                        ok:false,
                        error:"not found channel"
                    }
                }

                await Message.create({
                    nickname,
                    thumbnail,
                    contents,
                    innerChannelId
                }).save();

                return{
                    ok:false,
                    error:null
                }
            }catch(error){
                return{
                    ok:false,
                    error: error.message
                }
            }
        }
    }
}
export default resolvers;
