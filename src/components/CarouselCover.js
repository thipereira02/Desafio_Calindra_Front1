import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';

export default function CarouselCover() {
    return (
        <Cover>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                <div>
                    <img alt="Descontos" src={img1} />
                </div>
                <div>
                    <img alt="Nova coleção" src={img2} />
                </div>
            </Carousel>           
        </Cover>
    );
}

const Cover = styled.div`
  margin: 120px auto;
  width: 80%;
  height: 100px;
`;