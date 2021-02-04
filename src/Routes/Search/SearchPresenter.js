import React from "react";
import PropTypes from 'prop-types'; // 타입스트립트처럼 타입을 체크해줌
import styled from 'styled-components';
import Helmet from "react-helmet";

import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom : 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width : 100%;
`;

const SearchPresenter = ({ movieResult, tvResult, searchTerm, updateTerm, handleSubmit, error, loading }) => 
  <Container>
    <Helmet>
      <title>Loading | Jangflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input type='text' placeholder='Search Movies or TV Shows..' value={searchTerm} onChange={updateTerm}></Input>
    </Form>
    { loading ? <Loader/> : (
      <>
        {
          movieResult && movieResult.length > 0 && (
            <Section title='Moves Result'>
              {movieResult.map( res => (
                <Poster
                  key={res.id}
                  id={res.id}
                  imageUrl={res.poster_path}
                  title = {res.title}
                  rating = {res.vote_average}
                  year={res.release_date.substring(0, 4)}
                  res = {true}
                >
                  {res.title}
                </Poster>
              )) }
            </Section>
          )
        }
        {
          tvResult && tvResult.length > 0 && (
            <Section title='TV Result'>
              {tvResult.map( res => (
                <Poster
                  key={res.id}
                  id={res.id}
                  imageUrl={res.poster_path}
                  title = {res.name}
                  rating = {res.vote_average}
                  year={res.first_air_date.substring(0, 4)}
                  res = {false}
                >
                  {res.title}
                </Poster>
              )) }
            </Section>
          )
        }
        {error && <Message color="#e74c3c" text={error} />}
        { movieResult && 
          tvResult && 
          movieResult.length === 0 && 
          tvResult.length === 0 && (
          <Message color='#95a5a6' text='Nothing found' /> 
          )}
      </>
    )}

    
  </Container>;

SearchPresenter.propTypes = {
  movieResult : PropTypes.array,
  tvResult : PropTypes.array,
  searchTerm : PropTypes.string,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;