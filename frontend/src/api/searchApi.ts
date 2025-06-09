import axios from "axios";
// import { PaginatedResult } from "../models/common";
import { axiosResponseBody } from "./agent";
import { APIResult, PaginatedResult } from "../models/common";
import { QueriedAutocompleteOption, WikiPageSearchResult } from "../models/search";

export const searchApi = {
    autocompleteSearch: (params: URLSearchParams): Promise<APIResult<PaginatedResult<QueriedAutocompleteOption[]>>> => 
        axios.get<PaginatedResult<QueriedAutocompleteOption[]>>(`/search/autocomplete`, { params }).then(axiosResponseBody),
    search: (params: URLSearchParams): Promise<APIResult<PaginatedResult<WikiPageSearchResult[]>>> => 
        axios.get<PaginatedResult<WikiPageSearchResult[]>>(`/search`, { params }).then(axiosResponseBody)
}