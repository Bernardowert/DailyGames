import { SectionGames } from "@/components/sectionComponents/home/sectionGames";
import { SectionHero } from "@/components/sectionComponents/home/sectionHero";



export default async function Home() {
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