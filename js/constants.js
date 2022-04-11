const HOTEL_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const PHOTOS_LENGTH = PHOTOS.length;

const MIN_PRICE = 1000;
const MAX_PRICE = 5000;

const MIN_ROOMS_COUNT = 1;
const MAX_ROOMS_COUNT = 6;

const MIN_GUESTS_COUNT = 1;
const MAX_GUESTS_COUNT = 6;

const TOKYO_COORDINATES = {
  lat: 35.652832,
  lng: 139.839478,
};
const DEFAULT_COORDINATES = TOKYO_COORDINATES;

const APARTMENT_TYPES = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const HOTELS_DATA_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const DATA_URL = 'https://25.javascript.pages.academy/keksobooking/';

const ALERT_SHOW_TIME = 3000;

export {
  HOTEL_TYPES,
  CHECKIN_TIMES,
  CHECKOUT_TIMES,
  FEATURES,
  PHOTOS,
  PHOTOS_LENGTH,
  MIN_PRICE,
  MAX_PRICE,
  MIN_ROOMS_COUNT,
  MAX_ROOMS_COUNT,
  MIN_GUESTS_COUNT,
  MAX_GUESTS_COUNT,
  DEFAULT_COORDINATES,
  APARTMENT_TYPES,
  HOTELS_DATA_URL,
  DATA_URL,
  ALERT_SHOW_TIME,
};
