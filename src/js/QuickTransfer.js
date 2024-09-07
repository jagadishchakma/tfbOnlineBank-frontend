import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/global/topMenu.css';
import { useState, useRef, useEffect } from 'react';

const NavigationSlider = ({ navlink }) => {
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
    const {pathname} = useLocation();
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
};

export default NavigationSlider;
