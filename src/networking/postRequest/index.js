import Toast from 'react-native-simple-toast';
const hostName = 'https://cleanify.technottix.com/api/v1/';
import Helper from '../../utils/Helper';
const debug = true;

export function PostRequest(payloads, api, showToast) {
  if (debug) {
    console.log('API => ' + api);
    console.log('Payloads => ' + payloads);
  }
  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: payloads,
  })
    .then(response => response.json())
    .then(responseJson => {
      if (debug) {
        console.log('Response => ' + JSON.stringify(responseJson));
      }
      return responseJson;
    })
    .catch(error => {
      return error;
    });
}

export async function PostRequestWithAuthentication(payloads, api, showToast) {
  if (debug) {
    console.log('API => ' + api);
    console.log('Payloads => ' + payloads);
  }
  var token = await Helper.getToken();
  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: payloads,
  })
    .then(response => response.json())
    .then(responseJson => {
      if (debug) {
        console.log('Response => ' + JSON.stringify(responseJson));
      }
      return responseJson;
    })
    .catch(error => {
      return error;
    });
}

export async function GetRequestWithAuthentication(api, showToast) {
  if (debug) {
    console.log('API => ' + api);
  }
  var token = await Helper.getToken();
  return fetch(api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      if (debug) {
        console.log('Response => ' + JSON.stringify(responseJson));
      }
      return responseJson;
    })
    .catch(error => {
      return error;
    });
}
