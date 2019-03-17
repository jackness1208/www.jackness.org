import defaultConfig from './default/default.js';

const dateFormat = function (now) {
  let month = now.getMonth() - 1;
  if (month < 10) {
    month = `0${month}`;
  }

  let date = now.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  return `${now.getFullYear()}-${month}-${date}`;
};

const date = dateFormat(new Date());

let r = defaultConfig;
switch (date) {
  default:
    break;
}

export default r;

