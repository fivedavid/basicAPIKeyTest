Basic API with API Keys including quota and throttling using serverless framework.

## docs
https://sls.zone/pages/learn/testing-with-serverless/
https://www.serverless.com

## Prerequisites
serverles cli - https://www.serverless.com/framework/docs/getting-started/

## Available Scripts
In the project directory, you can run:
### `npm install`
This installs the dependencies.

### `npm run sls:test`
This runs offline test.

### `npm run sls:deploy`
This deploys the api to aws cloud.
After deployed, you can get api keys from console and use it for api request.
Please copy those keys and add it to `x-api-key` in request header.