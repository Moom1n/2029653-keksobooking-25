import {HOTELS_DATA_URL, DATA_URL} from './constants.js';

const submitButton = document.querySelector('.ad-form__submit');

let hotelsData = [];

const getData = (onSuccess, onFail) => {
  if (hotelsData.length !== 0) {
    return onSuccess(hotelsData);
  }
  fetch(HOTELS_DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Не получилось получить отели, попробуйте обновить страницу');
      }
    })
    .then((data) => {
      hotelsData = data;
      onSuccess(data);
    })
    .catch((err) => {
      onFail(err.message);
    });
};

const sendData = (onSuccess, onFail, body) => {
  submitButton.disabled = true;
  fetch(
    DATA_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch((err) => {
      onFail(err.message);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
};

export {getData, sendData};
