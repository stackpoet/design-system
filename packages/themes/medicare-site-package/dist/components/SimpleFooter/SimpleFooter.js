'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HHSlogo = require('../HHSlogo/HHSlogo');

var _HHSlogo2 = _interopRequireDefault(_HHSlogo);

var _MedicaregovLogo = require('../MedicaregovLogo/MedicaregovLogo');

var _MedicaregovLogo2 = _interopRequireDefault(_MedicaregovLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleFooter = function SimpleFooter(_ref) {
  var aboutMedicareLabel = _ref.aboutMedicareLabel,
      medicareGlossaryLabel = _ref.medicareGlossaryLabel,
      nondiscriminationLabel = _ref.nondiscriminationLabel,
      privacyPolicyLabel = _ref.privacyPolicyLabel,
      privacySettingLabel = _ref.privacySettingLabel,
      linkingPolicyLabel = _ref.linkingPolicyLabel,
      usingThisSiteLabel = _ref.usingThisSiteLabel,
      plainWritingLabel = _ref.plainWritingLabel,
      websiteInfo = _ref.websiteInfo;

  return _react2.default.createElement(
    'footer',
    { className: 'm-c-footer' },
    _react2.default.createElement(
      'div',
      { className: 'm-c-footer__linkRow' },
      _react2.default.createElement(
        'div',
        { className: 'ds-u-margin-bottom--3 ds-u-xl-margin-bottom--0' },
        _react2.default.createElement(
          'a',
          { href: 'https://www.medicare.gov/about-us' },
          aboutMedicareLabel || 'About Medicare'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://www.medicare.gov/glossary/a' },
          medicareGlossaryLabel || 'Medicare Glossary'
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://www.medicare.gov/about-us/accessibility-nondiscrimination-notice' },
          nondiscriminationLabel || 'Nondiscrimination/Accessibility'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://www.medicare.gov/privacy-policy' },
          privacyPolicyLabel || 'Privacy Policy'
        ),
        _react2.default.createElement(
          'a',
          {
            href: '#',
            onClick: function onClick() {
              if (utag && utag.gdpr && utag.gdpr.showConsentPreferences && typeof utag.gdpr.showConsentPreferences === 'function') {
                utag.gdpr.showConsentPreferences();
              }
            }
          },
          privacySettingLabel || 'Privacy Setting'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/index.html' },
          linkingPolicyLabel || 'Linking Policy'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Help.html' },
          usingThisSiteLabel || 'Using this site'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://www.medicare.gov/about-us/plain-writing' },
          plainWritingLabel || 'Plain Writing'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'm-c-footer__identityRow' },
      _react2.default.createElement(_MedicaregovLogo2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'm-c-footer__identityContent' },
        _react2.default.createElement(_HHSlogo2.default, null),
        _react2.default.createElement(
          'span',
          { className: 'm-c-footer__contactAddress' },
          websiteInfo || 'A federal government website managed and paid for by the U.S. Centers for Medicare and Medicaid Services.',
          _react2.default.createElement('br', null),
          '7500 Security Boulevard, Baltimore, MD 21244'
        )
      )
    )
  );
};

exports.default = SimpleFooter;