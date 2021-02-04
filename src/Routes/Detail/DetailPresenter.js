import React from "react";
import PropTypes from 'prop-types'; // 타입스트립트처럼 타입을 체크해줌
import styled from 'styled-components';
import Helmet from "react-helmet";

import Loader from 'Components/Loader';
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width : 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  z-index: 1;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, error, loading }) => {

  if(!result) return <Loader/>
  // console.log(`DetailPresenter result`, result);
  return (
    loading
    ? (
        <>
          <Loader/>
          <Helmet>
            <title>Loading | Jangflix</title>
          </Helmet>
        </>
      )
    : (

      error ? <Message color="#e74c3c" text={error} /> :
      <Container>

        <Helmet>
          <title>
            {result.title ? result.title : result.name}{ " " } | Jangflex
          </title>
        </Helmet>

        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result 
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : require('../../assets/noPosterSmall.png').default
            }
          />
          <Data>
            <Title>
            {result.title
              ? result.title
              : result.name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]} min
              </Item>
              <Divider>•</Divider>
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
    )
  )
  
};

DetailPresenter.propTypes = {
  result : PropTypes.object,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string
}

export default DetailPresenter;