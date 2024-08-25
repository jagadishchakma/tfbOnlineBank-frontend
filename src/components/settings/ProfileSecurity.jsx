import React from 'react';

const ProfileSecurity = () => {
  return (
    <div className="profile-update">
      <form action="" className="w-50">
        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            <label htmlFor="old_pass">Old Password</label> <br/>
            <input type="password" className="w-100" name="old_pass" id="old_pass" placeholder="Old Password"/>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            <label htmlFor="new_pass">New Password</label> <br/>
            <input type="password" className="w-100" name="new_pass" id="new_pass" placeholder="New Password"/>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            <label htmlFor="new_confirm_pass">New Confirm Password</label> <br/>
            <input type="password" className="w-100" name="new_confirm_pass" id="new_confirm_pass" placeholder="New Confirm Password"/>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            <input type="submit" className="w-100 btn btn-dark" value="Change Password"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSecurity;