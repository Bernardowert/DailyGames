import { GameCard } from "@/components/gameCard";
import { getGamesData } from "@/utils/api";
import { GameProps } from "@/utils/types/game";


export async function GamesListing(){
   const data: GameProps[] = await getGamesData();
    return(
         <div className="grid gap-7 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
           {data.map((item) => (
             <GameCard key={item.id} data={item}/>
          ))}
         </div>
    )
}