import React from 'react';

const BenefitsFeatures = () => {
    const features = [
        {
            title: 'Easy Account Management',
            description: 'Manage all your banking needs with an intuitive and user-friendly interface, making everyday banking a breeze.',
            iconClass: 'fas fa-user-cog' // Direct Font Awesome class name
        },
        {
            title: '24/7 Customer Support',
            description: 'Our customer support team is available around the clock to help you with any banking issues or questions.',
            iconClass: 'fas fa-headset' // Direct Font Awesome class name
        },
        {
            title: 'Fast and Secure Transfers',
            description: 'Enjoy instant and safe transfers to any domestic or international account with top-notch security.',
            iconClass: 'fas fa-paper-plane' // Direct Font Awesome class name
        },
        {
            title: 'Mobile App Accessibility',
            description: 'Access your account anytime, anywhere with our fully-featured mobile app for seamless banking on the go.',
            iconClass: 'fas fa-mobile-alt' // Direct Font Awesome class name
        }
    ];

    return (
        <section className="benefits-features-icons">
            <h1>Benefits & Features</h1>
            <p>Our banking system offers a range of benefits and features designed to enhance your financial experience.</p>
            <div className="features-icons">
                {features.map((feature, index) => (
                    <div className="feature-item-icons" key={index}>
                        <div className={`icon ${feature.iconClass}`}></div>
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsFeatures;
