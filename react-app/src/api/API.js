import axios from "axios"

let instanceForUsers = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceForUsers.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}