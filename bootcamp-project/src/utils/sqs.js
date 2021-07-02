// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'us-east-2' });

// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: '2021-07-01' });

function sendMessageToQueue({ date, mail }) {
    var params = {
        // Remove DelaySeconds parameter and value for FIFO queues
        // DelaySeconds: 10,
        MessageAttributes: {
            "Date": {
                DataType: "String",
                StringValue: date,
            },
            "Mail": {
                DataType: "String",
                StringValue: mail,
            },
        },
        MessageBody: `Se loguearon a tu cuenta con ${mail}. La fecha: ${date}`,
        // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
        // MessageGroupId: "Group1",  // Required for FIFO queues
        QueueUrl: "http://localstack:4576/000000000000/notificaciones"
    };

    return sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });

}

module.exports = { sendMessageToQueue }
