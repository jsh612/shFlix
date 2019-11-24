import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: null
  };

  async componentDidMount() {
    console.log("DetailContainer.js ", this.props); // {match, location, history}
    // route는 기본적으로 props를 전달 받는다.
    // https://reacttraining.com/react-router/web/api/Route/route-props
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/"); // id가 숫자가 아닐경우 "/"으로 보내버린다.
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
