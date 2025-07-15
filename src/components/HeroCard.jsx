import React from 'react';

function HeroCard() {
  return (
    <>
       
    <div className="col-12 col-md-6 col-lg-5 order-md-first d-flex flex-column g-4">
      {/* Hero Card */}
      <div className="hero-container position-relative mb-4" style={{ minHeight: '350px' }}>
        <div className="card bg-gradient-light border-0 shadow-lg position-absolute w-100 rounded-4 overflow-hidden">
          <div className="card-body p-4 d-flex flex-column justify-content-between position-relative z-1">
            {/* Header Text */}
            <div className="header-text text-end position-absolute top-0 end-0 p-3 pt-4 pe-4 text-secondary">
              We are here<br />to help!
            </div>

            {/* Logo Circle */}
            <div
              className="logo-background position-absolute top-50 start-50 translate-middle rounded-circle shadow-lg"
              style={{
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, #4c63d2 0%, #5a67d8 25%, #667eea 50%, #764ba2 100%)',
                zIndex: 1
              }}
            >
              <div
                className="logo-text text-white fw-bold text-center position-absolute top-50 start-50 translate-middle"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.2,
                  transform: 'rotate(-20deg)'
                }}
              >
                ONLY 6<br />SLOTS<br />LEFT
              </div>
            </div>

            {/* Card Content */}
            <div
              className="card-content mt-auto p-3 rounded-3"
              style={{
                backgroundColor: 'rgba(244, 230, 218, 0.4)',
                position: 'relative',
                zIndex: 2
              }}
            >
              <h1 className="display-5 fw-bold text-dark mb-1 lh-1">Free</h1>
              <h2 className="h2 fw-normal text-secondary mb-1 lh-1">Case</h2>
              <h3 className="h3 fw-normal text-secondary lh-1">Review</h3>

              {/* Features */}
              <div className="features mt-3">
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="feature-icon rounded-circle me-2 d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: '24px',
                      height: '24px',
                      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                    }}
                  ></div>
                  <span className="text-dark fw-medium">100% Confidential</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="feature-icon rounded-circle me-2 d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: '24px',
                      height: '24px',
                      background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
                    }}
                  ></div>
                  <span className="text-dark fw-medium">No Win, No Fee</span>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="feature-icon rounded-circle me-2 d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: '24px',
                      height: '24px',
                      background: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)'
                    }}
                  ></div>
                  <span className="text-dark fw-medium">Free Case Evaluation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <button
            className="contact-button btn btn-lg rounded-pill shadow position-absolute bottom-0 end-0 m-4"
            style={{
              background: 'linear-gradient(135deg, #d4a574 0%, #b8956a 100%)',
              color: 'white',
              zIndex: 2
            }}
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div
        className="info-section p-4 rounded-4 shadow"
        style={{
          backgroundColor: '#f4e6da',
          maxHeight: '270px',
          overflow: 'hidden',
          marginBottom: '10px'
        }}
      >
        <h3 className="info-title text-purple mb-3">
          Have you or a loved one been affected by Mesothelioma?
        </h3>
        <p className="info-text small mb-2">
          As a woman, you've carried the weight of care, love, and resilience. Now it's time someone stands with you.
        </p>
        <ul className="info-list ps-3 small">
          <li>Secondary Asbestos exposure is common</li>
          <li>Misdiagnosis delays are more frequent in women</li>
          <li>Women have won significant legal settlements</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default HeroCard;