import Link from "next/link";
import '@/css/global_css/aside_navigation.css';
import { usePathname } from "next/navigation";
import Image from "next/image";
import deposit from '@/images/deposit.png';
import withdraw from '@/images/total_withdraw.png';
import { useContext } from "react";
import { AuthContext } from "@/js/AuthContext";
import logo from '@/images/logo.png';

const Navigation = () => {
    const pathname = usePathname();
    const {logout, toggler, setToggler} = useContext(AuthContext);
    return (
        <aside id="main-nav" className={toggler? "main-nav nav-open":"main-nav"}>
            <i className="bi bi-x-circle" id="close-main-nav" onClick={()=>setToggler(!toggler)}></i>
            <Link href="/" className="ms-3"><Image src={logo} alt="TFB Bank" width={130} height={40} className="m-auto"/></Link>
            <nav>
                <Link href="/dashboard" className={pathname == '/dashboard'?'active':'inactive'}><i className="bi bi-houses-fill"></i> Dashboard</Link>
                <Link href="/transfer" className={pathname == '/transfer'?'active':'inactive'}><i className="bi bi-sign-turn-left-fill"></i> Transfer</Link>
                <Link href="/deposit" className={pathname == '/deposit'?'active':'inactive'}><Image src={deposit} alt="D" width={15} height={15}/> Deposit</Link>
                <Link href="/withdraw" className={pathname == '/withdraw'?'active':'inactive'}><Image src={withdraw} alt="D" width={15} height={15}/> Withdraw</Link>
                <Link href="/loan" className={pathname == '/loan'?'active':'inactive'}><i className="bi bi-coin"></i> Loan</Link>
                <Link href="/transactions" className={pathname == '/transactions'?'active':'inactive'}><i className="bi bi-arrow-left-right"></i> Transactions</Link>
               
                {/* <Link href="/dashboard"><i className="bi bi-bar-chart-fill"></i> Investments</Link> */}
            </nav>
            <nav>
                <Link href="/settings" className={pathname == '/settings'?'active':'inactive'}><i className="bi bi-person-fill-gear"></i> Settings</Link>
                <Link href="#"  onClick={logout}><i className="bi bi-box-arrow-right"></i> Log out</Link>
            </nav>
        </aside>
    );
};

export default Navigation;