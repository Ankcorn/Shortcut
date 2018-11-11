const functions = require('firebase-functions');
const request = require('request');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.pairTvm = functions.https.onRequest((req, res) => {
    body = req.body
    console.log(body)
    var key = '';
    var to = '';
    var notification = {
      'userId': body.userId,
    };
    
    return request.post({
      'headers': {
        'Authorization': 'key=' + key,
        'Content-Type': 'application/json'
      },
      'url': 'https://fcm.googleapis.com/fcm/send',
      'body': JSON.stringify({
        'notification': notification,
        'to': to
      })
    }, function(error, response, body){
        console.log(body);
        return true;
    })
  });