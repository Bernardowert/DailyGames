import { getData } from "@/utils/api";
import { GameProps } from "@/utils/types/game";
import { Props } from "@/utils/types/params";
import { type Metadata } from "next";



export async function generateMetadata({params}:Props):Promise<Metadata>{
    const {id} = await params;

    try{
         const data:GameProps = await getData(id);
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
