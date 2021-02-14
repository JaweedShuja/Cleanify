import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    display: "flex",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width
  },
  map: {
    flex: 1
  },
  mapMarkerContainer: {
    left: '47%',
    position: 'absolute',
    top: '42%'
  },
  mapMarker: {
    fontSize: 40,
    color: "red"
  },
  deatilSection: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    display: "flex",
    justifyContent: "flex-start"
  },
  spinnerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    width: Dimensions.get("window").width - 20,
    position: "absolute",
    bottom: 100,
    left: 10
  },

  
addressBarView:{
    height:130,
    backgroundColor:'white'
},
textInput:{
    height:33,
    width:237,
    marginLeft:80,
    marginTop:25,
    backgroundColor:'#ECEFF0',
    position:'absolute',
    padding:5,
},
cover: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height-70,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
});