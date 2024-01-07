
import { Session } from "../types";
import { rtkApi } from "./rtkApi";


const sessionApi = rtkApi.injectEndpoints({
    endpoints:(build)=>({
        getSessionById:build.query<Session,string>({
            query:(id)=>`sessions/${id}?_expand=seat`,
        })
    }),
overrideExisting:false,
})

export const {useGetSessionByIdQuery} = sessionApi