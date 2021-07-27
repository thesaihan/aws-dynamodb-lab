var AWS = require("aws-sdk"),
  DDB = new AWS.DynamoDB({ region: "ap-southeast-1" });

(function createADataBaseTable() {
  DDB.createTable(
    {
      TableName: "dragons",
      AttributeDefinitions: [
        { AttributeName: "dragon_name", AttributeType: "S" },
      ],
      KeySchema: [
        {
          AttributeName: "dragon_name",
          KeyType: "HASH",
        },
      ],
      BillingMode: "PAY_PER_REQUEST",
    },
    (err, data) => {
      if (err) console.log(err);
      else {
        console.log(data);
      }
    }
  );
})();
