import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetExtraDataAPI} from '../networking/api';
import {Keys} from './Keys';
import Toast from 'react-native-simple-toast';
import BookingData from '../utils/BookingData'

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

export default class Helper {
  static saveUser(user) {
    storeData(Keys.USER_DATA, user);
  }
  static async getUser() {
    let user = await getData(Keys.USER_DATA);
    return user;
  }
  static saveToken(token) {
    storeData(Keys.ACCESS_TOKEN, token);
  }
  static async getToken() {
    let token = await getData(Keys.ACCESS_TOKEN);
    return token;
  }
  static async setIsLogined(bool) {
    storeData(Keys.IS_LOGINED, bool);
  }
  static async isLogined() {
    let isLogined = await getData(Keys.IS_LOGINED);
    return isLogined;
  }
  static async saveExtraData() {
    var token = await this.getToken();
    return fetch(GetExtraDataAPI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        storeData(Keys.EXTRA_DATA, responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }
  static async getExtraData() {
    let data = await getData(Keys.EXTRA_DATA);
    return data;
  }
  static async showToast(msg) {
    Toast.show(msg);
  }
  static async clearBookingData(){
    BookingData.bookingDraftId = ''
    BookingData.total_rooms = ''
    BookingData.total_bathrooms = ''
    BookingData.services = [] 
    BookingData.address = ''
    BookingData.lat = ''
    BookingData.lng = ''
    BookingData.actual_address = ''
    BookingData.start_date = ''
    BookingData.time = ''
    BookingData.time_am_pm = ''
    BookingData.is_pet = '' 
    BookingData.pet_count = '' 
    BookingData.pet_id = ''
  }
}
