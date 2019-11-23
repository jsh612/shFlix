import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };
  async componentDidMount() {
    try {
      //api에 따라 각 정보들을 가져온다.
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({ nowPlaying, upcoming, popular });
    } catch (error) {
      console.log("HomeContairner.js 오류: ", error);
      this.setState({ error: "영화 정보를 찾지 못했습니다..." });
    } finally {
      // finally는 해당 try/catch 구문이 오류가 없던, 있던 무조건 실행됨
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
