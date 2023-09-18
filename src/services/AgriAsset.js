/**
 * Copyright IT People Corporation. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Contributors: Mohan Venkataraman, Dilip Manjunatha, Aashish Shrestha, Sahinul Haque
 */

import {
  API_ENDPOINT_GETUSER_ITEMS, API_ENDPOINT_GETACCOUNTCOMMODITIES, API_ENDPOINT_GETITEM_HISTORY_BYID,
  API_ENDPOINT_ADDITEM, API_ENDPOINT_ITEM_TRANSFER,API_ENDPOINT_GETOWNER_PRIVATELIVESTOCK,
  HEADERS, API_ENDPOINT_GETLIVESTOCK_BYID, API_ENDPOINT_CREATECOMMODITY
} from './Constants.js';
import { toast } from 'react-toastify';

export var AgriAssetCancelPromise = {
  getAgriAssetWithId: false,
  getHistoryForAgriAssetWithId: false
};

export default class AgriAsset {

  getAccountCommodities(data) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETACCOUNTCOMMODITIES, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),
      }).then(response => {
        console.log('API_ENDPOINT_GETACCOUNTCOMMODITIES response')
        console.log(response)
        if (response.status === 201) {
          return response.json();
        }
        response.json().then(err=>{
          reject(err.message);
        }).catch(e=>{
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }


  getAgriAssetForCurrentUser(data) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETOWNER_PRIVATELIVESTOCK, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),
      }).then(response => {
        console.log('API_ENDPOINT_GETOWNER_PRIVATELIVESTOCK response')
        console.log(response)
        if (response.status === 201) {
          return response.json();
        }
        response.json().then(err=>{
          reject(err.message);
        }).catch(e=>{
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  getAgriAssetWithId(data) {
    AgriAssetCancelPromise.getAgriAssetWithId = false;

    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETLIVESTOCK_BYID(), {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),

      }).then(response => {
        if (response.status === 200) {
          return response.json();
        }
        //Error handler
        response.json().then(err=>{
          reject(err.message);
        }).catch(e=>{
          reject(response.statusText);
        });
        throw new Error(response.statusText);

      })
        .then(data => {
          if (!AgriAssetCancelPromise.getAgriAssetWithId) {
            resolve(data);
          } else {
            reject({ message: "Canceled promise." })
          }
        })
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  getHistoryForAgriAssetWithId(nftID) {
    AgriAssetCancelPromise.getHistoryForAgriAssetWithId = false;

    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETITEM_HISTORY_BYID(nftID), {
        headers: HEADERS(),
        method: 'GET',
      }).then(response => {
        if (response.status === 200) {
          return response.json();
        }
        //Error handler
        response.json().then(err=>{
          reject(err.message);
        }).catch(e=>{
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => {
          if (!AgriAssetCancelPromise.getHistoryForAgriAssetWithId) {
            resolve(data);
          } else {
            reject({ message: "Canceled promise." })
          }
        })
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  createAgriAsset(newAgriAsset) {
    return new Promise(function (resolve, reject) {
      console.log('API_ENDPOINT_CREATECOMMODITY')
      console.log(API_ENDPOINT_CREATECOMMODITY)
      fetch(API_ENDPOINT_CREATECOMMODITY, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(newAgriAsset),
      }).then(response => {
        console.log('CREATECOMMODITY response')
        console.log(response)
        if (response.status === 201) {
          return response.json();
        }
        //Error handler
        response.json().then(err=>{
          reject(err.message);
        }).catch(e=>{
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  transferAgriAssetToUser(artwork) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_ITEM_TRANSFER, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(artwork),
      }).then(response => {
        if (response.status === 200) {
          return response.json();
        }
        //Error handler
        response.json().then(err=>{
          reject(err.message);
        }).catch(e=>{
          reject(response.statusText);
        });
        throw new Error(response.statusText);
      })
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

}
