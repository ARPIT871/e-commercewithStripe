import React from 'react';
import { Link } from 'react-router-dom';

const CancelPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Canceled</h2>
      <p style={styles.message}>Your payment has been canceled. Please return to the home page to continue shopping.</p>
      <Link to="/" style={styles.link}>Go to Home Page</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  link: {
    fontSize: '16px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default CancelPage;
