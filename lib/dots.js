'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _dot = require('./dot');

var _dot2 = _interopRequireDefault(_dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dots = function (_Component) {
  _inherits(Dots, _Component);

  function Dots() {
    _classCallCheck(this, Dots);

    return _possibleConstructorReturn(this, (Dots.__proto__ || Object.getPrototypeOf(Dots)).apply(this, arguments));
  }

  _createClass(Dots, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var total = _props.total;
      var active = _props.active;


      var range = Array.from(new Array(total), function (x, i) {
        return i;
      });

      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.dots, this.props.style] },
        range.map(function (i) {
          return _react2.default.createElement(_dot2.default, {
            color: i === active ? _this2.props.activeColor : _this2.props.color,
            key: i
          });
        })
      );
    }
  }]);

  return Dots;
}(_react.Component);

Dots.propTypes = {
  total: _react2.default.PropTypes.number,
  active: _react2.default.PropTypes.number,
  style: _reactNative.View.propTypes.style
};
Dots.defaultProps = {
  total: 0,
  active: -1
};
exports.default = Dots;


var styles = _reactNative.StyleSheet.create({
  dots: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});