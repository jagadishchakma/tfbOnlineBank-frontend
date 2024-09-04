import React from 'react';
import slid1 from '@/images/slid1.jpg';
import slid2 from '@/images/slid2.jpg';
import slid3 from '@/images/slid3.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Slider = () => {
    return (
        <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={slid1} className="d-block w-100 h-100" alt="slid1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Connecting all you banking needs</h2>
                            <h2>Making It Easy for You</h2>
                            <Link href="/" className="btn btn-danger">Find our more</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slid2} className="d-block w-100 h-100" alt="slid2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Gives Back To Your Community</h2>
                            <h2>Making It Easy for You</h2>
                            <Link href="/" className="btn btn-danger">Find our more</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src={slid3} className="d-block w-100 h-100" alt="slid3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Connecting all your banking needs</h2>
                            <h2>Making It Easy for You</h2>
                            <Link href="/" className="btn btn-danger">Find our more</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;