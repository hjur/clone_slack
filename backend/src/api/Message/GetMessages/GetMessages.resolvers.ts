
import {Resolvers} from "src/types/resolvers";
import Message from "../../../../src/entities/Message";
import { GetMessagesQueryArgs, GetMessagesResponse } from "src/types/graphql";

const resolvers:Resolvers = {
    Query :{
        GetMessages: async(_,args:GetMessagesQueryArgs):Promise<GetMessagesResponse> => {
            try{
                const {innerChannelId }= args;
                const messages = await Message.find({innerChannelId});
                return {
                    ok: true,
                    error:null,
                    messages:messages
                }
            }catch(error){
                return {
                    ok: false,
                    error: error.message,
                    messages: null
                }
            }
        }
    }
}

export default resolvers;