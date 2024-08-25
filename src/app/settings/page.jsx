'use client';

import './page.css'
import ProfileInfo from "@/components/settings/ProfileInfo";
import {useSearchParams} from "next/navigation";
import ProfileSecurity from "@/components/settings/ProfileSecurity";

const Settings = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  if(type === "profile-info") {
    return <ProfileInfo />;
  }else if(type === "profile-security") {
    return <ProfileSecurity />;
  }else{
    return <ProfileInfo/>
  }
};

export default Settings;