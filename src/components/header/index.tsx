import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.svg";
import { ContainerGRID } from "../containerGRID";
import { NavLinks } from "./navListing";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header(){
    return(
        <header className="w-full h-28 bg-slate-100 flex items-center">
            <ContainerGRID className="flex items-center justify-center tablet:justify-between">
             
             <div className="flex items-center gap-11">
                 <Link href="/">
                     <Image src={logoImg} alt="Logo do DailyGames" title="Voltar para pagina inicial" />
                 </Link>

                 <NavLinks />
             </div>

             <Link className="hidden tablet:block" href="/profile" aria-label="ir para pagina de perfil">
               <LiaGamepadSolid size={34} color="#475569"/>
             </Link>
            

            </ContainerGRID>
        </header>
    )
}