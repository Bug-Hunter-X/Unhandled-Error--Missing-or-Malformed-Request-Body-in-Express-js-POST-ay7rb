# Unhandled Error: Missing or Malformed Request Body in Express.js POST

This repository demonstrates a common error in Express.js applications: failing to handle cases where the request body is missing or malformed in a POST request.  The application silently fails, making debugging difficult.  The solution shows how to properly validate and handle the request body to prevent this.

## Bug

The `bug.js` file contains an Express.js application that accepts a POST request to the `/user` endpoint. However, it lacks proper error handling for scenarios where `req.body` is undefined or does not contain the expected data. 

## Solution

The `bugSolution.js` file demonstrates the correct way to handle this situation.  It includes checks to ensure `req.body` exists and contains the necessary data, providing appropriate error responses if not.