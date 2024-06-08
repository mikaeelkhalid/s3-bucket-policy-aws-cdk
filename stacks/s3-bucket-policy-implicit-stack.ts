import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Effect, PolicyStatement, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Bucket, BucketPolicy } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class S3BucketPolicyImplicitStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    /* 
     * implicit way to add s3 bucket policy using 'addToResourcePolicy'
    */

    // create the s3 bucket
    const implicitBucket = new Bucket(this, 'implicit-s3-bucket', {
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // creates a Bucket Policy automatically
    implicitBucket.addToResourcePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        principals: [new ServicePrincipal('lambda.amazonaws.com')],
        actions: ['s3:GetObject'],
        resources: [`${implicitBucket.bucketArn}/*`],
      }),
    );

    // access the bucket policy
    implicitBucket.policy?.document.addStatements(
      new PolicyStatement({
        effect: Effect.ALLOW,
        principals: [new ServicePrincipal('lambda.amazonaws.com')],
        actions: ['s3:GetBucketTagging'],
        resources: [implicitBucket.bucketArn],
      }),
    );
  }
}
