import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from '@aws-cdk/aws-amplify-alpha'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, "PortfolioApplication", {
      appName: 'Portfolio',
      // Connect to my github repo
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'ericthebuilder',
        repository: 'portfolio',
        oauthToken: cdk.SecretValue.secretsManager('github-token')
      }),
      // Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting this build"',
                'cd portfolio',
                'npm install'
              ],
            },
            build: {
              commands: [
                'echo "building our nextjs app..."',
                'npm run build-and-export',
                'echo "build is completed"'
              ],
            },
          },
          artifacts: {
            baseDirectory: 'portfolio/out',
            files: ['**/*'],
          },
          cache: {
            paths: [
              'node/modules/**/*',
              '.next/cache/**/*'
            ]
          }
        }
      })
    })
    const mainBranch = amplifyApp.addBranch('main',{
      autoBuild: true
    })
  }
}
