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