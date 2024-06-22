import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    location: '',
    aadharNumber: '',
    pregnantStatus: false,
    pregnantDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  ///////////////////////////

  

    return (
      
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-input"
            min="18"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select location</option>
            <option value="alappuzha">Alappuzha</option>
            <option value="ernakulam">Ernakulam</option>
            <option value="idukki">Idukki</option>
            <option value="kannur">Kannur</option>
            <option value="kasaragod">Kasaragod</option>
            <option value="kollam">Kollam</option>
            <option value="kottayam">Kottayam</option>
            <option value="kozhikode">Kozhikode</option>
            <option value="malappuram">Malappuram</option>
            <option value="palakkad">Palakkad</option>
            <option value="pathanamthitta">Pathanamthitta</option>
            <option value="thiruvananthapuram">Thiruvananthapuram</option>
            <option value="thrissur">Thrissur</option>
            <option value="wayanad">Wayanad</option>

          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Aadhar Number</label>
          <input
            type="number"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pregnant</label>
          <input
            type="checkbox"
            name="pregnantStatus"
            checked={formData.pregnantStatus}
            onChange={handleChange}
            className="form-checkbox"
          />
        </div>
        {formData.pregnantStatus && (
          <div className="mb-4">
            <label className="block text-gray-700">Pregnant Date</label>
            <input
              type="date"
              name="pregnantDate"
              value={formData.pregnantDate}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  };

  export default UserForm;