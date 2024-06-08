#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { S3BucketPolicyStack } from '../stacks/s3-bucket-policy-stack';

const app = new App();

new S3BucketPolicyStack(app, 'S3BucketPolicyStack', { });