import axios from "axios";
// import { PaginatedResult } from "../models/common";
import { axiosResponseBody } from "./agent";
import { ChangePasswordValues, SignUpFormValues, User, UserLogin } from "../models/auth";

export const authApi = {
    login: (values: UserLogin) =>
        axios.post<User>(`/auth/login`, { values }).then(axiosResponseBody),
    register: (values: SignUpFormValues) =>
        axios.post<User>(`/auth/register`, { values }).then(axiosResponseBody),
    changePassword: (values: ChangePasswordValues) =>
        axios.post<User>(`/auth/changePassword`, { values }).then(axiosResponseBody),
}