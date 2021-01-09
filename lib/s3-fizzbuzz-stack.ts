import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3n from '@aws-cdk/aws-s3-notifications';
import { stringLike } from '@aws-cdk/assert';


export class S3FizzbuzzStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fizzbuzzFunc = new lambda.NodejsFunction(this, "fizzbuzz-func");

    const fizzbuzzBucket = new s3.Bucket(this, "fizzbuzz-bucket");

    fizzbuzzBucket.grantReadWrite(fizzbuzzFunc);

    fizzbuzzBucket.addEventNotification(
      s3.EventType.OBJECT_CREATED,
      new s3n.LambdaDestination(fizzbuzzFunc),
        {suffix: ".json"}
    );
    fizzbuzzBucket.addEventNotification(
      s3.EventType.OBJECT_CREATED,
      new s3n.LambdaDestination(fizzbuzzFunc),
        {suffix: ".yaml"}
    );
    fizzbuzzBucket.addEventNotification(
      s3.EventType.OBJECT_CREATED,
      new s3n.LambdaDestination(fizzbuzzFunc),
        {suffix: ".yml"}
    );
  }
}
