import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { Movie } from "../types";


interface MoviesState{
    data:Movie[]
}

const initialState: MoviesState={
    data:[
        {
            id:0,
            img: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
            title: 'Name movie1',
            genre: 'Action',
            actors:["Cate Blanchett","Leonardo DiCaprio"],
            country:"USA",
            description:'lorem ipsum dolor sit amet',
            duration:83,
            premier: '7 august 2023',
            year:2023,
            times:['10:00', '12.:30', '13:30', '14:30', '15:30']
          },
          {
            id:1,
            img: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
            title: 'Name movie1',
            genre: 'Actions',
            actors:["Cate Blanchett","Leonardo DiCaprio"],
            country:"USA",
            description:'lorem ipsum dolor sit amet',
            duration:83,
            premier: '7 august 2023',
            year:2023,
            times:['10:00', '12.:30', '13:30', '14:30', '15:30']
          },
          {
            id:2,
            img: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
            title: 'Name movie1',
            genre: 'Actions',
            actors:["Cate Blanchett","Leonardo DiCaprio"],
            country:"USA",
            description:'lorem ipsum dolor sit amet',
            duration:83,
            premier: '7 august 2023',
            year:2023,
            times:['10:00', '12.:30', '13:30', '14:30', '15:30']
          },
    ]

}
const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{
     getMovieById :(state,action:PayloadAction<number>)=>{
      
     }
    }
})


export const movieReducer = moviesSlice.reducer