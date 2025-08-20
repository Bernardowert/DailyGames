
async function fetchApi(endpoint:string, options?:RequestInit & { next?: { revalidate?: number } }){   
    try{
         const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=${endpoint}`, options);
         return res.json();
    }
    catch(err){
        console.log(err);
    } 
}

export async function getSearchData(title:string){
  const decodeTitle = decodeURI(title);
  return fetchApi(`game&title=${decodeTitle}`,{
    cache: 'force-cache'
  });
}





export async function getRandomGame(){
    return fetchApi('game_day');
}




export async function getDailyGame(){

  return fetchApi('game_day', {
    next: { revalidate: 2000},
    cache: 'force-cache'
  })

}


export async function getGamesData(){

  return fetchApi('games', {
    next: { revalidate: 4000},
    cache: 'force-cache'
  });
  
}


export async function getData(id:string){
   return fetchApi(`game&id=${id}`, {
      next: { revalidate: 4000},
      cache: 'force-cache'
   })
}