'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * The Navbar component serves as a container element for the navbar's content
 */

var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$inverse = _ref.inverse,
      inverse = _ref$inverse === undefined ? false : _ref$inverse;

  var cN = (0, _classnames2.default)('m-c-navbar', inverse && 'm-c-navbar--inverse', className);
  return _react2.default.createElement(
    'div',
    { className: cN },
    children
  );
};

exports.default = Navbar;