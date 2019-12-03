import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import IMDb from "../../Components/IMDb";
import Production from "../../Components/Production";
import Countries from "../../Components/Countries";
import Youtubes from "../../Components/Youtubes";
import Seasons from "../../Components/Seasons";

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: fixed;
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
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-items: center;
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

const Cover = styled.div`
  position: fixed;
  bottom: 40px;
  width: 35%;
  height: 80%;
  background-image: url(${props => props.bgImage});
  border-radius: 4px;
  background-size: cover;
  background-position: center center;
  @media screen and (min-width: 345px) and (max-width: 1024px) {
    position: relative;
    justify-items: center;
    width: 50%;
    height: 50%;
  }
  @media screen and (max-width: 414px) {
    position: relative;
    justify-items: center;
    width: 60%;
    height: 40%;
  }
`;

const Data = styled.div`
  width: 70%;
  margin-left: 470px;
  justify-items: center;
  @media screen and (min-width: 340px) and (max-width: 1024px) {
    margin-left: 30px;
  }
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
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SubTitle = styled.div`
  margin-top: 30px;
  font-size: 22px;
`;

const SeasonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DetailPresenter = ({ result, loading, error }) => (
  <>
    <Helmet>
      <title> 로딩중 | 황정민flix </title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>
            {" "}
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Shflix
          </title>
        </Helmet>
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
              {result.original_title ? (
                <>
                  <Dvider>•</Dvider>
                  <IMDb key={result.imdb_id} imdb_id={result.imdb_id} />
                </>
              ) : null}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            {console.log(result)}
            <SubContainer>
              {result.production_companies ? (
                <SubTitle>Production Companies</SubTitle>
              ) : null}
              {result.production_companies
                ? result.production_companies.map(logo => {
                    return logo.logo_path ? (
                      <Production
                        key={logo.logo_path}
                        logo_path={logo.logo_path}
                      />
                    ) : null;
                  })
                : null}
              {result.production_countries ? (
                <SubTitle>Production Countries</SubTitle>
              ) : null}
              {result.production_countries
                ? result.production_countries.map(name => {
                    return <Countries key={name.name} name={name.name} />;
                  })
                : null}
              {result.seasons ? <SubTitle>Seasons</SubTitle> : null}
              <SeasonContainer>
                {result.seasons
                  ? result.seasons.map(season => {
                      return (
                        <Seasons
                          id={season.id}
                          poster_path={season.poster_path}
                          name={season.name}
                        ></Seasons>
                      );
                    })
                  : null}
              </SeasonContainer>
              {result.videos.results.length > 0 ? (
                <SubTitle>예고편</SubTitle>
              ) : null}
              {result.videos.results
                ? result.videos.results.map(video => {
                    return <Youtubes key={video.key} id={video.key}></Youtubes>;
                  })
                : null}
            </SubContainer>
          </Data>
        </Content>
      </Container>
    )}
  </>
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
