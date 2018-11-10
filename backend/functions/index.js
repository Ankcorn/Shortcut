const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.pairTvm = functions.https.onRequest((req, res) => {
    body = req.body
    console.log('new message in the queue', body)
    const payload = {notification: {
            userId: body.userId
        }
    };
    return admin.messaging().sendToTopic(body.tvmId,payload)
        .then(function(response){
                console.log('Notification sent successfully:',response);
                return true;
        }) 
        .catch(function(error){
                console.log('Notification sent failed:',error);
                return false;
    });
  });