import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';
import {Fonts} from '../../utils/Fonts.js';

function Loader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={'white'} />
        <Text style={styles.loaderText}>{props.text}</Text>
      </View>
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    backgroundColor:'rgba(0,0,0,0)'
  },
  loaderContainer: {
    height: 110,
    width: 110,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3
  },
  loaderText: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.ArimoBold,
  },
});
