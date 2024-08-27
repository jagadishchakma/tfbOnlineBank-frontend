import TopBar from "@/components/global/TopBar";
export const metadata = {
  title: "Transactions",
  description: "TFB online banking is banking platform service for valuable customer.",
};

const SettingsLayout = ({ children }) => {
  return (
    <>
      <TopBar title="Account Settings" />
      {children}
    </>
  );
};

export default SettingsLayout;