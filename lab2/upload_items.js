var AWS = require("aws-sdk"),
  DDB = new AWS.DynamoDB({
    region: "ap-southeast-1",
  });

(function uploadItemstoDynamoDB() {
  const dragon1 = {
    Item: {
      dragon_name: {
        S: "sparky",
      },
      dragon_type: {
        S: "green",
      },
      description: {
        S: "breaths acid",
      },
      attack: {
        N: "10",
      },
      defense: {
        N: "7",
      },
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "dragons",
  };
  DDB.putItem(dragon1, (err, data) => {
    console.log(err, data);
  });
  const dragon2 = {
    Item: {
      dragon_name: {
        S: "tallie",
      },
      dragon_type: {
        S: "red",
      },
      description: {
        S: "breaths fire",
      },
      attack: {
        N: "7",
      },
      defense: {
        N: "10",
      },
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "dragons",
  };
  DDB.putItem(dragon2, (err, data) => {
    console.log(err, data);
  });
})();
