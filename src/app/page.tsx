import { ContainerGRID } from "@/components/containerGRID";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { RandomGame } from "@/components/randomGame";
import { SectionGames } from "@/components/sectionComponents/home/sectionGames";
import { SectionHero } from "@/components/sectionComponents/home/sectionHero";
import { getDailyGame, getGamesData } from "@/utils/api";
import { GameProps } from "@/utils/types/game";



export default async function Home() {
  const data: GameProps[] = await getGamesData();
  return (
      <>
       <SectionHero/>
       <SectionGames/>
      </>
  )
}

{/* <Input/>

         <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>

         <section className="grid gap-7 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
          {data.map((item) => (
            <GameCard key={item.id} data={item}/>
          ))}
         </section> */}