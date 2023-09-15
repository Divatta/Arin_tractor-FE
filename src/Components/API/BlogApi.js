import axios from "axios";
const axiosIns = axios.create({
    baseURL: "https://arintractor.onrender.com/"
})
const BlogApi = {
    create: (blog) => {
        return axiosIns.request({
            url: '/api/v1/create',
            method: "POST",
            data: blog
        })
    },
    getAll: () => {
        return axiosIns.request({
            url: '/api/v1/blog/all',
            method: "GET"
        })
    },
    getSingle: (id) => {
        return axiosIns.request({
            url: `/api/v1/blog/single/${id}`,
            method: "GET"
        })
    },
    update: (id) => {
        return axiosIns.request({
            url: `/api/v1/update/${id}`,
            method: "PATCH"
        })
    },
    delete: (id) => {
        return axiosIns.request({
            url: `/api/v1/delete/${id}`,
            method: "DELETE"
        })
    }
}

export default BlogApi