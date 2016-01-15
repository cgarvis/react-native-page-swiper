# react-native-page-swiper

Page Swiper component for React Native.

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
- [Examples](#examples)
- [Development](#development)

### Installation

```bash
$ npm i react-native-page-swiper --save
```

### Basic Usage

- Install `react-native` first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit `myproject/index.ios.js`, like this:

```jsx
var Swiper = require('react-native-page-swiper')
// es6
// import Swiper from 'react-native-page-swiper'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var swiper = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
})

AppRegistry.registerComponent('swiper', () => swiper)
```

### Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| index | | `number` | Show slide in this index. |
| initialIndex | `0` | `number` | Index number of initial slide. Not applicable with `index`.|
| pager | `true` | `boolean` | Show pager. |
| onPageChange |  | `function` | Callback when page changes or change is requested if `index` is set. |
| activeDotColor | `blue` | `string` | CSS color of the dot for the current page. |


### Examples

See code in [examples](https://github.com/fixt/react-native-page-swiper/tree/master/examples/swiper).

## Questions

Feel free to [contact us](mailto:code@fixt.co) or [create an issue](https://github.com/fixt/react-native-page-swiper/issues/new)

> Inspired by [leecade/react-native-swiper](https://github.com/leecade/react-native-swiper/) & [brentvatne/react-native-scrollable-tab-view](https://github.com/brentvatne/react-native-scrollable-tab-view).
