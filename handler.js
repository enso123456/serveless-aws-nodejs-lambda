'use strict';

const AWS = require('aws-sdk');
const fs = require('fs');

module.exports.hello = (event, context, callback) => {
  // For dev purposes only
  AWS.config.update({ accessKeyId: 'AKIAJY66ZR764NCCJJIQ', secretAccessKey: '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' });

  // Read in the file, convert it to base64, store to S3
  fs.readFile('del2.txt', function (err, data) {
    if (err) { throw err; }

    var s3 = new AWS.S3();
    
    var base64data = new Buffer(data, 'binary');

    s3.putObject({
        Bucket: 'lambda-test-dev-serverlessdeploymentbucket-80wk506elytf',
        Key: 'del2.txt',
        Body: base64data,
        ACL: 'public-read'
    },function (resp) {
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: 'success uploaded'
          })
        };
        callback(null, response);
    });
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
