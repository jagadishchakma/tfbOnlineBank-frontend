
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/js/AuthContext";
import { authApi, uploadApi } from "@/js/api";

const ProfileInfo = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { user, setReloadUser, reloadUser } = useContext(AuthContext);
  const [personalInfo, setPersonalInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_no: '',
    gender: '',
    birth_year: '',
    birth_month: '',
    birth_date: '',
    street_address: '',
    zip_code: '',
    city: '',
    state: '',
    country: '',
  });


  useEffect(() => {
    setPersonalInfo({
      first_name: user && user.first_name ? user.first_name : '',
      last_name: user && user.last_name ? user.last_name : '',
      email: user && user.email ? user.email : '',
      phone_no: user && user.profile.phone_no ? user.profile.phone_no : '',
      gender: user && user.profile.gender ? user.profile.gender : 'choose',
      birth_year: user && user.profile.birth_year ? user.profile.birth_year : '',
      birth_month: user && user.profile.birth_month ? user.profile.birth_month : '',
      birth_date: user && user.profile.birth_date ? user.profile.birth_date : '',
      street_address: user && user.profile.street_address ? user.profile.street_address : '',
      zip_code: user && user.profile.zip_code ? user.profile.zip_code : '',
      city: user && user.profile.city ? user.profile.city : '',
      state: user && user.profile.state ? user.profile.state : '',
      country: user && user.profile.country ? user.profile.country : '',
    })
  }, [user])

  const handleUpdateProfileSubmit = async (e) => {
    setMessage('');
    setLoading(true);
    e.preventDefault();
    try {
      await authApi.patch('accounts/update/profile/', personalInfo);
      setMessage('success')
      setTimeout(() => {
        setLoading(false);
        setMessage('');
        setReloadUser(reloadUser + 1);
      }, 2000);
    } catch (error) {
      setLoading(false);
      setMessage('error')
    }
  }

  const handleProfileImageChange = async (e) => {
    const image = e.target.files[0];
    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await uploadApi.post('accounts/upload/profile/', formData);
      setReloadUser(reloadUser + 1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="profile">
        <img src={user && user.profile.image} alt="" />
        <div className="profile-image-edit">
          <input type="file" id="profile-image-input" hidden onChange={handleProfileImageChange} />
          <label htmlFor="profile-image-input">
            <i className="bi bi-pencil"></i>
          </label>
        </div>
      </div>
      <div className="profile-update">
        <form onSubmit={handleUpdateProfileSubmit} className="w-50">
          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-50">
              <label htmlFor="fname">First Name</label> <br />
              <input type="text" className="w-100" name="fname" id="fname" value={personalInfo.first_name} onChange={(e) => setPersonalInfo({ ...personalInfo, first_name: e.target.value })} />
            </div>
            <div className="form-group w-50">
              <label htmlFor="lname">Last Name</label> <br />
              <input type="text" className="w-100" name="lname" id="lname" value={personalInfo.last_name} onChange={(e) => setPersonalInfo({ ...personalInfo, last_name: e.target.value })} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <label htmlFor="email">Email</label> <br />
              <input type="email" className="w-100" name="email" id="email" value={personalInfo.email} onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <label htmlFor="phone">Phone Number</label> <br />
              <input type="number" className="w-100" name="phone" id="phone" value={personalInfo.phone_no} onChange={(e) => setPersonalInfo({ ...personalInfo, phone_no: e.target.value })} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <label htmlFor="street-address">Street Address</label> <br />
              <input type="text" className="w-100" name="street-address" id="street-address" value={personalInfo.street_address} onChange={(e) => setPersonalInfo({ ...personalInfo, street_address: e.target.value })} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-50">
              <label htmlFor="zip-code">Zip Code</label> <br />
              <input type="number" className="w-100" name="zip-code" id="zip-code" value={personalInfo.zip_code} onChange={(e) => setPersonalInfo({ ...personalInfo, zip_code: e.target.value })} />
            </div>
            <div className="form-group w-50">
              <label htmlFor="city">City</label> <br />
              <input type="text" className="w-100" name="city" id="city" value={personalInfo.city} onChange={(e) => setPersonalInfo({ ...personalInfo, city: e.target.value })} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-50">
              <label htmlFor="state">State</label> <br />
              <input type="text" className="w-100" name="state" id="state" value={personalInfo.state} onChange={(e) => setPersonalInfo({ ...personalInfo, state: e.target.value })} />
            </div>
            <div className="form-group w-50">
              <label htmlFor="country">Country</label> <br />
              <input type="text" className="w-100" name="country" id="country" value={personalInfo.country} onChange={(e) => setPersonalInfo({ ...personalInfo, country: e.target.value })} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-50">
              <label htmlFor="birth_year">Birth Year</label> <br />
              <input type="text" className="w-100" name="birth_year" id="birth_year" value={personalInfo.birth_year} onChange={(e) => setPersonalInfo({ ...personalInfo, birth_year: e.target.value })} />
            </div>
            <div className="form-group w-50">
              <label htmlFor="birth_month">Birth Month</label> <br />
              <input type="text" className="w-100" name="birth_month" id="birth_month" value={personalInfo.birth_month} onChange={(e) => setPersonalInfo({ ...personalInfo, birth_month: e.target.value })} />
            </div>
            <div className="form-group w-50">
              <label htmlFor="birth_date">Birth Date</label> <br />
              <input type="text" className="w-100" name="birth_date" id="birth_date" value={personalInfo.birth_date} onChange={(e) => setPersonalInfo({ ...personalInfo, birth_date: e.target.value })} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <label htmlFor="gender">Gender</label> <br />
              <select name="gender" id="gender" value={personalInfo.gender} className="w-100" onChange={(e) => setPersonalInfo({ ...personalInfo, gender: e.target.value })}>
                <option>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="w-100">
              {
                message && message == 'success' ? (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-square-fill"></i> Updated Successfully!
                  </div>
                ) : message == 'error' && (
                  <div className="alert alert-danger" role="alert">
                    <i className="bi bi-bag-x-fill"></i> Update Failed.Something Went Wrong
                  </div>
                )
              }
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <input type="submit" className="w-100 btn btn-dark" value="Save changes" />
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;