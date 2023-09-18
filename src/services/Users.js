/**
 * Copyright IT People Corporation. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Contributors: Mohan Venkataraman, Dilip Manjunatha, Aashish Shrestha, Sahinul Haque
 */

import {
  API_ENDPOINT_GETUSERSLISTOFTRADINGUSERS, 
  API_ENDPOINT_USERLOGIN,
  API_ENDPOINT_USERREGISTER,
  API_ENDPOINT_USERREGISTERACCOUNT, 
  HEADERS,
  API_ENDPOINT_GETACCOUNT,
  API_ENDPOINT_GET_USERWALLET_BALANCE
 } from './Constants.js';
import { toast } from 'react-toastify';


export default class Users {
  userType = "TRD"; //AH-auction house, TRD- trader

  constructor() {
    this.currentUser();
  }
  getUsersWalletStateAndBalance(payload)  {
    let selfUser = this; 
    console.log('Service: getUsersWalletStateAndBalance payload')
    console.log(payload)
     return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GET_USERWALLET_BALANCE, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(response => {
        if (response.status === 201) {
          console.log('response')
          console.log(response)
          return response.json();
        }
        //Error handler
        response.json().then(err => {
          console.log('err.message')
          console.log(err.message)
          reject(err.message);
        }).catch(e => {
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => {
          console.log('data')
          console.log(data)
          return resolve(data);
        }).catch(err => {
            console.log('err')
            console.log(err)
        });
    });
    
};
  getRecieverAccount(payload)  {
    let selfUser = this; 
    console.log('Service: getRecieverAccount payload')
    console.log(payload)
     return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETACCOUNT, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(response => {
        if (response.status === 201) {
          console.log('response')
          console.log(response)
          return response.json();
        }
        //Error handler
        response.json().then(err => {
          console.log('err.message')
          console.log(err.message)
          reject(err.message);
        }).catch(e => {
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => {
          console.log('data')
          console.log(data)
          return resolve(data);
        }).catch(err => {
            console.log('err')
            console.log(err)
        });
    });
    
};
  getListOfTradingUsers(payload)  {
    let selfUser = this; 
    console.log('Service: getListOfTradingUsers payload')
    console.log(payload)
     return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETUSERSLISTOFTRADINGUSERS, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(response => {
        if (response.status === 200) {
          console.log('response')
          console.log(response)
          return response.json();
        }
        //Error handler
        response.json().then(err => {
          console.log('err.message')
          console.log(err.message)
          reject(err.message);
        }).catch(e => {
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => {
          console.log('data')
          console.log(data)
          return resolve(data);
        }).catch(err => {
            console.log('err')
            console.log(err)
        });
    });
    
};

  login(user) {
    let selfUser = this; 
    console.log('user')
    console.log(user)
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_USERLOGIN, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(user),
      }).then(response => {
        console.log('response')
        console.log(response)
        if (response.status === 200) {
          console.log('response---')
          console.log(response)
          return response.json();
        }
        //Error handler
        response.json().then(err => {
          console.log('err.message')
          console.log(err.message)
          reject(err.message);
        }).catch(e => {
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => {
          console.log('data')
          console.log(data)
          localStorage.setItem('user', JSON.stringify(data));
          selfUser.setUserType(data);
          return resolve(data);
        }).catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }


  createNewUser(user) {
    console.log('createNewUser data ')
    console.log('API_ENDPOINT_USERREGISTER')
    console.log(API_ENDPOINT_USERREGISTER)
    console.log(user)
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_USERREGISTER, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(user),
      }).then(response => {
        console.log('createNewUser response')
        console.log(response)
        if (response.status === 201) {
          return response.json();
        }
        //Error handler
        response.json().then(err => {
          reject(err);
        }).catch(e => {
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => {
          console.log(data)
          localStorage.setItem('user', JSON.stringify(data));

          resolve(data);
        },
          (reason) => {
            toast.dismiss();
            toast.error(reason);
          }
        ).catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  createNewAccount(account) {
    console.log('createNewAccount data ')
    console.log(account)
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_USERREGISTERACCOUNT, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(account),
      }).then(response => {
        console.log('createNewAccount response')
        console.log(response)
        if (response.status === 201) {
          return response.json();
        }
        //Error handler
        response.json().then(err => {
          reject(err.message);
        }).catch(e => {
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => {
          console.log('createNewAccount data')
          console.log(data)
          localStorage.setItem('account', JSON.stringify(data));
          resolve(data);
        },
          (reason) => {
            toast.dismiss();
            toast.error(reason);
          }
        ).catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  //AH-auction house, TRD- trader
  setUserType(data) {
    this.userType = data['userType'] || "TRD";
    return this.userType;
  }

  currentUser() {
    let currentUser = JSON.parse(localStorage.getItem('user')) || {};
    this.setUserType(currentUser);
    return currentUser;
  }

  isUserLogin() {
    let currentUser = JSON.parse(localStorage.getItem('user')) || {};
    return currentUser['username'] ? true : false;
  }

}
