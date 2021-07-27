var AWS = require("aws-sdk");
var DDB = new AWS.DynamoDB({ region: "ap-southeast-1" });

const scanTable = (print) => {
  DDB.scan({ TableName: "dragons" }, (err, data) => {
    if (err) throw err;
    print(null, data.Items);
  });
};

exports.handler = (event, context, callback) => {
  console.log("Running on AWS Lambda");
  console.log("To run locally use `node scan_dragons.js test`");
  scanTable(callback);
};

if (process.argv[2] === "test") {
  console.log("Running on locally");
  scanTable(console.log);
}
