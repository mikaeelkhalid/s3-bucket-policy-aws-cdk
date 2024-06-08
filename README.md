# S3 Bucket Policy with AWS CDK

[![Mikaeel Khalid](https://badgen.now.sh/badge/by/mikaeelkhalid/purple)](https://github.com/mikaeelkhalid)

This project demonstrates how to create and manage S3 bucket policies using AWS CDK (Cloud Development Kit) in both explicit and implicit ways. The project is structured to provide a clear and reusable approach for defining bucket policies.

## Prerequisites

Ensure you have the following installed:

- AWS CDK
- Node.js
- TypeScript


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mikaeelkhalid/s3-bucket-policy-aws-cdk.git
    cd s3-bucket-policy-aws-cdk
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

### Explicit Bucket Policy

The explicit approach involves creating a separate `BucketPolicy` resource and attaching it to the S3 bucket.

Code for this can be found in `stacks/s3-bucket-policy-explicit-stack.ts`.

### Implicit Bucket Policy

The implicit approach involves adding the bucket policy directly to the bucket resource.

Code for this can be found in `stacks/s3-bucket-policy-implicit-stack.ts`.

### Deploying the Stacks

1. Bootstrap the CDK environment:

    ```bash
    cdk bootstrap
    ```

2. Deploy the implicit stack:

    ```bash
    cdk deploy S3BucketPolicyImplicitStack
    ```

3. Deploy the explicit stack:

    ```bash
    cdk deploy S3BucketPolicyExplicitStack
    ```

## Cleanup

To delete the stacks and cleanup resources:

```bash
cdk destroy S3BucketPolicyImplicitStack
cdk destroy S3BucketPolicyExplicitStack
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

