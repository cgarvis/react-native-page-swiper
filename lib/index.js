'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _dots = require('./dots');

var _dots2 = _interopRequireDefault(_dots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_Component) {
  _inherits(Swiper, _Component);

  function Swiper(props) {
    _classCallCheck(this, Swiper);

    var _this = _possibleConstructorReturn(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call(this, props));

    _this.state = {
      index: props.index,
      scrollValue: new _reactNative.Animated.Value(props.index),
      viewWidth: _reactNative.Dimensions.get('window').width
    };
    return _this;
  }

  _createClass(Swiper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if ((props.setIndex == 0 || props.setIndex) && props.setIndex != this.state.index) {
        this.goToPage(props.setIndex);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var release = function release(e, gestureState) {
        var relativeGestureDistance = gestureState.dx / _this2.state.viewWidth;
        var vx = gestureState.vx;


        var newIndex = _this2.state.index;

        if (relativeGestureDistance < -0.5 || relativeGestureDistance < 0 && vx <= -0.5) {
          newIndex = newIndex + 1;
        } else if (relativeGestureDistance > 0.5 || relativeGestureDistance > 0 && vx >= 0.5) {
          newIndex = newIndex - 1;
        }

        _this2.goToPage(newIndex);
      };

      this._panResponder = _reactNative.PanResponder.create({
        onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(e, gestureState) {
          var threshold = _this2.props.threshold;

          // Claim responder if it's a horizontal pan

          if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
            return true;
          }

          // and only if it exceeds the threshold
          if (threshold - Math.abs(gestureState.dx) > 0) {
            return false;
          }
        },

        // Touch is released, scroll to the one that you're closest to
        onPanResponderRelease: release,
        onPanResponderTerminate: release,

        // Dragging, move the view with the touch
        onPanResponderMove: function onPanResponderMove(e, gestureState) {
          var dx = gestureState.dx;
          var offsetX = -dx / _this2.state.viewWidth + _this2.state.index;

          _this2.state.scrollValue.setValue(offsetX);
        }
      });
    }
  }, {
    key: 'goToPage',
    value: function goToPage(pageNumber) {
      // Don't scroll outside the bounds of the screens
      pageNumber = Math.max(0, Math.min(pageNumber, this.props.children.length - 1));
      this.setState({
        index: pageNumber
      });

      _reactNative.Animated.spring(this.state.scrollValue, { toValue: pageNumber, friction: this.props.springFriction, tension: this.props.springTension }).start();

      this.props.onPageChange(pageNumber);
    }
  }, {
    key: 'handleLayout',
    value: function handleLayout(event) {
      var width = event.nativeEvent.layout.width;


      if (width) {
        this.setState({ viewWidth: width });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var scenes = _react2.default.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, { style: [child.props.style, { flex: 1 }] });
      });

      var translateX = this.state.scrollValue.interpolate({
        inputRange: [0, 1], outputRange: [0, -this.state.viewWidth]
      });

      var sceneContainerStyle = {
        width: this.state.viewWidth * this.props.children.length,
        flex: 1,
        flexDirection: 'row'
      };

      return _react2.default.createElement(
        _reactNative.View,
        { onLayout: this.handleLayout.bind(this), style: { flex: 1, overflow: 'hidden' } },
        _react2.default.createElement(
          _reactNative.Animated.View,
          _extends({}, this._panResponder.panHandlers, {
            style: [sceneContainerStyle, { transform: [{ translateX: translateX }] }]
          }),
          scenes
        ),
        this.props.pager && _react2.default.createElement(_dots2.default, {
          active: this.state.index,
          activeColor: this.props.activeDotColor,
          style: { position: 'absolute', bottom: 50, width: this.state.viewWidth },
          total: this.props.children.length
        })
      );
    }
  }]);

  return Swiper;
}(_react.Component);

Swiper.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  index: _react2.default.PropTypes.number,
  threshold: _react2.default.PropTypes.number,
  pager: _react2.default.PropTypes.bool,
  onPageChange: _react2.default.PropTypes.func,
  activeDotColor: _react2.default.PropTypes.string
};
Swiper.defaultProps = {
  index: 0,
  pager: true,
  threshold: 25,
  onPageChange: function onPageChange() {},
  activeDotColor: 'blue'
};
exports.default = Swiper;