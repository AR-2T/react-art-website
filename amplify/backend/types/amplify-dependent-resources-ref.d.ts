export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "reactartwebsite": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "reactartwebsite": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3reactartwebsiteimagestorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}