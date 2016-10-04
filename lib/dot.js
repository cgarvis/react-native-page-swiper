'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dot = function (_Component) {
  _inherits(Dot, _Component);

  function Dot() {
    _classCallCheck(this, Dot);

    return _possibleConstructorReturn(this, (Dot.__proto__ || Object.getPrototypeOf(Dot)).apply(this, arguments));
  }

  _createClass(Dot, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var color = _props.color;
      var diameter = _props.diameter;


      return _react2.default.createElement(_reactNative.View, {
        style: [{
          backgroundColor: color,
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3
        }, this.props.style]
      });
    }
  }]);

  return Dot;
}(_react.Component);

Dot.propTypes = {
  color: _react2.default.PropTypes.string,
  diameter: _react2.default.PropTypes.number,
  style: _reactNative.View.propTypes.style
};
Dot.defaultProps = {
  color: 'rgba(192, 192, 192, 1)',
  diameter: 10
};
exports.default = Dot;