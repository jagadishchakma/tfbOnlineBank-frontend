import Link from "next/link";
import './nav.css'

const SettingsLayout = ({children}) => {
  return (
    <>
      <nav className="settings-nav">
        <h4>Account Settings</h4>
        <ul className="d-flex align-items-center gap-4">
          <li><Link href="/settings/profile-info"><i class="bi bi-person-up"></i> Personal Info</Link></li>
          <li><Link href="/settings/profile-security"><i class="bi bi-unlock-fill"></i> Password and Security</Link></li>
          <li><Link href="/settings/profile-notification"><i class="bi bi-bell-fill"></i> Notifications</Link></li>
          <li><Link href="/settings/profile-plan"><i class="bi bi-receipt"></i> Choose Plan</Link></li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default SettingsLayout;