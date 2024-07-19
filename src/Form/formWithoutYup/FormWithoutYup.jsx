import { useState } from "react";

const FormWithoutYup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthData: "",
  });
  const [error, setError] = useState();

  const handleSubmit = () => {
    // console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let newError = {};
    if (formData.firstName.length < 3) {
      newError.firstName = "First name should be at least 3 characters";
    }
    if (formData.lastName.length < 3) {
      newError.lastName = "Last name should be at least 3 characters";
    }
    if (formData.email.length < 5) {
      newError.email = "Email should be at least 5 characters";
    }
    if (formData.phoneNumber.length < 10) {
      newError.phoneNumber = "Phone number should be at least 10 characters";
    }
    if (formData.password.length < 8) {
      newError.password = "Password should be at least 8 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      newError.confirmPassword = "Password and confirm password should match";
    }
    if (formData.age < 18) {
      newError.age = "Age should be at least 18";
    }
  };

  const isValid = validateForm();
  if (isValid) {
    console.log("Form Submitted", formData);
  } else {
    console.log("Failed to submit");
  }
  const handleCheckboxChange = (e) => {
    const { name, checked }  = e.target;
    let updatedInterest = [...formData.interests];
    if (checked) {
      updatedInterest.push(name);
    } else {
      updatedInterest = updatedInterest.filter((interest) => interest !== name);
    }
    setFormData({
      ...formData,
      interests: updatedInterest,
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={formData.firstName}
            name="firstName"
            placeholder="Enter your firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={formData.lastName}
            name="lastName"
            placeholder="Enter your lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={formData.phoneNumber}
            name="phoneNumber"
            placeholder="Enter your phoneNumber"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={formData.confirmPassword}
            name="confirmPassword"
            placeholder="Enter your confirmPassword"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <select
            name="gender"
            id=""
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Interests:</label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="coding"
              checked={formData.interests.includes("coding")}
              id=""
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="reading"
              checked={formData.interests.includes("reading")}
              id=""
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.includes("sports")}
              id=""
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
        </div>
        {/* <div >
            <label htmlFor="">Date of Birth:</label>
            <input 
            type="date" 
            name="birthDate"
            value={formData.birthData} 
            placeholder="Enter your date of birth"
            onChange={handleChange}
            />
         </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithoutYup;
