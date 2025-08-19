export async function getDailyGame(){
  try{
      const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, 
        {
           next: {
              revalidate: 2000
           },
           cache: 'force-cache'
        }
      );
      return res.json();
  }
  catch(err){
    console.log(err);
  }
}


export async function getGamesData(){
      try{
      const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, 
        {
           next: {
              revalidate: 4000
           },
           cache: 'force-cache'
        }
      );
      return res.json();
  }
  catch(err){
    console.log(err);
  }
}


export async function getData(id:string){
    try{
       const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {
        cache: 'force-cache',
        next: {
            revalidate: 4000
        }
       });
       return res.json();
    }
    catch(erro){
        console.log(erro);
    }
}