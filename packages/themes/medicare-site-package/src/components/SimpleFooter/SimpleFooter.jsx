import React from 'react';
import HHSLogo from '../HHSlogo/HHSlogo';
import MedicaregovLogo from '../MedicaregovLogo/MedicaregovLogo';

const SimpleFooter = ({
  aboutMedicareLabel,
  medicareGlossaryLabel,
  nondiscriminationLabel,
  privacyPolicyLabel,
  privacySettingLabel,
  linkingPolicyLabel,
  usingThisSiteLabel,
  plainWritingLabel,
  websiteInfo
}) => {
  return (
    <footer className="m-c-footer">
      <div className="m-c-footer__linkRow">
        <div className="ds-u-margin-bottom--3 ds-u-xl-margin-bottom--0">
          <a href="https://www.medicare.gov/about-us">{aboutMedicareLabel || 'About Medicare'}</a>
          <a href="https://www.medicare.gov/glossary/a">
            {medicareGlossaryLabel || 'Medicare Glossary'}
          </a>
        </div>
        <div>
          <a href="https://www.medicare.gov/about-us/accessibility-nondiscrimination-notice">
            {nondiscriminationLabel || 'Nondiscrimination/Accessibility'}
          </a>
          <a href="https://www.medicare.gov/privacy-policy">
            {privacyPolicyLabel || 'Privacy Policy'}
          </a>

          <a
            href="#"
            onClick={() => {
              if (
                utag &&
                utag.gdpr &&
                utag.gdpr.showConsentPreferences &&
                typeof utag.gdpr.showConsentPreferences === 'function'
              ) {
                utag.gdpr.showConsentPreferences();
              }
            }}
          >
            {privacySettingLabel || 'Privacy Setting'}
          </a>

          <a href="https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/index.html">
            {linkingPolicyLabel || 'Linking Policy'}
          </a>
          <a href="https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Help.html">
            {usingThisSiteLabel || 'Using this site'}
          </a>
          <a href="https://www.medicare.gov/about-us/plain-writing">
            {plainWritingLabel || 'Plain Writing'}
          </a>
        </div>
      </div>
      <div className="m-c-footer__identityRow">
        <MedicaregovLogo />
        <div className="m-c-footer__identityContent">
          <HHSLogo />
          <span className="m-c-footer__contactAddress">
            {websiteInfo ||
              'A federal government website managed and paid for by the U.S. Centers for Medicare and Medicaid Services.'}
            <br />
            7500 Security Boulevard, Baltimore, MD 21244
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
