import axios from "axios";
// import { PaginatedResult } from "../models/common";
import { axiosResponseBody } from "./agent";
import { WikiPageRecord } from "../models/wikipage";

export const wikipagesApi = {
    getWikiPage: (pageId: string) => 
        axios.get<WikiPageRecord>(`/wikipages/${pageId}`, {}).then(axiosResponseBody)
}