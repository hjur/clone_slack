import { Resolvers } from "src/types/resolvers";
import { GetChannelsResponse } from "../../../types/graphql";
import Channel from "../../../../src/entities/Channel";

const resolvers:Resolvers = {
    Query:{
        GetChannels: async(_, __): Promise<GetChannelsResponse> => {
            try{
                const channels = await Channel.find();
                if(!channels){
                    return{
                        ok : true,
                        error:"not found channels",
                        channels:null
                    }
                }
                
                return{
                    ok: true,
                    error:"",
                    channels
                }
            }catch(e){
                return{
                    ok:false,
                    error: e.message,
                    channels:null
                }
            }
        }
    }
}

export default resolvers;