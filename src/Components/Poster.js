import React from "react";
import PropTypes from 'prop-types'; // 타입스트립트처럼 타입을 체크해줌
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const Image = styled.div`
  height : 180px;
  background-image : url(${props => props.bgUrl});
  background-size : cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;


const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;



const Title = styled.div`
  margin-bottom : 3px;
`;

const Year = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;


const Poster = ({ id, imageUrl, title, rating, year, isMovie=false }) => {
  // console.log(`===>`, require('../assets/noPosterSmall.png'));
  return(
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image bgUrl={
            imageUrl
            ? `https://image.tmdb.org/t/p/w200${imageUrl}`
            : require('../assets/noPosterSmall.png').default
            }></Image>
          <Rating> ⭐{rating}/10 </Rating>
        </ImageContainer>
        <Title title={title}>
          {title.length > 13 ? `${title.substring(0, 10)}...` : title}
        </Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  )};

Poster.protoTypes = {
  id: PropTypes.number.isRequired,
  imageUrl : PropTypes.string,
  title : PropTypes.string.isRequired,
  rating : PropTypes.number,
  year : PropTypes.string,
  isMovie: PropTypes.bool
};


export default Poster;