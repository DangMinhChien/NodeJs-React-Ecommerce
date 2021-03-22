'use strict';

require('dotenv').config();
const path = require('path');
const Email = require('email-templates');
const moment = require('moment');
const nodemailer = require('nodemailer');
const passwordReset = path.join(__dirname, 'emails', 'template', 'resetPassword.ejs');
const confirmEmail = path.join(__dirname, 'emails', 'template', 'confirmEmail.ejs');
const createOrderEmail = path.join(__dirname, 'emails', 'template', 'createOrderEmail.ejs');
const confirmOrderEmail = path.join(__dirname, 'emails', 'template', 'confirmOrderEmail.ejs');
const shippedEmail = path.join(__dirname, 'emails', 'template', 'shippedEmail.ejs');
const completeOrderEmail = path.join(__dirname, 'emails', 'template', 'completeOrderEmail.ejs');
const contactEmail = path.join(__dirname, 'emails', 'template', 'contactEmail.ejs');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const Models = require('./../db/models');
const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY
  })
);

const email = new Email({
  message: {
    from: '"Limupa Shop" <info@cdio.com>', // sender address
  },
  send: true,
  transport: transport
});

async function sendEmailResetPassword(receiverEmail, resetPasswordUrl) {
  try {
    const content = await email
      .render(passwordReset, {
        name: 'Limupa Shop',
        token: resetPasswordUrl,
        timeToken: 24
      });
    const mailOptions = {
      from: '"Limupa Shop" <info@cdio.com>',
      to: receiverEmail, // list of receivers
      subject: 'Limupa Shop! Reset password request', // Subject line
      html: content
    };
    transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    return err;
  }
}
async function sendEmailContactEmail(receiverEmail) {
  try {
    const content = await email
      .render(contactEmail, {
        name: receiverEmail,
      });
    const mailOptions = {
      from: '"Limupa Shop" <info@cdio.com>',
      to: receiverEmail, // list of receivers
      subject: 'Limupa Shop! Re: your contact', // Subject line
      html: content
    };
    transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function sendEmaiVerifyEmail(receiverEmail, verifyEmailToken) {
  try {
    const content = await email
      .render(confirmEmail, {
        name: receiverEmail,
        token: verifyEmailToken,
        timeToken: 1
      });
    const mailOptions = {
      from: '"Limupa Shop" <info@cdio.com>',
      to: receiverEmail, // list of receivers
      subject: 'Limupa Shop! Verify email your account', // Subject line
      html: content // html body
    };
    transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function sendEmailCreateOrderEmail(receiverEmail) {
  try {
    const content = await email
      .render(createOrderEmail, {
        name: receiverEmail
      });
    const mailOptions = {
      from: '"Limupa Shop" <info@cdio.com>',
      to: receiverEmail, // list of receivers
      subject: 'Limupa Shop! Your order has been created', // Subject line
      html: content // html body
    };
    transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function sendEmailShippedOrder(id) {
  const order = await Models.Order.query().findById(id);
  if(!order) {
    return {message: 'order not found'}
  }
  const user = await Models.User.query().findById(order.userId);
  if (!user) {
    return {message: 'user not found'}
  }
  try {
    const content = await email
      .render(shippedEmail, {
        name: order.fullName,
      });
    const mailOptions = {
      from: '"Limupa Shop" <info@cdio.com>',
      to: user.email, // list of receivers
      subject: 'Limupa Shop! Your order was shipping', // Subject line
      html: content // html body
    };
    transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function sendEmailConfirmOrderEmail(id) {
  const order = await Models.Order.query().findById(id).eager('orderDetails');
  if(!order) {
    return {message: 'order not found'}
  }
  const user = await Models.User.query().findById(order.userId);
  if (!user) {
    return {message: 'user not found'}
  }
  const formatDay = moment(order.createdAt).format('DD/MM/YYYY H:mm a');
  try {
    const content = await email
      .render(confirmOrderEmail, {
        name: order.fullName,
        order,
        date: formatDay
      });
    const mailOptions = {
      from: '"Limupa Shop" <info@cdio.com>',
      to: user.email, // list of receivers
      subject: 'Limupa Shop! Your order has been confirmed', // Subject line
      html: content // html body
    };
    transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function sendEmailCompleteOrderEmail(id) {
  const order = await Models.Order.query().findById(id);
  if(!order) {
    return {message: 'order not found'}
  }
  const user = await Models.User.query().findById(order.userId);
  if (!user) {
    return {message: 'user not found'}
  }
  try {
    const content = await email
      .render(completeOrderEmail, {
        name: order.fullName
      });
    const mailOptions = {
      from: '"Limupa Shop" <info@cdio.com>',
      to: user.email, // list of receivers
      subject: 'Limupa Shop! Your order has been completed', // Subject line
      html: content // html body
    };
    transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports.sendEmailResetPassword = sendEmailResetPassword;
module.exports.sendEmaiVerifyEmail = sendEmaiVerifyEmail;
module.exports.sendEmailCreateOrderEmail = sendEmailCreateOrderEmail;
module.exports.sendEmailConfirmOrderEmail = sendEmailConfirmOrderEmail;
module.exports.sendEmailShippedOrder = sendEmailShippedOrder;
module.exports.sendEmailCompleteOrderEmail = sendEmailCompleteOrderEmail;
module.exports.sendEmailContactEmail = sendEmailContactEmail;

