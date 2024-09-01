'use client'

import { useState } from "react";
import busines1 from '@/images/busines1.jpg';
import busines2 from '@/images/busines2.jpg';
import busines3 from '@/images/busines3.jpg';
import busines4 from '@/images/busines4.jpg';
import busines5 from '@/images/busines5.jpg';
import Image from "next/image";

const BusinessBanking = () => {
    const [active, setActive] = useState('box-1');

    return (
        <div className="container">
            <div className="business-banking">
                <h2 className="text-center product-title">Business Banking</h2>
                <nav>
                    <ul className="navbar-nav d-flex flex-row justify-content-around align-items-center">
                        <li className="nav-item">
                            <span className="nav-link" onClick={() => setActive('box-1')}>Investing Basics</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={() => setActive('box-2')}>Find a Credit Card</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={() => setActive('box-3')}>Payment Technologies</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={() => setActive('box-4')}>Card Benefits</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={() => setActive('box-5')}>Digital Wallets</span>
                        </li>
                    </ul>
                </nav>
                <div className="business-banking-box">
                    <div className="box-1 business-box" id={active == 'box-1' ? 'active' : 'inactive'}>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Image src={busines1} alt="business1" />
                            </div>
                            <div className="col-md-6">
                                <h3>Nothing is impossible. We can help you achieve your goals!</h3>
                                <p>The UK’s largest banking groups are required to comply with ring-fencing requirements from 1 January 2019. Find out more about our approach and what it means for you</p>
                                <button className="btn btn-danger">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-2 business-box" id={active == 'box-2' ? 'active' : 'inactive'}>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Image src={busines2} alt="business2" />
                            </div>
                            <div className="col-md-6">
                                <h3>Find the card that’s right for you. Explore the benefits.
                                </h3>
                                <p>Get the financial freedom you deserve. Credit cards offer exceptional benefits, rewards, services and spending power that can help make your financial and personal dreams come true.</p>
                                <button className="btn btn-danger">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-3 business-box" id={active == 'box-3' ? 'active' : 'inactive'}>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Image src={busines3} alt="business3" />
                            </div>
                            <div className="col-md-6">
                                <h3>Transforming the way you pay. Explore new ways to pay

                                </h3>
                                <p>We offer an array of products that make it possible to pay anywhere, on any device. We’re bringing solutions to life to change the way you pay – through our innovative digital wallet service.</p>
                                <button className="btn btn-danger">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-4 business-box" id={active == 'box-4' ? 'active' : 'inactive'}>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Image src={busines4} alt="business4" />
                            </div>
                            <div className="col-md-6">
                                <h3>Debit and Credit Card Protection Tips to Prevent Financial Fraud

                                </h3>
                                <p>Escape from the daily routine and relax at a spa, go on a thrill-seeking adventure, or take in a round of golf with pro instruction. Access restaurant reviews and make dining reservations online.</p>
                                <button className="btn btn-danger">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-5 business-box" id={active == 'box-5' ? 'active' : 'inactive'}>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Image src={busines5} alt="business5" />
                            </div>
                            <div className="col-md-6">
                                <h3>Privacy, Innovation and Security in the Digital Payments World
                                </h3>
                                <p>Easy – Load credit, debit, reloadable prepaid or small business cards from participating Alister Bank issuers. Any of your cards can be used across hundreds of thousands of supported merchants.</p>
                                <button className="btn btn-danger">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessBanking;