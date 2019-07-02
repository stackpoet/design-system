import React from 'react';
import HHSLogo from './images/HHSlogo';
import MedicaregovLogo from './images/MedicaregovLogo';

const SimpleFooter = () => {
  return (
    <footer className="m-c-footer">
      <div className="m-c-footer__linkRow">
        <div className="ds-u-margin-bottom--3 ds-u-xl-margin-bottom--0">
          <a href="">About Medicare</a>
          <a href="">Medicare Glossary</a>
        </div>
        <div>
          <a href="">Nondiscrimination/Accessibility</a>
          <a href="">Privacy Policy</a>
          <a href="">Privacy Setting</a>
          <a href="">Linking Policy</a>
          <a href="">Using this site</a>
          <a href="">Plain Writing</a>
        </div>
      </div>
      <div className="m-c-footer__identityRow">
        <MedicaregovLogo />
        <div className="m-c-footer__identityContent">
          <HHSLogo />
          <span className="m-c-footer__contactAddress">
            A federal government website managed and paid for by the U.S.
            Centers for Medicare and Medicaid Services.
            <br />
            7500 Security Boulevard, Baltimore, MD 21244
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
