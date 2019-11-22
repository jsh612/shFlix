import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "10923b261ba94d897ac6b81148314a3f",
    language: "ko-KR"
  }
})

// 해당 url앞에 "/" 붙일경우 절대경로로 인식되어 baseURL을 덮어쓰게된다.
// 따라서 "tv/popular" 이런식으로 작성
api.get("tv/popular");

export default api