'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/auth-events.js');
const productEvents = require('./product/product-events.js');
const orderEvents = require('./order/order_events.js');
const profileEvents = require('./profile/profile-events.js');
const cartEvents = require('./cart/cart_events.js');
const stripeEvents = require('./stripe/stripe-events.js');
const adminEvents = require('./admin/admin_events.js');


// On document ready
$(() => {
  authEvents.addHandlers();
  productEvents.addProductHandlers();
  orderEvents.addHandlers();
  profileEvents.addProfileHandlers();
  cartEvents.addCartHandlers();
  stripeEvents.addHandlers();

  $('head').append("<link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>");
  $('head').append("<link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>");

  adminEvents.addHandlers();
});
