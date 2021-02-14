import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/Fonts.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loaderText: {
    color: '#F90505',
    fontFamily: Fonts.Arimo,
  },
  logo: {
    tintColor: '#F90505',
    height: 60,
    width: 250,
    alignSelf: 'center',
    marginTop:80
  },
  inputConainer: {
    height: 45,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F90505',
    marginBottom:10
  },
  inputForm: {
    // backgroundColor:'red'
    marginTop:60,
  },
  signInButtonContainer: {
    height: 45,
    marginTop:5,
    marginHorizontal: 20,
    backgroundColor: '#F90505',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:10
  },
  signInText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Arimo,
  },
  input: {
    height:45,
    marginHorizontal: 20,
    marginVertical:5,
    fontFamily: Fonts.Arimo,
    borderWidth:1,
    borderColor:'#F90505',
    borderRadius:30,
    paddingVertical:5,
    paddingHorizontal:15

  },
  loaderContainer: {
    height: 100,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
  },
  signUpTextContainer: {
    alignSelf: 'center',
    marginTop:50
  },
  signUpText: {
    fontFamily: Fonts.Arimo,
    color: '#F90505',
    fontSize: 16,
  },
});
