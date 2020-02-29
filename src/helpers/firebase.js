import Vue from 'vue'

import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: "AIzaSyBC1W2__rGlZtRIfwvm4y1WDeyGf5z2McU",
  authDomain: "loginexample-25289.firebaseapp.com",
  databaseURL: "https://loginexample-25289.firebaseio.com",
  projectId: "loginexample-25289",
  storageBucket: "loginexample-25289.appspot.com",
  messagingSenderId: "439985478129",
  appId: "1:439985478129:web:3f1f4224ec7e2c457acc50"
};

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui
