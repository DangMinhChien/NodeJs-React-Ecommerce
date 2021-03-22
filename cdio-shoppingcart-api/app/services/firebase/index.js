'use strict';

const admin = require('firebase-admin');
const _ = require('lodash');

const serviceAccount = require('./firebase-admin.json');

const credential = serviceAccount;

admin.initializeApp({
  credential: admin.credential.cert(credential)
});

function sendPushNotificationToDevice(registrationToken, content, payload, activityTypeSlug, sound) {
  if (registrationToken.length === 0) {
    return;
  }
  const data = {
    payload: JSON.stringify(payload),
    activityTypeSlug,
    createdAt: new Date().toISOString()
  };
  const notification = {
    tokens: registrationToken,
    notification: {
      title: 'CSM',
      body: content
    },
    data
  };
  if (sound) {
    notification.android = {
      'notification': {
        'sound': 'sos.mp3',
        'channelId': 'sos'
      },
      priority: 'high'
    };
    notification.apns = {
      'payload': {
        'aps': {
          'sound': 'sos.mp3'
        }
      }
    };
  }
  admin
    .messaging()
    .sendMulticast(notification)
    .then((response) => {
      // See the MessagingDevicesResponse reference documentation for
      // the contents of response.
      console.log('Successfully sent message:' + JSON.stringify(response));
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}

exports.sendPushNotificationToDevice = sendPushNotificationToDevice;
