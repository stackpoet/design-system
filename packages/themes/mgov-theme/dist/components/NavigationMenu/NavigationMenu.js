'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('@cmsgov/design-system-core/src/components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _HamburgerSymbol = require('../HamburgerSymbol');

var _HamburgerSymbol2 = _interopRequireDefault(_HamburgerSymbol);

var _CloseSymbol = require('../CloseSymbol');

var _CloseSymbol2 = _interopRequireDefault(_CloseSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationMenu = function (_React$PureComponent) {
  _inherits(NavigationMenu, _React$PureComponent);

  function NavigationMenu(props) {
    _classCallCheck(this, NavigationMenu);

    var _this = _possibleConstructorReturn(this, (NavigationMenu.__proto__ || Object.getPrototypeOf(NavigationMenu)).call(this, props));

    _this.state = { menuOpen: false };
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    return _this;
  }

  _createClass(NavigationMenu, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({ menuOpen: !this.state.menuOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var containerClasses = (0, _classnames2.default)('m-c-navigationMenu__container', this.props.alwaysShowMenuButton && 'm-c-navigationMenu__container--alwaysShowMenuButton');

      var navClasses = (0, _classnames2.default)('m-c-navigationMenu', this.state.menuOpen && 'm-c-navigationMenu--open');

      return _react2.default.createElement(
        'div',
        { className: containerClasses },
        _react2.default.createElement(
          'div',
          { className: 'm-c-navigationMenu__toggleContainer' },
          _react2.default.createElement(
            _components.Button,
            {
              className: 'm-c-navigationMenu__mobileToggle',
              onClick: this.toggleMenu,
              variation: 'transparent'
            },
            this.state.menuOpen ? _react2.default.createElement(_CloseSymbol2.default, null) : _react2.default.createElement(_HamburgerSymbol2.default, null)
          )
        ),
        _react2.default.createElement(
          'nav',
          { role: 'navigation', className: navClasses },
          _react2.default.createElement(
            'ul',
            { className: 'm-c-navigationMenu__list' },
            this.props.children
          )
        )
      );
    }
  }]);

  return NavigationMenu;
}(_react2.default.PureComponent);

exports.default = NavigationMenu;