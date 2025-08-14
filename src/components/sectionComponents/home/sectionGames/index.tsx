import { ContainerGRID } from "@/components/containerGRID";
import { Input } from "@/components/input";
import { GamesListing } from "./gameListing";

export async function SectionGames(){
    return(
        <section className="py-11">
            <ContainerGRID>
                <Input/>
                
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Jogos para conhecer</h2>
                    <GamesListing/>
                </div>
                
            </ContainerGRID>
        </section>
    )
}