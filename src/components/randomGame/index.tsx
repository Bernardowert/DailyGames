import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";




type GameInfo = Partial<GameProps>;

export function RandomGame({id,title,image_url}: GameInfo){
    return(
        <Link href={`/game/${id}`} className="relative h-96 block rounded-lg overflow-hidden group filter">
           <Image
            src={image_url || ''}
            alt={title || ''}
            title={title}
            fill
            className="!static object-cover transition-all ease-linear group-hover:brightness-50 group-hover:scale-105"
           />

           <div className="flex items-center gap-3 absolute transition-all ease-linear bottom-[18px] left-[32px] group-hover:left-[45px]">
               <span className="text-white font-bold text-xl">{title}</span>
               <BsArrowRightSquare size={24} color="#fff"/>
           </div>
        </Link>
    )
}