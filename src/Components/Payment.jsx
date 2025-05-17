import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Payment() {
  const { plan } = useParams();
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment for ${plan} plan successful! 🎉`);
    navigate('/'); 
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2>
          Payment for <span className="text-danger">{plan}</span> Plan
        </h2>
        <p>Please enter your payment details below to complete your subscription.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handlePayment} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label">Cardholder Name</label>
              <input type="text" className="form-control" placeholder="John Doe" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Expiry Date</label>
                <input type="text" className="form-control" placeholder="MM/YY" required />
              </div>
              <div className="col">
                <label className="form-label">CVV</label>
                <input type="password" className="form-control" placeholder="123" required />
              </div>
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Pay & Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
