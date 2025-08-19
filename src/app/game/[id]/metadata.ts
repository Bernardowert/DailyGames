import { getData } from "@/utils/api";
import { GameProps } from "@/utils/types/game";
import { Metadata } from "next";


type Props = {
   params: Promise<{id:string}>;
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
    const {id} = await params;
    try{
         const data:GameProps = await getData(String(id)); 
          return {
          title:data.title,
          description: `${data.description.slice(0, 170)}...`
        } 
    }
    catch{
         return{
             title:"Jogo não encontrado",
             description: "Descrição não encontrada"
          }
    }
}
