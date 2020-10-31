import React from "react";
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import "../index.css";


let SlideShow = () =>
    <Container className="container">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Find Your Newest Furry Friend</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.sensorpush.com/system/images/images/000/000/018/original/reptiles-main.jpg?1518804727"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Find Your Next Retilian Friend</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static01.nyt.com/images/2020/10/28/arts/28auto-auction-bat-9/28auto-auction-bat-9-videoLarge.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Find A Unique Automobile</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.roadiemusic.com/blog/wp-content/uploads/2017/12/Manzer-Guitars-instrument-photo-1-1.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Find That One-of-a-kind Instrument</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://visitindiana.com/blog/wp-content/uploads/2017/10/MG_9644.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Stay In A Haunted House</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.gannett-cdn.com/media/2019/03/28/USATODAY/usatsports/hammock-on-beach-vacation-philippines.jpg?width=660&height=371&fit=crop&format=pjpg&auto=webp"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Book Your Next Vacation</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.kidcheck.com/wp-content/uploads/2019/09/Tools-from-nathan-laytka.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Find The Right Tool For The Job</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>


    </Container>




export default SlideShow;