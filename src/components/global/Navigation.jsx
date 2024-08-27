import Link from "next/link";
import '@/css/global_css/aside_navigation.css';
import { usePathname } from "next/navigation";
import Image from "next/image";
import deposit from '@/images/deposit.png';
import withdraw from '@/images/total_withdraw.png';

const Navigation = () => {
    const pathname = usePathname();
    return (
        <aside id="main-nav">
            <h4>TFB</h4>
            <nav>
                <Link href="/dashboard" className={pathname == '/dashboard'?'active':'inactive'}><i className="bi bi-houses-fill"></i> Dashboard</Link>
                <Link href="/transfer" className={pathname == '/transfer'?'active':'inactive'}><i className="bi bi-sign-turn-left-fill"></i> Transfer</Link>
                <Link href="/deposit" className={pathname == '/deposit'?'active':'inactive'}><Image src={deposit} alt="D" width={15} height={15}/> Deposit</Link>
                <Link href="/withdraw" className={pathname == '/withdraw'?'active':'inactive'}><Image src={withdraw} alt="D" width={15} height={15}/> Withdraw</Link>
                <Link href="/transactions" className={pathname == '/transactions'?'active':'inactive'}><i className="bi bi-arrow-left-right"></i> Transactions</Link>
                <Link href="/dashboard"><i className="bi bi-person-vcard"></i> Accounts and Cards</Link>
                <Link href="/dashboard"><i className="bi bi-bar-chart-fill"></i> Investments</Link>
            </nav>
            <nav>
                <Link href="/settings" className={pathname == '/settings'?'active':'inactive'}><i className="bi bi-person-fill-gear"></i> Settings</Link>
                <Link href="/logout"><i className="bi bi-box-arrow-right"></i> Log out</Link>
            </nav>
        </aside>
    );
};

export default Navigation;