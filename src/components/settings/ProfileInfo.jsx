import Image from "next/image";
import default_profile from "@/images/default_profile.png";

const ProfileInfo = () => {
  return (
    <div>
      <div className="profile">
        <Image src={default_profile} alt="profile"/>
        <div className="profile-image-edit">
          <i className="bi bi-pencil"></i>
        </div>
      </div>
      <div className="profile-update">
        <form action="" className="w-50">
          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-50">
              <label htmlFor="fname">First Name</label> <br/>
              <input type="text" className="w-100" name="fname" id="fname" placeholder="Enter your first name"/>
            </div>
            <div className="form-group w-50">
              <label htmlFor="lname">Last Name</label> <br/>
              <input type="text" className="w-100" name="lname" id="lname" placeholder="Enter your last name"/>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <label htmlFor="email">Email</label> <br/>
              <input type="email" className="w-100" name="email" id="email" placeholder="Enter your email"/>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <label htmlFor="phone">Phone Number</label> <br/>
              <input type="number" className="w-100" name="phone" id="phone" placeholder="Enter your phone number"/>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <label htmlFor="street-address">Street Address</label> <br/>
              <input type="text" className="w-100" name="street-address" id="street-address" placeholder="Street Address"/>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-50">
              <label htmlFor="zip-code">Zip Code</label> <br/>
              <input type="number" className="w-100" name="zip-code" id="zip-code" placeholder="zip code"/>
            </div>
            <div className="form-group w-50">
              <label htmlFor="city">City</label> <br/>
              <input type="text" className="w-100" name="city" id="city" placeholder="city"/>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-50">
              <label htmlFor="state">State</label> <br/>
              <input type="text" className="w-100" name="state" id="state" placeholder="State"/>
            </div>
            <div className="form-group w-50">
              <label htmlFor="country">Country</label> <br/>
              <input type="text" className="w-100" name="country" id="country" placeholder="Country"/>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="form-group w-100">
              <input type="submit" className="w-100 btn btn-dark" value="Save changes"/>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;