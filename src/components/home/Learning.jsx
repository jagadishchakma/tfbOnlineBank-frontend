import learning from '@/images/last.jpg';
import Image from 'next/image';
const Learning = () => {
    return (
        <div className="container">
            <div className="bank-learning">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Image src={learning} alt="learning"/>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center gap-3">
                        <h5>LEARNING CENTER</h5>
                        <h2>Making internet a brand new experience</h2>
                        <p>Online banking can save you a lot of time and effort, you can undertake most transactions from the comforts of your home. However, it is crucial to use internet banking safely</p>
                        <button className='btn btn-primary'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;