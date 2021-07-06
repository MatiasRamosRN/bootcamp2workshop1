// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
const axios = require("axios");
// Set the region
AWS.config.update({
    region: "us-east-2",
    accessKeyId: "AKIAEXAMPLE123",
    secretAccessKey: "AWSSECRETACCESSEY123",
});

// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: "2021-07-01" });

var queueURL = "http://localhost:4576/000000000000/estadisticas";

var params = {
    AttributeNames: ["SentTimestamp"],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: ["All"],
    QueueUrl: queueURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0,
};

sqs.receiveMessage(params, function (err, data) {
    if (err) {
        console.log("Receive Error", err);
    } else if (data.Messages) {
        var deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle,
        };

        sqs.deleteMessage(deleteParams, function (err, data) {
            if (err) {
                console.log("Delete Error", err);
            } else {
                console.log("Message Deleted", data);
            }
        });
    }
});
