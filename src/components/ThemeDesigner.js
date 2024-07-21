import React, { useState } from 'react';
import Header from '../Header';
const ThemeDesigner = () => {
  const [theme, setTheme] = useState({
    primaryColor: '#006400',
    secondaryColor: '#0000ff',
    accentColor: '#ffd700'
  });

  const handleChange = (e) => {
    setTheme({
      ...theme,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Header/>
      <h1>Theme Designer</h1>
      <div>
        <label>Primary Color:</label>
        <input
          type="color"
          name="primaryColor"
          value={theme.primaryColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Secondary Color:</label>
        <input
          type="color"
          name="secondaryColor"
          value={theme.secondaryColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Accent Color:</label>
        <input
          type="color"
          name="accentColor"
          value={theme.accentColor}
          onChange={handleChange}
        />
      </div>
      <div style={{ backgroundColor: theme.primaryColor, padding: '10px' }}>
        <p style={{ color: theme.secondaryColor }}>Primary Color Preview</p>
      </div>
      <div style={{ backgroundColor: theme.accentColor, padding: '10px' }}>
        <p>Accent Color Preview</p>
      </div>
    </div>
  );
};
export default ThemeDesigner;