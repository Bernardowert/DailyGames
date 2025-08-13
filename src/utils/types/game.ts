export interface GameProps{
    id:number;
    title:string;
    description:string;
    image_url:string;
    platforms: string[];
    categories: string[];
    release:string;
}








//  <main className="w-full">
//        <ContainerGRID>
//          <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo pra você</h1>
//          <Link href={`/game/${dailyGame.id}`}>
//            <section className="w-full bg-black rounded-lg">
//              <div className="relative w-full max-h-96 h-96 rounded-lg">
//                  <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
//                     <p className="font-bold text-xl text-white">{dailyGame.title}</p>
//                     <BsArrowRightSquare size={24} color="#fff"/>
//                  </div>
                 
//                   <Image
//                 src={dailyGame.image_url}
//                 alt={dailyGame.title}
//                 title={dailyGame.title}
//                 fill={true}
//                 className="max-h-96 object-cover rounded-lg opacity-50 transition-opacity ease-linear hover:opacity-100"
//                 sizes={"(max-width:768px) 100vw, (max-width:1200px) 33vw "}
//               />
//              </div>
//            </section>
//          </Link>
//        </ContainerGRID>
//     </main>