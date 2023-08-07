import { useQuery } from "@tanstack/react-query"

/*
  API endpoint:
https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

*/

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  )
  const numberString = await res.text()
  console.log(numberString)
  // throw new Error("This is an error")
  return +numberString
}

export const useRandom = () => {
  const query = useQuery(["randomNumber"], getRandomNumberFromApi)

  return query
}
