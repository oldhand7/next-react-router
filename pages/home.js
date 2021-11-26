import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true
};

function Home() {
    return (        
        <div className="home-section">
            <div className="gif-block flex justify-center">
                <ScrollAnimation animateIn='animate__bounceIn'>
                    <img src="images/gif.gif" />
                </ScrollAnimation>
            </div>
            <div className="slide-block mt-8">
                <ScrollAnimation animateIn='animate__fadeInUp'>
                    <Slider {...settings}>
                        <div>
                            <img src={'images/1.png'} />
                        </div>
                        <div>
                            <img src={'images/2.png'} />
                        </div>
                        <div>
                            <img src={'images/3.png'} />
                        </div>
                        <div>
                            <img src={'images/4.png'} />
                        </div>
                        <div>
                            <img src={'images/5.png'} />
                        </div>
                    </Slider>
                </ScrollAnimation>
            </div>
            
        </div>
    )
}

export default Home;
