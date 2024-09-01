
import PrivateRoute from "@/js/PrivateRoute";
export const metadata = {
  title: "Transactions",
  description: "TFB online banking is banking platform service for valuable customer.",
};

const SettingsLayout = ({ children }) => {
  return (
    <PrivateRoute>
      {children}
    </PrivateRoute>
  );
};

export default SettingsLayout;