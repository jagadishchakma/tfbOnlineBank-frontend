import Link from "next/link";
import './nav.css'


export const metadata = {
  title: "TFB Settings",
  description: "TFB online banking is banking platform service for valuable customer.",
};

const SettingsLayout = ({children}) => {
  return (
    <>
      <nav className="settings-nav">
        <h4>Account Settings</h4>
        <ul className="d-flex align-items-center gap-4  shadow-sm">
          <li><Link href="/settings?type=profile-info"><i className="bi bi-person-up"></i> Personal Info</Link></li>
          <li><Link href="/settings?type=profile-security"><i className="bi bi-unlock-fill"></i> Password and Security</Link></li>
          <li><Link href="/settings?type=profile-notification"><i className="bi bi-bell-fill"></i> Notifications</Link></li>
          <li><Link href="/settings?type=profile-plan"><i className="bi bi-receipt"></i> Choose Plan</Link></li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default SettingsLayout;