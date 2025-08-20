import { ContainerGRID } from "@/components/containerGRID";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { GameCard } from "@/components/gameCard";
import { getData, getRandomGame } from "@/utils/api";
import { Props } from "@/utils/types/params";


export { generateMetadata } from "./metadata";



export default async function GameDetail({params}:Props){
   const {id} = await params;

   const data:GameProps = await getData(id);
   const sortedGame:GameProps = await getRandomGame();
  
   console.log(id);
   if(!data){
     redirect("/");
   }
   
    return(
      <main className="w-full text-black pt-20">
        <ContainerGRID>
          <div className="bg-black h-80 tablet:h-96 w-full relative rounded-md overflow-hidden">
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