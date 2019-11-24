import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";
import { request } from "http";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: null,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    console.log("DetailContainer.js / this.props: ", this.props); // {match, location, history}
    // route는 기본적으로 props를 전달 받는다.
    // https://reacttraining.com/react-router/web/api/Route/route-props
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/"); // id가 숫자가 아닐경우 "/" 경로로 보내버린다.
    }
    let result = null;
    try {
      if (isMovie) {
        const request = await moviesApi.moiveDetail(parseId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parseId);
        result = request.data;
      }
    } catch (error) {
      console.log("DetailContainer.js / error: ", error);
      this.setState({ error: "해당 검색어를 찾을 수 없습니다." });
    } finally {
      console.log("DetailContainer.js / result: ", result);
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
