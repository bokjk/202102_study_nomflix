import axios from 'axios';

// 반복되는 호출부분 초기 세팅 https://github.com/axios/axios#instance-methods
const api = axios.create({
  baseURL : 'https://api.themoviedb.org/3/',
  params : {
    api_key : 'a7bb6992bd0f00b20baf1973cb6a2e8c',
    language : 'ko-KR'
  }
})

// append_to_response: "videos" => 예고편, 관련영상들의 리스트를 가져옴
export const moviesApi = {
  nowPlaying : () => api.get('movie/now_playing'),
  upComing   : () => api.get('movie/upcoming'),
  topRated   : () => api.get('movie/top_rated'),
  popular    : () => api.get('movie/popular'),
  movieDetail: (id) => api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search     : (term) => api.get('search/movie', {
    params : {
      query : term
    }
  })
}

export const tvApi = {
  topRated   : () => api.get('tv/top_rated'),
  popular    : () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail : (id) => api.get(`tv/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search     : (term) => api.get(`search/tv`, {
    params : {
      query : term
    }
  })
}

