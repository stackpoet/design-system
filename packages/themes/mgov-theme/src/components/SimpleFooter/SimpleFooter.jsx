import React from 'react';
import HHSLogo from '../HHSLogo/HHSLogo';
import MedicaregovLogo from '../MedicaregovLogo/MedicaregovLogo';

const SimpleFooter = () => {
  return (
    <footer className="m-c-footer">
      <div className="m-c-footer__linkRow">
        <div className="ds-u-margin-bottom--3 ds-u-xl-margin-bottom--0">
          <a href="https://www.medicare.gov/about-us">About Medicare</a>
          <a href="https://www.medicare.gov/glossary/a">Medicare Glossary</a>
        </div>
        <div>
          <a href="https://www.medicare.gov/about-us/accessibility-nondiscrimination-notice">
            Nondiscrimination/Accessibility
          </a>
          <a href="https://www.medicare.gov/privacy-policy">Privacy Policy</a>
          <a href="https://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/Privacy/index.html">
            Privacy Setting
          </a>
          <a href="https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/index.html">
            Linking Policy
          </a>
          <a href="https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Help.html">
            Using this site
          </a>
          <a href="https://www.medicare.gov/about-us/plain-writing">
            Plain Writing
          </a>
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
