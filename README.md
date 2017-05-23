# ionic2Firebase
Ionic2 demo with Firebase email/password authentication.

This Ionic2 application will show how to use Firebase email/password authentication in an Ionic2 application.

## Getting started
This applications needs a Firebase application.
So first you should login to your Firebase console at console.firebase.google.com, create an application and get your Firebase webapp configuration.

Next you need to open the src/app/app.module.ts file and replace the lines below with you configuration settings:
```javascript
  apiKey: '*****',
  authDomain: '*****', 
  databaseURL: '*****',
  storageBucket: '*****',
  messagingSenderId: '*****' 
```

Next install the npm packages from the command line
```
$npm install
```
and start the application
```
$ionic serve
```


## More information
  
For more information read this blog:

http://chriztalk.com/ionic-2-and-firebase

http://chriztalk.com/ionic-2-and-firebase-authentication/

