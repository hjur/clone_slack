import { Resolvers } from "src/types/resolvers";
import {CreateChannelMutationArgs, CreateChannelResponse} from "../../../../src/types/graphql"
import Channel from "../../../../src/entities/Channel";

const resolvers:Resolvers ={
    Mutation:{
        CreateChannel: async(_, args: CreateChannelMutationArgs,{pubSub}):Promise<CreateChannelResponse> => {

            try{
                const {channelName} = args;
                const isExistChannel = await Channel.findOne({channelName});

                if(isExistChannel){
                    return {
                        ok: false,
                        error:"already channel"
                    }
                }

                const newChannel = await Channel.create({channelName}).save();

                pubSub.publish("newChannel",{
                    CreateChannelSubscription: newChannel
                });

                await Channel.create({channelName}).save();

                return{
                    ok:true,
                    error: null
                }

            }catch(e){
                return {
                    ok: false,
                    error: e.message
                }
            }
        }
    }
}

export default resolvers;