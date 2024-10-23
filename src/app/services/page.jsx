import React from 'react';

const page = () => {
    return (
        <section className='container mt-3 mb-3'>
            <h1>Our Services</h1>
            <p>
                At Banking Management System, we offer a variety of services to meet your financial needs. Whether
                you are looking to manage your daily finances, plan for the future, or grow your business, we have
                the right solutions for you. Our services are designed to provide you with convenience, security,
                and peace of mind.
            </p>

            <div className="service-list">
                <div className="service-item">
                    <h2>Personal Banking</h2>
                    <p>
                        Manage your personal finances effortlessly with our range of banking services, including
                        savings accounts, checking accounts, and online banking. Enjoy easy access to your funds
                        and a variety of tools to help you stay on top of your financial goals.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Business Banking</h2>
                    <p>
                        Our business banking solutions cater to the unique needs of businesses, from small
                        startups to large corporations. We offer business accounts, merchant services, cash
                        management, and lending solutions to help your business thrive.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Loans & Mortgages</h2>
                    <p>
                        We provide a range of loan products, including personal loans, auto loans, and mortgages.
                        Our competitive rates and flexible terms ensure that you can find a loan solution that fits
                        your needs and budget.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Investment Services</h2>
                    <p>
                        Take control of your financial future with our investment services. We offer a variety of
                        investment products, including mutual funds, bonds, and savings plans. Our expert advisors
                        are here to guide you through your investment journey.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Online & Mobile Banking</h2>
                    <p>
                        Experience the convenience of banking on the go. Our online and mobile banking services
                        allow you to access your accounts, transfer funds, pay bills, and manage your finances
                        from anywhere, anytime.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Credit & Debit Card Services</h2>
                    <p>
                        Enjoy the freedom and flexibility of using our credit and debit card services. Manage your
                        cards online, set spending limits, track expenses, and get rewarded for your purchases.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default page;