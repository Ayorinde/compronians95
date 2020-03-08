```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.10.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.10.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

// or npm install --save firebase

npm install -g firebase-tools

firebase login
firebase init
firebase deploy

functions emulator? (5001)
firestore emulator? (8080)
hosting emulator? (5000)
 //in firebase.json:
   "hosting": {
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ],


https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
```