"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Here is an example way to pass in the settings for a logo, or you can hard-code them into the header below
var logo = {
  src: "https://via.placeholder.com/300x50?text=Placeholder+Logo",
  alt: "This is a logo"
};

var SimpleHeader = function SimpleHeader(_ref) {
  var logo = _ref.logo,
      menuItems = _ref.menuItems;

  return (
    // Start by bringing in the Navbar component, this acts as the header's container
    // Navbar has one prop - "inverse" - which determines the 'theme':
    //   - When inverse == false, the Navbar has a green background and white text
    //   - When inverse == true, the Navbar has a white background with green text
    _react2.default.createElement(
      _components.Navbar,
      { inverse: false, className: "m-c-navbar" },
      _react2.default.createElement(
        "a",
        { href: "/somewhere" },
        _react2.default.createElement("img", logo)
      ),
      _react2.default.createElement(
        "div",
        { className: "m-c-navbar__productName" },
        "Medicare Coverage Tools"
      ),
      _react2.default.createElement(
        _components.NavigationMenu,
        null,
        menuItems.map(function (item, i) {
          return _react2.default.createElement(
            "li",
            { key: i, className: "m-c-navigationMenu__item" },
            _react2.default.createElement(
              "a",
              { href: item.url },
              item.title
            )
          );
        })
      )
    )
  );
};

exports.default = SimpleHeader;