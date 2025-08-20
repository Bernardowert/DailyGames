import { ContainerGRID } from "@/components/containerGRID";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { getSearchData } from "@/utils/api";
import { GameProps } from "@/utils/types/game";
import { Props } from "@/utils/types/params";




export default async function Search({params}:Props<'slug'>){
   
    const {slug} = await params;

    const games:GameProps[] = await getSearchData(slug);
    
    return(
        <main className="w-full text-black py-4">
           <ContainerGRID>
            <Input/>

            <h1 className="font-bold text-xl mt-8 mb-5">Veja oque encontramos na nossa base:</h1>


            {
                games ? (
                        <div className="grid gap-7 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
                    {games && games.map((item) => (
                    <GameCard key={item.id} data={item}/>
                    ))}
             </div>
                ) : (
                     <p>Nenhum jogo encontrado...</p>
                )
            }
           </ContainerGRID>
        </main>
    )
}