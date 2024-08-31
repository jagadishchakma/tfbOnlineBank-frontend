import Link from "next/link";
import './nav.css'
import TopBar from "@/components/global/TopBar";
import PrivateRoute from "@/js/PrivateRoute";


export const metadata = {
  title: "TFB Settings",
  description: "TFB online banking is banking platform service for valuable customer.",
};

const SettingsLayout = ({children}) => {
  return (
    <PrivateRoute>
      <nav className="settings-nav">
        <TopBar title="Account Settings"/>
        <ul className="d-flex align-items-center gap-4  shadow-sm">
          <li><Link href="/settings?type=profile-info" className="d-flex align-items-center gap-2"><i className="bi bi-person-up"></i> Personal Info</Link></li>
          <li><Link href="/settings?type=profile-security" className="d-flex align-items-center gap-2"><i className="bi bi-unlock-fill"></i> Password and Security</Link></li>
        </ul>
      </nav>
      {children}
    </PrivateRoute>
  );
};

export default SettingsLayout;