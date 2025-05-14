import React, { useEffect } from 'react';
import './Datenschutz.css';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <main className='main-content'>
        <div className='privacy-policy'>
          <h2>Privacy Policy</h2>
          <h3>1. General Information</h3>
          <p>
            The protection of your personal data is important to me. This
            privacy policy explains what data is collected when you visit this
            website and how it is used, in accordance with the General Data
            Protection Regulation (GDPR).
          </p>

          <h3>2. Data Collection</h3>
          <p>
            This website is for informational purposes only and does not
            actively collect personal data. However, when accessing this
            website, certain data (such as IP address, browser type, access
            time) may be automatically collected and stored in server log files
            by the hosting provider. This is necessary to ensure the website's
            functionality and security. These log files are automatically
            deleted after a certain period.
          </p>

          <h3>3. External Links</h3>
          <p>
            This website contains links to external websites of companies I have
            worked with. Please note that I have no control over their content
            or privacy policies. Once you leave my site, their privacy policies
            apply.
          </p>

          <h3>4. Cookies and Tracking</h3>
          <p>
            This website does not use cookies, analytics tools, or tracking
            mechanisms.
          </p>

          <h3>5. Contact</h3>
          <p>
            If you have any questions regarding data protection, you can contact
            me at:
            <br />
            Email: <a href='mailto:kontakt@kaddah.de'>kontakt@kaddah.de</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Datenschutz;
