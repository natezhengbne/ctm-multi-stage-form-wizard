import { SuburbSuggestions } from "../data-type/suggention";
import { timeout } from "./timeout";

export async function getSuggestions(suburb: string, max: number = 7): Promise<SuburbSuggestions> {
  const uri = `https://suggest.realestate.com.au/consumer-suggest/suggestions?max=${max}&query=${suburb}&type=suburb%2Cprecinct%2Cregion%2Cstate%2Cpostcode&src=homepage`;
  return await timeout(fetch(uri))
    .then((response) => response.json())
    .catch((error: any) => {
      console.log(error);
    });
}
