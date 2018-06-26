module.exports.auth = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Auth',
        }),
      };
    
    callback(null, response);
}