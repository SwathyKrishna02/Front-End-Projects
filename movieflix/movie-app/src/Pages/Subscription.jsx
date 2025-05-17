import React from 'react';
import { useNavigate } from 'react-router-dom';

function Subscription() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: '$8.99/month',
      features: ['480p Quality', '1 Screen at a time'],
    },
    {
      name: 'Standard',
      price: '$13.99/month',
      features: ['1080p HD Quality', '2 Screens at a time'],
    },
    {
      name: 'Premium',
      price: '$17.99/month',
      features: ['4K Ultra HD', '4 Screens at a time'],
    },
  ];

  const handleSubscribe = (planName) => {
    navigate(`/payment/${planName}`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Choose Your Plan</h2>
      <div className="row justify-content-center">
        {plans.map((plan, idx) => (
          <div key={idx} className="col-12 col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className="card-title">{plan.name}</h4>
                <h5 className="text-primary">{plan.price}</h5>
                <ul className="list-unstyled my-3">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => handleSubscribe(plan.name)}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscription;
