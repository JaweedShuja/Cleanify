import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import {Fonts} from '../../utils/Fonts.js';

export default class CountryCodeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      countryData: [],
    };
  }
  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({isLoading: false, countryData: responseJSON});
      });
  }
  render() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerView}>
          {this.state.isLoading ? (
            <View styel={{alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={'small'} color="#F90505" />
            </View>
          ) : null}
          <Text style={styles.modalHeading}>Select Country Code</Text>

          <FlatList
            keyExtractor={item => item.name}
            data={this.state.countryData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.onSelect(item.callingCodes[0]);
                    this.props.setModalVisible(false);
                  }}
                  style={styles.listItem}>
                  <View style={{width: 150}}>
                    <Text style={styles.countryName}>{item.name}</Text>
                  </View>
                  <Text>{'(+' + item.callingCodes[0] + ')'}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInnerView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeading: {
    fontSize: 16,
    fontFamily: Fonts.Arimo,
    color: '#F90505',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: 'lightgray',
    margin: 5,
    padding: 5,
  },
  flag: {
    height: 15,
    width: 15,
  },
  countryName: {
    fontFamily: Fonts.Arimo,
  },
});
