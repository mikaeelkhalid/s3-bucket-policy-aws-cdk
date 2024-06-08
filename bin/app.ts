#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { S3BucketPolicyExplicitStack, S3BucketPolicyImplicitStack } from '../stacks';

const app = new App();

new S3BucketPolicyImplicitStack(app, 'S3BucketPolicyImplicitStack', { });
new S3BucketPolicyExplicitStack(app, 'S3BucketPolicyExplicitStack', { });