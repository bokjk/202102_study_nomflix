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

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => 
  loading ? (
    <>
      <Helmet>
        <title>Loading | Jangflix</title>
      </Helmet>
      <Loader />
    </>
    ) :
    <Container>
      {
        topRated && topRated.length > 0 && (
          <Section title='Top Rated'>
            { topRated.map(TV => (
            <Poster
              key={TV.id}
              id={TV.id}
              imageUrl={TV.poster_path}
              title = {TV.name}
              rating = {TV.vote_average}
              year={TV.first_air_date.substring(0, 4)}
              isMovie = {false}
            >
              {TV.name}
            </Poster>
            )) }
          </Section>
        )
      }
      {
        popular && popular.length > 0 && (
          <Section title='Popular'>
            { popular.map(TV => (
            <Poster
              key={TV.id}
              id={TV.id}
              imageUrl={TV.poster_path}
              title = {TV.name}
              rating = {TV.vote_average}
              year={TV.first_air_date.substring(0, 4)}
              isMovie = {false}
            >
              {TV.name}
            </Poster>
            )) }
          </Section>
        )
      }
      {
        airingToday && airingToday.length > 0 && (
          <Section title='Airing Today'>
            { airingToday.map(TV => (
            <Poster
              key={TV.id}
              id={TV.id}
              imageUrl={TV.poster_path}
              title = {TV.name}
              rating = {TV.vote_average}
              year={TV.first_air_date.substring(0, 4)}
              isMovie = {false}
            >
              {TV.name}
            </Poster>
            )) }
          </Section>
        )
      }

      {error && <Message color="#e74c3c" text={error} />}
    </Container>
; 

TVPresenter.propTypes = {
  topRated : PropTypes.array,
  popular : PropTypes.array,
  airingToday : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string
}

export default TVPresenter;
