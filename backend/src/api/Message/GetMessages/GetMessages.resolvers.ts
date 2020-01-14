
import {Resolvers} from "src/types/resolvers";
import Message from "../../../../src/entities/Message";

const resolvers:Resolvers = {
    Query :{
        GetMessages: async(_,args) => {
            try{
                const {innerChannelId }= args;
                const messages = await Message.find({innerChannelId});
                return {
                    ok: true,
                    error:null,
                    messages
                }
            }catch(error){
                return {
                    ok: false,
                    error: error.message,
                    message: null
                }
            }
        }
    }
}

export default resolvers;