import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "10923b261ba94d897ac6b81148314a3f",
    language: "ko-KR"
    // language: "en-US"
  }
});

export const moviesApi = {
  // url 맨앞에 "/"이거 주의 --> "/" 있을 시 절대경로로 인식되어, baseUrl을 덮어쓴다.
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  moiveDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        // query: encodeURIComponent(term)
        query: term
      }
    })
};

export const tvApi = {
  topRated: () =>
    api.get("tv/top_rated", {
      params: {
        //append_to_response --> 이것을 통해 서브 요청가능
        //videos --> 예고편을 가져올 수 있다.
        append_to_response: "videos"
      }
    }),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        // query: encodeURIComponent(term)
        query: term
      }
    })
};
