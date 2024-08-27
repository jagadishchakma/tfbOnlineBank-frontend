'use client';
import { authApi } from '@/js/api';
import { AuthContext } from '@/js/AuthContext';
import { useContext, useState } from 'react';

const ProfileSecurity = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    old_pass: false,
    new_pass: false,
    confirm_pass: false
  })
  const { user, logout, setReloadUser, reloadUser, finished } = useContext(AuthContext);

  //passwordchange handler
  const handleChagnePass = (e) => {
    e.preventDefault();
    setLoading(true)
    if (newPassword != confirmPassword) {
      setErrors({ old_pass: false, new_pass: false, confirm_pass: 'Password dosen\'t match' })
      setLoading(false)
      return
    }

    const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!check.test(newPassword)) {
      setErrors({ old_pass: false, confirm_pass: false, new_pass: 'Password must be 6 character with number,symbol,lowercase,upercase' })
      setLoading(false)
      return
    }

    try {
      authApi.post('accounts/pass_change/', { old_pass: oldPassword, new_pass: newPassword })
      logout()
      setLoading(false)
    } catch (error) {
      console.log(error);
      setErrors({ old_pass: false, new_pass: 'Please provide a strong password', confirm_pass: false })
      setLoading(false)
    }
  }

  return (
    <div className="profile-update">
      <form onSubmit={handleChagnePass} className="w-50">
        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            <label htmlFor="old_pass">Old Password </label> <br />
            <input type="password" className="w-100" name="old_pass" id="old_pass" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required/>
            {errors.old_pass && <span className="invalid-feedback">{errors.old_pass}</span>}
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            <label htmlFor="new_pass">New Password </label> <br />
            <input type="password" className="w-100" name="new_pass" id="new_pass" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
            {errors.new_pass && <span className="invalid-feedback">{errors.new_pass}</span>}
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            <label htmlFor="new_confirm_pass"> New Confirm Password </label> <br />
            <input type="password" className="w-100" name="new_confirm_pass" id="new_confirm_pass" placeholder="New Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
            {errors.confirm_pass && <span className="invalid-feedback">{errors.confirm_pass}</span>}
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="form-group w-100">
            {loading ? <button className="btn btn-dark w-100"><div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div></button> : <input type="submit" className="btn btn-dark w-100" value="Change Password" />}

          </div>
        
        </div>
      </form>
    </div>
  );
};

export default ProfileSecurity;