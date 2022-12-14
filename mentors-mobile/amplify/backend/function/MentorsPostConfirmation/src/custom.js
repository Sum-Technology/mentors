const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  
  // create a new user to dynamo
  if (!event.request?.userAttributes?.sub) {
    console.log('no sub');
    return;
  }

  const now = new Date();

  const timestamp = now.getTime();

  const userItem = {
    __typename: { S: 'User' },
    _lastChangedat: { N: timestamp.toString() },
    _version: { N: '1' },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.email },
  }

  const params = {
    Item: userItem,
    TableName: tableName,
  }

  try {
    await ddb.putItem(params).promise();
    console.log('success');
  } catch (e) {
    console.log(e)
  }


};
