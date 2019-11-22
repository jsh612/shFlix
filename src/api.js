import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "10923b261ba94d897ac6b81148314a3f",
    language: "ko-KR"
  }
})


export const movieApi = {
  // url 맨앞에 "/"이거 주의 --> "/" 있을 시 절대경로로 인식되어, baseUrl을 덮어쓴다.
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
}

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
}