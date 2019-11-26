import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      {/* value 값을 searchTerm과 연동시켜 사용자가 입력이 해당 값이 변하도록한다 */}
      <Input
        placeholder="Search Movie or TV Show....."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="영화">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date : ""}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {movieResults && movieResults.length === 0 && (
          <Section title="영화">
            <Message color="#e74c3c" text={`해당 영화가 없습니다.`} />
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV 프로그램">
            {tvResults.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date ? show.first_air_date : ""}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length === 0 && (
          <Section title="TV 프로그램">
            <Message color="#e74c3c" text={`해당 TV 프로그램이 없습니다.`} />
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c" text={error} />}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  updataTerm: PropTypes.func
};

export default SearchPresenter;
