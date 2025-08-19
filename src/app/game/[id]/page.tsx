import { ContainerGRID } from "@/components/containerGRID";
import { GameProps } from "@/utils/types/game";
import { Params } from "next/dist/server/request/params";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { GameCard } from "@/components/gameCard";
import { getDailyGame, getData } from "@/utils/api";


export { generateMetadata } from "./metadata";




export default async function GameDetail({params}: {params:Params}){
   const {id} = await params;

   const data:GameProps = await getData(String(id));
   const sortedGame:GameProps = await getDailyGame();

   if(!data){
     redirect("/");
   }
   
    return(
      <main className="w-full text-black">
        <div className="bg-black h-80 tablet:h-96 w-full relative">
            <Image
              src={data.image_url}
              alt={data.title}
              title=""
              loading="eager"
              draggable={false}
              priority={true}
              fill
              className="object-cover w-full h-80 tablet:h-96 opacity-75"
            />
        </div>


        <ContainerGRID>
            <h1 className="font-bold text-xl my-4">{data.title}</h1>
            <p>{data.description}</p>

       
            <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
            <div className="flex gap-2 flex-wrap">
                {
                  data.platforms.map((item) => (
                    <Label name={item} key={item}/>
                  ))
                }
            </div>

            <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
            <div className="flex gap-2 flex-wrap">
                {
                  data.categories.map((item) => (
                    <Label name={item} key={item}/>
                  ))
                }
            </div>

            <p className="mt-7 mb-2"><strong>Data de lançamento:</strong> {data.release}</p>
             
             <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado</h2>
             <GameCard data={sortedGame}/>
        
        </ContainerGRID>
      </main>
   )
}