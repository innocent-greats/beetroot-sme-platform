import {
  API_ENDPOINT_GET_TRADING_FLOORS,
  API_ENDPOINT_ADDAUCTION_ITEM, API_ENDPOINT_GETAUCTION_ITEMS,
  API_ENDPOINT_ADDAUCTION_OPEN_ITEM, API_ENDPOINT_GETAUCTION_OPEN_ITEMS, API_ENDPOINT_GETAUCTION_OPEN_ITEMS_BY_AH, API_ENDPOINT_ADDBID,
  API_ENDPOINT_GETHIGHBID_BYID, API_ENDPOINT_BID_BUYNOW, API_ENDPOINT_AUCTION_CLOSE
  , HEADERS
} from './Constants.js';
import { toast } from 'react-toastify';

export var MarketplaceCancelPromise = {
  getHighestBidForAuctionWithId: false,
};

export default class Marketplace {

  createAuctionRequest(auctionRequest) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_ADDAUCTION_ITEM, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(auctionRequest),
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

  getAuctionRequestsForCurrentAuctionHouse() {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETAUCTION_ITEMS, {
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
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  openAuctionForBids(auction) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_ADDAUCTION_OPEN_ITEM, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(auction),
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

  getOpenMarketplace() {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETAUCTION_OPEN_ITEMS, {
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
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  getMarketplaces() {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GET_TRADING_FLOORS, {
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
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  getOpenMarketplaceForCurrentAuctionHouse() {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETAUCTION_OPEN_ITEMS_BY_AH, {
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
        .then(data => resolve(data))
        .catch(err => {
          toast.dismiss();
          toast.error(err);
        });
    });
  }

  makeBid(bid) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_ADDBID, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(bid),
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

  getHighestBidForAuctionWithId(auctionId) {
    MarketplaceCancelPromise.getHighestBidForAuctionWithId = false;
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_GETHIGHBID_BYID(auctionId), {
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
        .then(data => (!MarketplaceCancelPromise.getHighestBidForAuctionWithId ? resolve(data) : reject({ message: "Canceled promise." })))
        .catch(err => (!MarketplaceCancelPromise.getHighestBidForAuctionWithId ? reject(err) : reject({ message: "Canceled promise." })))
        ;
    });
  }

  buyNow(bid) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_BID_BUYNOW, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(bid),
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

  closeAuction(auction) {
    return new Promise(function (resolve, reject) {
      fetch(API_ENDPOINT_AUCTION_CLOSE, {
        headers: HEADERS(),
        method: 'POST',
        body: JSON.stringify(auction),
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
