import axios from "axios"

export const postVideo = async (data) => {
    const res = await axios.post('http://localhost:3000/api/videos', data)
    return res.data
}
