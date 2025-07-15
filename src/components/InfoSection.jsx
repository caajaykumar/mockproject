import React from 'react';

function InfoSection() {
  return (
    <div
      className="info-section p-4 rounded-4 shadow"
      style={{ backgroundColor: '#f4e6da', maxHeight: '270px', overflow: 'hidden', marginBottom: '10px' }}
    >
      <h3 className="info-title text-purple mb-3">Have you or a loved one been affected by Mesothelioma?</h3>
      <p className="info-text small mb-2">
        As a woman, you've carried the weight of care, love, and resilience. Now it's time someone stands with you.
      </p>
      <ul className="info-list ps-3 small">
        <li>Secondary Asbestos exposure is common</li>
        <li>Misdiagnosis delays are more frequent in women</li>
        <li>Women have won significant legal settlements</li>
      </ul>
    </div>
  );
}

export default InfoSection;