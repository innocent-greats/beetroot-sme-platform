/**
 * Copyright IT People Corporation. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Contributors: Mohan Venkataraman, Dilip Manjunatha, Aashish Shrestha, Sahinul Haque
 */

import {
    API_ENDPOINT_GETACCOUNTCOMMODITIES, 
    API_ENDPOINT_GETITEM_HISTORY_BYID,
    API_ENDPOINT_ITEM_TRANSFER,
    API_ENDPOINT_GETOWNER_PRIVATELIVESTOCK,
    HEADERS, API_ENDPOINT_CREATECOMMODITY, 
    API_ENDPOINT_GETCOMMODITYWITHID,
    API_ENDPOINT_REQUEST_TO_TRADE_COMMODITY_WITH_ID, 
    API_ENDPOINT_GET_AUCTION_FLOORS,
    API_ENDPOINT_DIRECT_TRANSFER, 
    API_ENDPOINT_DIRECT_TRANSFER_REQUEST,
    API_ENDPOINT_GET_WAREHOUSES,
    API_ENDPOINT_REQUEST_WAREHOUSE_SERVICE,
    API_ENDPOINT_GET_ALL_ACCOUNT_REQUEST_TO_TRADE,
    API_ENDPOINT_BUYING_REQUEST,
     API_ENDPOINT_GET_COMMODITY_TRANSFER_REQUEST,
     API_ENDPOINT_REQUEST_TO_TRADE_RESPONSE,
     API_ENDPOINT_SET_ORDER_SERVING_ACCOUNT,
     API_ENDPOINT_SET_ORDER_STATUS,
     API_ENDPOINT_GRADE_AND_RECEIPT,
     API_ENDPOINT_GET_SERVICE_PROVIDERS,
     API_ENDPOINT_GET_COMMODITY_ORDER,
    API_ENDPOINT_GET_ALL_ACCOUNT_ORDERS,

     API_ENDPOINT_RESPOND_TO_ORDER_REQUEST,
     API_ENDPOINT
} from './Constants.js';
import { toast } from 'react-toastify';

export var CommodityCancelPromise = {
  getCommodityWithId: false,
  getHistoryForCommodityWithId: false
};

export default class CommodityService {

  respondToOrder(data) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_RESPOND_TO_ORDER_REQUEST, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),
      }).then(response => {
        console.log('API_ENDPOINT_RESPOND_TO_ORDER_REQUEST response')
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

  // getAllAccountOrders
  getAllAccountOrders(data) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GET_ALL_ACCOUNT_ORDERS, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),
      }).then(response => {
        console.log('API_ENDPOINT_GET_ALL_ACCOUNT_ORDERS response')
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



  getCommodityCurrentOrder(data) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GET_COMMODITY_ORDER, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),
      }).then(response => {
        console.log('API_ENDPOINT_RESPOND_TO_ORDER_REQUEST response')
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
  setOrderServingAccount(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_SET_ORDER_SERVING_ACCOUNT, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_SET_ORDER_SERVING_ACCOUNT response')
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

// gradeAndReceipt
gradeAndReceipt(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_GRADE_AND_RECEIPT, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_GRADE_AND_RECEIPT response')
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

// --------------------------


setOrderStatus(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_RESPOND_TO_ORDER_REQUEST, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_RESPOND_TO_ORDER_REQUEST response')
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

// getAllAccountTradeRequest
getAllAccountTradeRequest(data) {
  console.log('getAllAccountTradeRequest data')
  console.log(data)
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_GET_ALL_ACCOUNT_REQUEST_TO_TRADE, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_GET_ALL_ACCOUNT_REQUEST_TO_TRADE response')
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



requestToTradeResponse(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_REQUEST_TO_TRADE_RESPONSE, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_REQUEST_TO_TRADE_RESPONSE response')
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


// directTransfer
getAllAccountBuyingRequest(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_BUYING_REQUEST, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_BUYING_REQUEST response')
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




getAllAccountTransferRequest(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_DIRECT_TRANSFER_REQUEST, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_DIRECT_TRANSFER_REQUEST response')
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

// getCommodityTransferRequest
getCommodityTransferRequest(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_GET_COMMODITY_TRANSFER_REQUEST, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_DIRECT_TRANSFER_REQUEST response')
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


// directTransfer
requestWarehouseServices(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_REQUEST_WAREHOUSE_SERVICE, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_REQUEST_WAREHOUSE_SERVICE response')
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

// directTransfer
directTransfer(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_DIRECT_TRANSFER, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_DIRECT_TRANSFER response')
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
// getAuctionFloors
getAuctionFloors(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_GET_AUCTION_FLOORS, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_GET_AUCTION_FLOORS response')
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

// getCommodityCerticates
postResolver(apiUrl,data){
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT + apiUrl, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_GET_WAREHOUSES response')
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

getResolver(api){
  return new Promise(function (resolve, reject) {
    fetch(api, {
      headers: HEADERS(),
      method: 'GET'
    }).then(response => {
      console.log('API_ENDPOINT_GET_WAREHOUSES response')
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

getServiceProviders(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_GET_SERVICE_PROVIDERS, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_GET_WAREHOUSES response')
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
// getWarehouses



getWarehouses(data) {
  return new Promise(function (resolve, reject) {
    fetch(API_ENDPOINT_GET_WAREHOUSES, {
      headers: HEADERS(),
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      console.log('API_ENDPOINT_GET_WAREHOUSES response')
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


  getCommodityForCurrentUser(data) {
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

  requestToTradeWithId(data) {
    CommodityCancelPromise.requestToTradeWithId = false;
    console.log('requestToTradeWithId data')
    console.log(API_ENDPOINT_REQUEST_TO_TRADE_COMMODITY_WITH_ID)
    console.log(data)
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_REQUEST_TO_TRADE_COMMODITY_WITH_ID, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),

      }).then(response => {
        console.log('requestToTradeWithId response')
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
        .then(data => {
          if (!CommodityCancelPromise.getCommodityWithId) {
            console.log('CommodityCancelPromise response')
            console.log(data)
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

  getCommodityWithId(data) {
    CommodityCancelPromise.getCommodityWithId = false;
    console.log('getCommodityWithId data')
    console.log(API_ENDPOINT_GETCOMMODITYWITHID)
    console.log(data)
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETCOMMODITYWITHID, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(data),

      }).then(response => {
        console.log('getCommodityWithId response')
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
        .then(data => {
          if (!CommodityCancelPromise.getCommodityWithId) {
            console.log('CommodityCancelPromise response')
            console.log(data)
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

  getHistoryForCommodityWithId(nftID) {
    CommodityCancelPromise.getHistoryForCommodityWithId = false;

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
          if (!CommodityCancelPromise.getHistoryForCommodityWithId) {
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

  createCommodity(newCommodity) {
    return new Promise(function (resolve, reject) {
      console.log('API_ENDPOINT_CREATECOMMODITY')
      console.log(API_ENDPOINT_CREATECOMMODITY)
      fetch(API_ENDPOINT_CREATECOMMODITY, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(newCommodity),
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

  transferCommodityToUser(artwork) {
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
