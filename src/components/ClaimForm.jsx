import React from 'react';

const ClaimForm = () => {
  return (
    <div className="col-12 col-md-6 col-lg-5 order-md-last">
      <div className="form-section rounded-4 shadow-lg p-4">
        <h2 className="form-title text-left">Claim Form</h2>

        <form>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <label htmlFor="firstName" className="form-label">First Name *</label>
              <input type="text" className="form-control" id="firstName" required />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="lastName" className="form-label">Last Name *</label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="email" className="form-label">Email ID *</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="dob" className="form-label">Date of Birth *</label>
              <input type="date" className="form-control" id="dob" required />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="jobTitle" className="form-label">Job Title *</label>
              <input type="text" className="form-control" id="jobTitle" required />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="diagnosisDate" className="form-label">Date of Diagnosis *</label>
              <input type="date" className="form-control" id="diagnosisDate" required />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="diagnosisType" className="form-label">Type of Diagnosis *</label>
              <select className="form-select" id="diagnosisType" required>
                <option value="" disabled selected>Select diagnosis type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="yourStory" className="form-label">Tell us your story (optional)</label>
              <textarea
                className="form-control"
                id="yourStory"
                rows="2"
                placeholder="Please describe your situation..."
              ></textarea>
            </div>
          </div>

          <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="privacyConsent" required />
            <label className="form-check-label text-white" htmlFor="privacyConsent">
              I agree to the
              <a href="#" className="text-warning text-decoration-underline">
                privacy policy
              </a>
              and disclaimer and give my express written consent to be contacted regarding my case options.
            </label>
          </div>

          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="humanVerify" required />
            <label className="form-check-label text-white" htmlFor="humanVerify">
              Please check this box to verify you're a person.
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-light btn-lg rounded-pill shadow">
              Start your claim now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimForm;
