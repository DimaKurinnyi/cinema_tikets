import { Seat } from "./seat"

export interface OrderData {
    sessionId:number
    buy_seats:Seat[]
}