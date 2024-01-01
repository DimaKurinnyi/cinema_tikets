import { Movie } from "../../types";
export const helpers={
    getInfoData : (data:Movie)=>[
        {
            label:'Premier',
            value:data.premier
        },
        {
            label:'Actors',
            value:data.actors.join(', ')
        },
        {
            label:'Duration',
            value:data.duration
        },
        {
            label:'Country',
            value:data.country
        },
        {
            label:'Year',
            value:data.year
        }
    
    ]
}

