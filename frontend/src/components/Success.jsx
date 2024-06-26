import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Success = () => {
  const navigate=useNavigate()


  return (
    <div style={styles.successContainer}>
      <h2 style={styles.successHeading}>Order Successful!</h2>
      <p style={styles.successMessage}>Thank you for your order.</p>

      
      <Link to="/" style={styles.link}>Go to Home Page click here</Link>

    </div>
  );
};

const styles = {
  successContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  successHeading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  successMessage: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  productList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productItem: {
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  productDetails: {
    flexGrow: '1',
  },
  productName: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  productDescription: {
    marginBottom: '5px',
  },
  productPrice: {
    marginBottom: '5px',
  },
  productQuantity: {
    marginBottom: '0',
  },
};

export default Success;
