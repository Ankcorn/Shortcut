const functions = require('firebase-functions');
const request = require('request');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.pairTvm = functions.https.onRequest((req, res) => {
    body = req.body
    console.log(body)
    var key = 'AAAACf33bDs:APA91bEy1p-jxyoVEKm5VEILpoCJaZWyzGnTov7YYUHLVpzTR-Y5QqTxGAf2FRtCgJujge3AWodZZ4K0ARh_9Um4h839SSoXmqs1TxSp4KpPoz9kbJ8SgT7MdQajQ6PzEpdShzTG9TPe';
    var to = body.tvmId;
    var notification = {
      'userId': body.userId,
    };
    
    request.post({
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
        res.send(response);
    })
  });