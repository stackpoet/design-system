'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navbar = require('../Navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _NavigationMenu = require('../NavigationMenu/NavigationMenu');

var _NavigationMenu2 = _interopRequireDefault(_NavigationMenu);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleHeader = function SimpleHeader(_ref) {
  var logo = _ref.logo,
      menuItems = _ref.menuItems;

  return (
    // Start by bringing in the Navbar component, this acts as the header's container
    // Navbar has one prop - "inverse" - which determines the 'theme':
    //   - When inverse == false, the Navbar has a green background and white text
    //   - When inverse == true, the Navbar has a white background with green text
    _react2.default.createElement(
      _Navbar2.default,
      { inverse: false, className: 'm-c-navbar' },
      _react2.default.createElement(
        'a',
        { href: '/somewhere' },
        _react2.default.createElement('img', logo)
      ),
      _react2.default.createElement(
        'div',
        { className: 'm-c-navbar__productName' },
        'Medicare Coverage Tools'
      ),
      _react2.default.createElement(
        _NavigationMenu2.default,
        null,
        menuItems.map(function (item, i) {
          return _react2.default.createElement(
            'li',
            { key: i, className: 'm-c-navigationMenu__item' },
            _react2.default.createElement(
              'a',
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