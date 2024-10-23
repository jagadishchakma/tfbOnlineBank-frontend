import React from 'react';

const SecurityComplaince = () => {
    const securityFeatures = [
        {
            title: 'Data Encryption',
            description: 'We use advanced encryption techniques to protect your data and ensure that your financial information remains private and secure.',
            iconClass: 'fas fa-lock' // Direct Font Awesome class name
        },
        {
            title: 'Multi-Factor Authentication',
            description: 'Enable multi-factor authentication to add an extra layer of security to your account, keeping your finances safe from unauthorized access.',
            iconClass: 'fas fa-fingerprint' // Direct Font Awesome class name
        },
        {
            title: 'Regulatory Compliance',
            description: 'Our platform complies with industry regulations and standards, ensuring your banking activities meet the highest legal and ethical standards.',
            iconClass: 'fas fa-shield-alt' // Direct Font Awesome class name
        },
        {
            title: 'Fraud Detection & Monitoring',
            description: 'We continuously monitor for suspicious activity and employ advanced fraud detection systems to protect your account from potential threats.',
            iconClass: 'fas fa-eye-slash' // Direct Font Awesome class name
        },
        {
            title: 'Secure Transactions',
            description: 'All transactions are processed through secure servers with end-to-end encryption, giving you peace of mind when managing your finances.',
            iconClass: 'fas fa-exchange-alt' // Direct Font Awesome class name
        },
        {
            title: 'Data Privacy Protection',
            description: 'Your personal information is stored securely, and we are committed to safeguarding your data in accordance with privacy regulations.',
            iconClass: 'fas fa-user-secret' // Direct Font Awesome class name
        }
    ];

    return (
        <section className="security-compliance-icons">
            <h1>Security & Compliance</h1>
            <p>Our banking platform ensures top-level security measures to keep your data and transactions safe, complying with all regulatory standards.</p>
            <div className="security-features-icons">
                {securityFeatures.map((feature, index) => (
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

export default SecurityComplaince;
