# HomeMobileApp

A simple mobile app built with React Native.
**Main Features**

- **Login with AWS Cognito Amplify**: Secure user authentication.
- **Profile Image from S3**: Fetch and display the user's profile image from an S3 bucket via an API call.
- **Publish to AWS IoT**: Publish messages to AWS IoT using API calls.
- **Profile Page**: Display the profile page using the ID token obtained from Cognito.

# Blog Post

This app is discussed in detail in the [related blog post](https://flgado.github.io/blog/posts/post_1/my-first-post/), where I explain how to quickly deploy a serverless API using AWS SAM (Serverless Application Model), and implement authentication with AWS Cognito in this mobile app.


# Notes
- Copy config.example.ts to config.ts and add your endpoints to this file