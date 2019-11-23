import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    //api에 따라 각 정보들을 가져온다.
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch (error) {
      console.log("TvContainer.js 오류:", error);
      this.setState({ error: "tv 정보를 찾지 못했습니다..." });
    } finally {
      this.setState({ loading: false });
      console.log(this.state);
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingTday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
