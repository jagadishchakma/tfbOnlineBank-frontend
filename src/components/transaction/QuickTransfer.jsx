'use client';
import '@/css/transaction_css/quick_transfer.css';
// import navigationSlider from '@/js/QuickTransfer';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import { authApi } from '@/js/api';
import { AuthContext } from '@/js/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import notFound from '@/images/not_found.png'

const QuickTransfer = () => {
    const [show, setShow] = useState('list');
    const [account_no, setAccountNo] = useState('');
    const [loading, setLoading] = useState('');
    const [user_account, setUserAccount] = useState([]);
    const [quickList, setQuickList] = useState([]);
    // start hello
    const [activeTab, setActiveTab] = useState('');
    const tabListRef = useRef(null);
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);

    const handleTabClick = (path) => {
        setActiveTab(path);
    };

    const handleScroll = () => {
        const tabList = tabListRef.current;
        const tabListWidth = tabList.offsetWidth;
        const tabListScrollWidth = tabList.scrollWidth;
        const scrollLeft = tabList.scrollLeft;

        if (tabListWidth >= tabListScrollWidth) {
            leftArrowRef.current.classList.remove('active');
            rightArrowRef.current.classList.remove('active');
        } else {
            if (scrollLeft <= 0) {
                leftArrowRef.current.classList.remove('active');
                rightArrowRef.current.classList.add('active');
            } else if (scrollLeft + tabListWidth >= tabListScrollWidth - 1) {
                leftArrowRef.current.classList.add('active');
                rightArrowRef.current.classList.remove('active');
            } else {
                leftArrowRef.current.classList.add('active');
                rightArrowRef.current.classList.add('active');
            }
        }
    };

    const scrollRight = () => {
        tabListRef.current.scrollLeft += 300;
        handleScroll();
    };

    const scrollLeft = () => {
        tabListRef.current.scrollLeft -= 300;
        handleScroll();
    };

    const handleMouseDown = (e) => {
        tabListRef.current.classList.add('dragging');
        const onMouseMove = (e) => {
            tabListRef.current.scrollLeft -= e.movementX;
            handleScroll();
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            tabListRef.current.classList.remove('dragging');
            document.removeEventListener('mousemove', onMouseMove);
        });
    };

    //side effect
    const pathname = usePathname();
    useEffect(() => {
        const tabList = tabListRef.current;
        if (!tabList) return;
        setActiveTab(pathname)
        handleScroll();
        tabList.addEventListener('scroll', handleScroll);

        return () => {
            tabList.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // end hello

    const { reloadUser, setReloadUser, setTransfer } = useContext(AuthContext);


    useEffect(() => {
        const getQuickList = async () => {
            const response = await authApi.get('accounts/quick/list/all/');
            if (response) {
                setQuickList(response.data);
            }
        }
        getQuickList();
    }, [reloadUser]);


    const router = useRouter();
    const handleQuickTransfer = (data) => {
        setTransfer(data);
        router.push('/transfer')
    }

    const getTopNavMenu = () => {
        const item = quickList.map((data, index) => {
            return (
                <div key={index} onClick={() => handleQuickTransfer({ sender: data.sender.profile.account_no, receiver: data.receiver.profile.account_no })}>
                    <Link href="#" className="tab d-flex flex-column justify-content-center align-items-center" >
                        <div className="quick-image d-flex justify-content-center align-items-center">
                            <img src={data.receiver.profile.image} alt="profile" width="50" height="60" />
                        </div>
                        <div className='text-center'>
                            <h6>{data.receiver.first_name}</h6>
                            <h6>{data.receiver.last_name}</h6>
                        </div>
                    </Link>
                </div>
            )
        })
        return item;
    }

    const listItem = () => {
        return (
            <div className="tab-bar">
                <div className="tabs d-flex gap-2" ref={tabListRef} onMouseDown={handleMouseDown}>
                    {getTopNavMenu()}
                </div>
            </div>
        )
    }

    //addNewSubmit 
    const addNewSubmit = (e) => {
        e.preventDefault();
        setLoading('run');
        setUserAccount([]);
        const searchAccount = async () => {

            try {
                const response = await authApi.get(`accounts/search/${account_no}/`);
                setUserAccount(response.data);
                if (response.data.user) {
                    setLoading('yes');
                } else {
                    setLoading('no');
                }
            } catch (error) {
                setLoading('no');
            }

        }
        searchAccount();
    }
    console.log(loading, user_account)

    // const addQuickTransfer
    const addQuickTransfer = async () => {
        const response = await authApi.post(`accounts/quick/add/now/time/`, { account: user_account.account_no })
        if (response) {
            setReloadUser(reloadUser + 1);
            setShow('list');
            setUserAccount([]);
        }
    }

    //showitem
    const showItem = () => {
        return (
            <div className="d-flex flex-column align-items-center show-item mt-4" onClick={addQuickTransfer}>
                <div className="show-image">
                    <img src={user_account.image} alt="profile" width="50" height="60" />
                </div>
                <h6>{user_account.user.username}</h6>
            </div>
        )
    }

    const addItem = () => {
        return (
            <div className="add-item">
                <form className="d-flex justify-content-between align-items-center mt-2" onSubmit={addNewSubmit}>
                    <input type="search" name="" className="w-100 p-2" value={account_no} onChange={(e) => setAccountNo(e.target.value)} placeholder="account number" />
                    <button type="submit" className="p-2"><i className="bi bi-search"></i></button>
                </form>
                {user_account.user && showItem()}
                {loading == 'run' && <div className="loader"></div>}
                {loading == 'no' && <Image src={notFound} alt="not-found" width={100} height={100} className="m-auto mt-5 d-block" />}
            </div>
        )
    }
    return (
        <div className="quick-transfer-box">
            <div className="quick-transfer">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>Quick Transfer</div>
                    <div className="scroll-bar d-flex justify-content-between align-items-center gap-3">
                        {
                            show == 'list' && (<>
                                <div className="left-arrow quick-arrow" ref={leftArrowRef}
                                    onClick={scrollLeft}>
                                    <i className="bi bi-chevron-left"></i>
                                </div>
                                <div className="right-arrow active" ref={rightArrowRef}
                                    onClick={scrollRight}>
                                    <i className="bi bi-chevron-right quick-arrow"></i>
                                </div>
                            </>)
                        }
                        {
                            show == 'add' && <div className="remove-add" onClick={() => setShow('list')}><i className="bi bi-x-circle"></i></div>
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="add-new-btn" onClick={() => setShow('add')}>
                            <div className="add-new d-flex justify-content-center align-items-center"><i className="bi bi-plus-lg"></i></div>
                            <div className="add-new-text">Add New</div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="tab-container sticky-top">
                            <div className="stack-tab-container">
                                {show == 'list' && listItem()}
                                {show == 'add' && addItem()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickTransfer;