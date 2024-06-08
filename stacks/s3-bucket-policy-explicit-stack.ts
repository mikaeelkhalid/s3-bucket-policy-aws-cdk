import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Effect, PolicyStatement, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Bucket, BucketPolicy } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class S3BucketPolicyExplicitStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    /*
     * explicit way to add s3 bucket policy using 'BucketPolicy'
     */

    // create the s3 bucket
    const explicitBucket = new Bucket(this, 'explicit-s3-bucket', {
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // create the bucket policy
    const bucketPolicy = new BucketPolicy(this, 'explicit-bucket-policy-id', {
      bucket: explicitBucket,
    });

    // add policy statements ot the bucket policy
    bucketPolicy.document.addStatements(
      new PolicyStatement({
        effect: Effect.ALLOW,
        principals: [new ServicePrincipal('lambda.amazonaws.com')],
        actions: ['s3:GetObject'],
        resources: [`${explicitBucket.bucketArn}/*`],
      }),
    );
  }
}
