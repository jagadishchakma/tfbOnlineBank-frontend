import onlineBusiness from '@/images/online_business.png';
import businessPlan from '@/images/business_plan.png';
import onlineDeposit from '@/images/online_deposit.png';
import mobileBank from '@/images/mobile_bank.png';
import Link from 'next/link';
import Image from 'next/image';
const PresentingProducts = () => {
    return (
        <div className="pressenting-box">
            <div className="container">
                <div className="pressenting-product">
                    <h3 className="text-center product-title">Presenting products and services that are right for you</h3>
                    <div className="row">
                        <div className="col-md-3 col-ms-6">
                            <div className="d-flex flex-column align-items-start justify-content-center gap-3">
                                <Image src={onlineBusiness} alt="online_business" width={50} height={55} />
                                <h3>Online Business</h3>
                                <p>Explore the power of simpler and smarter banking. Bank online with over 250 services</p>
                                <Link href="/">Apply Online</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-ms-6">
                            <div className="d-flex flex-column align-items-start justify-content-center gap-3">
                                <Image src={businessPlan} alt="online_business" width={50} height={55} />
                                <h3>Business Plan</h3>
                                <p>From shares to shopping centres and term deposits to toll roads, there’s a huge range of investments to choose</p>
                                <Link href="/">Apply Online</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-ms-6">
                            <div className="d-flex flex-column align-items-start justify-content-center gap-3">
                                <Image src={mobileBank} alt="online_business" width={50} height={55} />
                                <h3>Mobile Bank</h3>
                                <p>Explore the power of simpler and smarter banking. Bank online with over 250 services</p>
                                <Link href="/">Apply Online</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-ms-6">
                            <div className="d-flex flex-column align-items-start justify-content-center gap-3">
                                <Image src={mobileBank} alt="online_business" width={50} height={55} />
                                <h3>Online Deposit</h3>
                                <p>Explore the power of simpler and smarter banking. Bank online with over 250 services</p>
                                <Link href="/">Apply Online</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresentingProducts;