import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';

export default class Splash extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.checkIsLogined();
  }
  async checkIsLogined() {
    var isLogined = await Helper.isLogined();
    if (isLogined == 'true') {
      this.props.navigation.navigate('EstimateScreen');
    } else {
      this.props.navigation.navigate('SignIn');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.themeRed}
          barStyle={'light-content'}
        />
        <Image
          style={{height: 62, width: 270}}
          source={require('../../images/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.themeRed,
  },
  TextStyle: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
});


// import React, { Component } from "react";
// import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// class App extends Component {
//   pan = new Animated.ValueXY();
//   panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderGrant: () => {
//       this.pan.setOffset({
//         x: this.pan.x._value,
//         //y: this.pan.y._value
//       });
//       console.log(this.pan.x)
//     },
//     onPanResponderMove: Animated.event([
//       null,
//       {
//         dx: this.pan.x,
//         //dy: this.pan.y 
//       }
//     ]),
//     onPanResponderRelease: () => {
//       this.pan.flattenOffset();

//       console.log(this.pan.x)
//     }
//   });

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.titleText}>Drag this box!</Text>
//         <Animated.View
//           style={{
//             transform: [
//               { translateX: this.pan.x },
//               //{ translateY: this.pan.y }
//             ]
//           }}
//           {...this.panResponder.panHandlers}
//         >
//           <View style={styles.box} >
//             <Text>{'0'}</Text>
//           </View>
//         </Animated.View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: "bold"
//   },
//   box: {
//     height: 50,
//     width: 50,
//     backgroundColor: "blue",
//     borderRadius: 5
//   }
// });

// export default App;