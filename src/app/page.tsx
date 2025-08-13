import { ContainerGRID } from "@/components/containerGRID";
import { RandomGame } from "@/components/randomGame";
import { getDailyGame } from "@/utils/api";
import { GameProps } from "@/utils/types/game";



export default async function Home() {
  const dailyGame:GameProps = await getDailyGame();
  return (
     <section className="pt-3">
       <ContainerGRID>
          <h1 className="font-bold text-center text-4xl mb-5">Separamos um jogo exclusivo pra você</h1>
          <RandomGame
           id={dailyGame.id}
           title={dailyGame.title}
           image_url={dailyGame.image_url}
          />
       </ContainerGRID>
     </section>
  )
}
