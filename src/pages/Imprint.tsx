import React, { useEffect } from 'react';
import './Imprint.css';

const Imprint: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <main className='main-content'>
        <div className='impressum'>
          <h2>Impressum</h2>
          <h3>Information According to § 5 TMG</h3>
          <p>
            <strong>Name:</strong> Kareem Kaddah
          </p>
          <p>
            <strong>Address:</strong> Westerholtstr 26, 44579 Castrop-Rauxel,
            Germany
          </p>
          <h3>Contact</h3>
          <p>
            <strong>Email:</strong> karim.kaddah13@gmail.com
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Disclaimer: This website is a personal portfolio for professional
            presentation purposes only. All information is provided without
            guarantee of accuracy or completeness. For inquiries, please use the
            contact email above.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Imprint;
