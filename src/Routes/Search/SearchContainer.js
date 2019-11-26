import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleSubmit = event => {
    //Form 태그 제출시 실행되는 함수로써, searchByTerm 실행시키는 역할
    event.preventDefault(); // submit 이벤트 발생시 새로고침되는 기본기능 차단
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    //searTerm 값을 Input 태그 value 값과 연동시키는 역할
    const {
      target: { value }
    } = event;
    this.setState({ searchTerm: value });
  };

  searchByTerm = async () => {
    //검색어를 통해, api를 사용허여 영화, tv 자료를 가져오는 역할
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch (error) {
      this.setState({ error: " 검색 오류입니다..." });
      console.log("SearchContainer.js 오류:", error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
