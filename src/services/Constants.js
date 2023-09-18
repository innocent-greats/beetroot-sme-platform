console.log('process.env.REACT_APP_ENV')
console.log(process.env.REACT_APP_ENV)
let localhostAPI = 'http://localhost:4000'
let serverhostAPI = 'https://api.exchange.umoja.greats.systems'
export const API_SOCKET_ENDPOINT = 'ws://api.exchange.umoja.greats.systems';
export const API_ENDPOINT = process.env.REACT_APP_ENV  && process.env.REACT_APP_ENV === 'localhost' ? localhostAPI : serverhostAPI;
export const API_ENDPOINT_IMAGES = process.env.REACT_APP_API_ENDPOINT + '/images/';
export const API_ENDPOINT_USERLOGIN = API_ENDPOINT + '/auth/login';
export const API_ENDPOINT_USERREGISTER = API_ENDPOINT + '/auth/enroll-user';
export const API_ENDPOINT_USERREGISTERACCOUNT = API_ENDPOINT + '/auth/register-account';
// ACCOUNT APIs
export const API_ENDPOINT_GETACCOUNT = API_ENDPOINT + '/user-wallet/get-account';


// ------------

export const API_ENDPOINT_GETUSERSLISTOFTRADINGUSERS = API_ENDPOINT + '/users/getListOfTradingUsers';
export const API_ENDPOINT_GETUSER_ITEMS = API_ENDPOINT + '/user-wallet/get-all-livestocks-private-list';
export const API_ENDPOINT_GETOWNER_PRIVATELIVESTOCK = API_ENDPOINT + '/user-wallet/get-owner-private-list';
export const API_ENDPOINT_GETLIVESTOCK_BYID = API_ENDPOINT + '/user-wallet/read-private-livestock';
export const API_ENDPOINT_GETITEM_BYID = (nftID) => API_ENDPOINT + `/livestock-trading/${nftID}`; 
export const API_ENDPOINT_GETITEM_HISTORY_BYID = (nftID) => API_ENDPOINT + `/livestock-trading/${nftID}/history`; 
export const API_ENDPOINT_ADDITEM = API_ENDPOINT + '/user-wallet/create-asset';
// COMMODITIES APIS 

export const API_ENDPOINT_CREATECOMMODITY = API_ENDPOINT + '/commodity/create-commodity';
export const API_ENDPOINT_GETACCOUNTCOMMODITIES = API_ENDPOINT + '/commodity/get-account-commodities';
export const API_ENDPOINT_GETCOMMODITYWITHID = API_ENDPOINT + '/commodity/read-commodity';
export const API_ENDPOINT_REQUEST_TO_TRADE_COMMODITY_WITH_ID = API_ENDPOINT + '/commodity/request-to-trade';
export const API_ENDPOINT_GET_AUCTION_FLOORS = API_ENDPOINT + '/commodity/get-auction-floors';
export const API_ENDPOINT_GET_WAREHOUSES = API_ENDPOINT + '/commodity/get-warehouses';
export const API_ENDPOINT_DIRECT_TRANSFER = API_ENDPOINT + '/commodity/direct-transfer';
export const API_ENDPOINT_REQUEST_WAREHOUSE_SERVICE = API_ENDPOINT + '/commodity/request-warehouse-services';
export const API_ENDPOINT_DIRECT_TRANSFER_REQUEST = API_ENDPOINT + '/commodity/get-all-account-transfer-request';
export const API_ENDPOINT_BUYING_REQUEST = API_ENDPOINT + '/commodity/get-all-account-buying-request';
export const API_ENDPOINT_GET_ALL_ACCOUNT_REQUEST_TO_TRADE = API_ENDPOINT + '/commodity/get-all-request-trade-by-account-and-status';
export const API_ENDPOINT_GET_COMMODITY_TRANSFER_REQUEST = API_ENDPOINT + '/commodity/get-commodity-transfer-request';
// WAREHOUSE API accept-warehouse-order
export const API_ENDPOINT_REQUEST_TO_TRADE_RESPONSE = API_ENDPOINT + '/commodity/request-to-trade-response';


// NEAR WALLET APIS
export const API_ENDPOINT_GET_USERWALLET_BALANCE = API_ENDPOINT + '/user-wallet/get-wallet-account-state';

// ORDERS API_ENDPOINT_RESPOND_TO_ORDER_REQUEST
export const API_ENDPOINT_SET_ORDER_STATUS = API_ENDPOINT + '/order/set-order-status';
export const API_ENDPOINT_RESPOND_TO_ORDER_REQUEST = API_ENDPOINT +  '/order/set-order-status';
export const API_ENDPOINT_GRADE_AND_RECEIPT = API_ENDPOINT +  '/order/grade-and-receipt';
export const API_ENDPOINT_SET_ORDER_SERVING_ACCOUNT = API_ENDPOINT + '/order/set-order-serving-account';
export const API_ENDPOINT_GET_COMMODITY_ORDER = API_ENDPOINT + '/order/get-commodity-order';
export const API_ENDPOINT_GET_ALL_ACCOUNT_ORDERS = API_ENDPOINT + '/order/get-all-account-orders';

// PARTIES
export const API_ENDPOINT_GET_SERVICE_PROVIDERS  = API_ENDPOINT + '/partner/get-requested-service-providers';


// TRADING APIS 
export const API_ENDPOINT_ITEM_TRANSFER = API_ENDPOINT + '/livestock-trading/transfer';
export const API_ENDPOINT_ADDAUCTION_ITEM = API_ENDPOINT + '/auction/init';
export const API_ENDPOINT_GETAUCTION_ITEMS = API_ENDPOINT + '/auction/init';
export const API_ENDPOINT_ADDAUCTION_OPEN_ITEM = API_ENDPOINT + '/auction/open'; 
export const API_ENDPOINT_GETAUCTION_OPEN_ITEMS = API_ENDPOINT + '/auction/open';
export const API_ENDPOINT_GET_TRADING_FLOORS = API_ENDPOINT + '/auction/getTradingFloors';
export const API_ENDPOINT_GETAUCTION_OPEN_ITEMS_BY_AH = API_ENDPOINT + '/auction/open/auctionHouse';
export const API_ENDPOINT_ADDBID = API_ENDPOINT + '/trading/make-bid';
export const API_ENDPOINT_GETHIGHBID_BYID = (auctionId) => API_ENDPOINT + `/trading/high/${auctionId}`; 
export const API_ENDPOINT_BID_BUYNOW = API_ENDPOINT + '/trading/buyNow';
export const API_ENDPOINT_AUCTION_CLOSE = API_ENDPOINT + '/auction/close';
export const user = () => JSON.parse(localStorage.getItem('user')) || {};
console.log("window.localStorage.getItem('serviceToken')")
console.log(window.localStorage.getItem('serviceToken'))
export const HEADERS = () => new Headers({ 'Access-Control-Allow-Credentials':'true', 'content-type': 'application/json', 'cache-control': 'no-cache', 'x-access-token': window.localStorage.getItem('serviceToken') });;
export const AJAXHEADERS = { 'content-type': 'application/json', 'cache-control': 'no-cache', 'x-access-token': window.localStorage.getItem('serviceToken')};
// client-side
export const SITE_NAME = "Umoja NFT Marketplace";
export const REQUESTDATE_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const MAX_FILEUPLOAD_SIZE = "2";//in mb