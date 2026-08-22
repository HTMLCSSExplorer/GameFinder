import { useFetchData } from "./useFetchData";


export interface Genre {
    id:number
name:string
slug:string
}



export const ueGenre =()=> useFetchData<Genre>('/genres')