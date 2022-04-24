import useSWR, { SWRConfiguration } from 'swr'
import { IWearProduct } from '../src/interface';


// const fetcher = (...args:[key: string]) => fetch(...args).then(res => res.json());

export const useWearProduct = (url:string, config: SWRConfiguration = {}) => {
  // const { data, error } = useSWR<IProduct[]>(`/api${ url }`, fetcher, config );
  const { data, error } = useSWR<IWearProduct[]>(`https://piccoletti.team-308609.repl.co/api${ url }`,  config );
  // const { data, error } = useSWR<IProductP[]>(`http://localhost:3000/api${ url }`,  config );
  return {
    wearproducts: data || [],
    isLoading: !error && !data,
    isError: error 
  }
}