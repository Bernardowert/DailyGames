export type Props<T extends string = "id"> = { 
  params: Promise<{ [key in T]: string}> 
}

