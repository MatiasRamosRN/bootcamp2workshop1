var AWS = require("aws-sdk");
// Set region
AWS.config.update({
  region: "us-east-2",
  accessKeyId: "AKIAEXAMPLE123",
  secretAccessKey: "AWSSECRETACCESSEY123",
});
function sendMessageToSNS(msg) {
  const params = {
    Message: msg /* required */,
    PhoneNumber: "+5491123867112",
    TopicArn: "arn:aws:sns:us-east-2:000000000000:local_sns",
  };
  var publishTextPromise = new AWS.SNS({
    apiVersion: "2010-03-31",
    endpoint: "http://localhost:4575",
  })
    .publish(params)
    .promise();
  return publishTextPromise
    .then(function (data) {
      console.log(
        `Message ${params.Message} sent to the topic ${params.TopicArn}`
      );
      console.log("MessageID is " + data.MessageId);
    })
    .catch(function (err) {
      console.log("Error sns", err);
    });
}

module.exports = { sendMessageToSNS };
