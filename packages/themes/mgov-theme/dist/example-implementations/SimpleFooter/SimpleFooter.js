"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleFooter = function SimpleFooter() {
  return _react2.default.createElement(
    "footer",
    { className: "m-c-footer" },
    _react2.default.createElement(
      "div",
      { className: "m-c-footer__linkRow" },
      _react2.default.createElement(
        "div",
        { className: "ds-u-margin-bottom--3 ds-u-xl-margin-bottom--0" },
        _react2.default.createElement(
          "a",
          { href: "https://www.medicare.gov/about-us" },
          "About Medicare"
        ),
        _react2.default.createElement(
          "a",
          { href: "https://www.medicare.gov/glossary/a" },
          "Medicare Glossary"
        )
      ),
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "a",
          { href: "https://www.medicare.gov/about-us/accessibility-nondiscrimination-notice" },
          "Nondiscrimination/Accessibility"
        ),
        _react2.default.createElement(
          "a",
          { href: "https://www.medicare.gov/privacy-policy" },
          "Privacy Policy"
        ),
        _react2.default.createElement(
          "a",
          { href: "https://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/Privacy/index.html" },
          "Privacy Setting"
        ),
        _react2.default.createElement(
          "a",
          { href: "https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/index.html" },
          "Linking Policy"
        ),
        _react2.default.createElement(
          "a",
          { href: "https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Help.html" },
          "Using this site"
        ),
        _react2.default.createElement(
          "a",
          { href: "https://www.medicare.gov/about-us/plain-writing" },
          "Plain Writing"
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "m-c-footer__identityRow" },
      _react2.default.createElement(_components.MedicaregovLogo, null),
      _react2.default.createElement(
        "div",
        { className: "m-c-footer__identityContent" },
        _react2.default.createElement(_components.HHSLogo, null),
        _react2.default.createElement(
          "span",
          { className: "m-c-footer__contactAddress" },
          "A federal government website managed and paid for by the U.S. Centers for Medicare and Medicaid Services.",
          _react2.default.createElement("br", null),
          "7500 Security Boulevard, Baltimore, MD 21244"
        )
      )
    )
  );
};

exports.default = SimpleFooter;