import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../images/imgProd/ava-1.jpg';
import ava02 from '../../images/imgProd/ava-2.jpg';
import ava03 from '../../images/imgProd/ava-3.jpg';
import ava04 from '../../images/imgProd/avatar.jpg';
import classes from './testimonials.module.css';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.titles}>
            <hr className={classes.separator} />
            <h2>Reviews</h2>
            <h5>What our fans are saying</h5>
          </div>
          <Slider {...settings}>
           
            <div className={classes.testimonial}>
                <p>
                "My journey to Morocco was a dream come true! The beauty of the destinations surpassed my expectations.
                The local culture left a lasting impression. Can't wait to visit again!"
                </p>

                <div className={classes.avatarContainer}>
                    <img src={ava01} className={classes.avatar} alt="" />
                    <div className={classes.testimonialInfo}>
                        <p className={`${classes.mb0} mt-3`}>John Doe</p>
                        {/* <p>Customer</p> */}
                    </div>
                </div>
            </div>
            <div className={classes.testimonial}>
                <p>
                "Morocco's artisanal products are a true reflection of the country's rich heritage. I bought some beautiful handmade crafts that are now the centerpiece of my home. Authenticity at its best!"
                </p>

                <div className={classes.avatarContainer}>
                    <img src={ava02} className={classes.avatar} alt="" />
                    <div className={classes.testimonialInfo}>
                        <p className={`${classes.mb0} mt-3`}>Juddy About</p>
                        {/* <p>Customer</p> */}
                    </div>
                </div>
            </div>
            <div className={classes.testimonial}>
                <p>
                "Kudos to the website for showcasing Morocco's hidden gems! The recommendations were spot-on, and the trip was a perfect blend of culture and relaxation. Highly recommended!"
                </p>

                <div className={classes.avatarContainer}>
                    <img src={ava03} className={classes.avatar} alt="" />
                    <div className={classes.testimonialInfo}>
                        <p className={`${classes.mb0} mt-3`}>Stevan Elliot</p>
                        {/* <p>Customer</p> */}
                    </div>
                </div>
            </div>
            <div className={classes.testimonial}>
                <p>
                "The bustling markets, the aroma of spices, and the stunning architecture create an unforgettable experience. A must-visit for every traveler!"
                </p>

                <div className={classes.avatarContainer}>
                    <img src={ava04} className={classes.avatar} alt="" />
                    <div className={classes.testimonialInfo}>
                        <p className={`${classes.mb0} mt-3`}>Luis Reme</p>
                        {/* <p>Customer</p> */}
                    </div>
                </div>
            </div>
         
        </Slider>
        </div>
            </div>
    );
};

export default Testimonials;
