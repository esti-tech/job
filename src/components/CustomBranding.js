import React, { useState } from 'react';
import Header from '../Header';
const CustomBranding = () => {
  const [logo, setLogo] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      <h1>Custom Branding</h1>
      <div>
        <label>Upload Logo:</label>
        <input type="file" accept="image/*" onChange={handleLogoChange} />
      </div>
      {logo && <img src={logo} alt="Logo Preview" style={{ width: '150px', height: '150px' }} />}
    </div>
  );
};
export default CustomBranding;