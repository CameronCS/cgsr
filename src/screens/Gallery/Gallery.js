import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Gallery.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Environment from '../../Environment';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const imgArray = [];
    const videoArray = [];
    for (let i = 0; i < 35; i++) {
      imgArray.push(Environment.galleryUrl('images', i + 1, 'jpeg'));
    }
    for (let i = 0; i < 4; i++) {
      videoArray.push(Environment.galleryUrl('videos', i + 1, 'mp4'));
    }
    setVideos(videoArray);
    setImages(imgArray);
  }, []);

  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false, // Disable auto-scroll for videos
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='gallery-main'>
      <h1 className='gallery-header'>Our Gallery</h1>
      <h2>Our Pictures</h2>
      <Slider {...imageSettings} className='gallery-carousel'>
        {images.map((image, index) => (
          <div className='gallery-item' key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} className='gallery-img' />
          </div>
        ))}
      </Slider>

      <h2>Our Videos</h2>
      <Slider {...videoSettings} className='gallery-carousel'>
        {videos.map((video, index) => (
          <div className='gallery-item' key={index}>
            <video src={video} alt={`Gallery Video ${index + 1}`} className='gallery-video' controls />
          </div>
        ))}
      </Slider>
    </div>
  );
}
