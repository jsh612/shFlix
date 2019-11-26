import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  /* filter --> 시각효과 표현시 사용 */
  filter: blur(1.5px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-items: center;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-items: center;
    flex-direction: column;
  }
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  border-radius: 4px;
  background-size: cover;
  background-position: center center;
  @media screen and (min-width: 385px) and (max-width: 1024px) {
    justify-items: center;
    width: 50%;
    height: 50%;
  }
  @media screen and (max-width: 414px) {
    justify-items: center;
    width: 60%;
    height: 40%;
  }
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  justify-items: center;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
  @media screen and (max-width: 414px) {
    margin-top: 10px;
  }
`;

const ItemContainer = styled.div`
  margin-bottom: 10px;
`;

const Item = styled.span``;

const Dvider = styled.span`
  margin: 0 12px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w300${result.poster_path}`
              : require("../../assets/basicPoster.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
            <Dvider />[{result.title ? result.title : result.name}]
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date
                : result.first_air_date}
            </Item>
            <Dvider>•</Dvider>
            <Item>
              {result.runtime
                ? result.runtime
                : result.episode_run_time
                ? result.episode_run_time[0]
                : ""}{" "}
              min
            </Item>
            <Dvider>•</Dvider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
