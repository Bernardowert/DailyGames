import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi";

interface GameCardProps{
    data: GameProps;
}



export function GameCard({data}: GameCardProps){
    return(
        <Link href={`/game/${data.id}`} className="w-full block h-72 bg-slate-200 rounded-lg p-3 group">
                <div className="overflow-hidden w-full rounded-lg h-56">
                    <Image
                    src={data.image_url}
                    alt={data.title}
                    title={data.title}
                    fill
                    className="!static object-cover  transition-transform ease-linear group-hover:scale-105"
                    />
                </div>
             <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-bold text-black text-ellipsis truncate">{data.title}</p>
                <BiRightArrowCircle size={24} color="#000"/>
            </div>
        
        </Link>
    )
}

{/* <Link href={`/game/${data.id}`}>
          <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
            <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
                <Image
                  src={data.image_url}
                  alt={data.title}
                  title={data.title}
                  fill={true}
                  className="rounded-lg object-cover"
                  sizes={"(max-width:768px) 100vw, (max-width:1200px) 33vw "}
                />
            </div>
            <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-bold px-2 text-black text-ellipsis truncate">{data.title}</p>
                <BiRightArrowCircle size={24} color="#000"/>
            </div>
         </section>
        
        </Link> */}