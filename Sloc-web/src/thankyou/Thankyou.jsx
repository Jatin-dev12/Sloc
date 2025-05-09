import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThankYouPage = () => {
  const location = useLocation();
  const projectSlug = location.state?.projectSlug || 'default-project'; // Fallback slug
  const fromContactUs = location.state?.fromContactUs || false; // Check if from Contact Us

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1 className="thank-you-title">Thank You!</h1>
        <div className="thank-you-body">
          <p>Your submission has been received.</p>
          <p>One of our representatives will contact you shortly.</p>
        </div>
        <div className="thank-you-footer">
          <Link
            to={fromContactUs ? '/contact-us' : `/project/${projectSlug}`}
            className="btn btn-primary mx-2"
          >
            {fromContactUs ? 'Back to Contact Us' : 'Back to Project'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;