import { ContainerGRID } from "@/components/containerGRID";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";
import { Params } from "next/dist/server/request/params";

async function getData(title:string){
   try{
      const decodeTitle = decodeURI(title);
      const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`);
      return res.json();
    }
   catch(err){
     return null;
   }
}


export default async function Search({params}: {params:Params}){
   
    const {title} = await params;

    const games:GameProps[] = await getData(String(title));
    return(
        <main className="w-full text-black">
           <ContainerGRID>
            <Input/>

            <h1 className="font-bold text-xl mt-8 mb-5">Veja oque encontramos na nossa base:</h1>
            {
                !games && (
                    <p>Nenhum jogo encontrado...</p>
                )
            }

            <div className="grid gap-7 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
                {games && games.map((item) => (
                <GameCard key={item.id} data={item}/>
                ))}
             </div>
           </ContainerGRID>
        </main>
    )
}