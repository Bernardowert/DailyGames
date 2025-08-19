import { getData } from "@/utils/api";
import { GameProps } from "@/utils/types/game";
import { Metadata } from "next";
import { Params } from "next/dist/server/request/params";

export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{
    const {id} = await params;
    const data:GameProps = await getData(String(id));  
    
    if(!data){
          return{
             title:"Jogo não encontrado"
          }
    }

    return {
      title:data.title,
      description: `${data.description.slice(0, 170)}...`
    }
}
