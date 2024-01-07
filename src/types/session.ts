import { BuySeatsFromServer } from "./seat";

export interface Session{
    id:number;
    time:string;
    movieId:number;
    seatId:number;
    seat?:BuySeatsFromServer
}