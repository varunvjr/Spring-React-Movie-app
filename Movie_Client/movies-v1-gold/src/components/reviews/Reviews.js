import React from 'react'
import {useEffect, useRef,useState} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
const Reviews = () => {

    const revText = useRef();
    let params = useParams();
    const [movie,setMovie]=useState();
    const [reviews,setReviews]=useState();
    const [moviePoster,setMoviePoster]=useState();
    const movieId = params.movieId;
    console.log("Movie data :",moviePoster)
    const getMovieData=async(movieId)=>{
        try{
          const {data}=await api.get(`/api/v1/movies/${movieId}`);
          setMovie(data);
          setReviews(data.reviews);
          setMoviePoster(data.poster)
        }catch(err){
          console.log(err);
        }
    }
    useEffect(()=>{
        getMovieData(movieId);
    },[movieId])
    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

            const updatedReviews = [...reviews, {body:rev.value}];

            rev.value = "";

            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }




    }



  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
        <Col> <img src={moviePoster} alt="" /></Col>
        <Col>

            <>
                <Row>
                    <Col>
                        <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>

            </>

        </Col>
        </Row>

    </Container>
  )
}

export default Reviews
