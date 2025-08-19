import { getData } from "@/utils/api";
import { GameProps } from "@/utils/types/game";
import { Metadata } from "next";


type Props = {
   params: Promise<{id:string}>;
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
    const {id} = await params;
    const data:GameProps = await getData(String(id));  
    
    if(!data){
          return{
             title:"Jogo não encontrado",
             description: "Descrição não encontrada"
          }
    }

    return {
      title:data.title,
      description: `${data.description.slice(0, 170)}...`
    }
}
