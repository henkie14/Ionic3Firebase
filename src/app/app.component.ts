import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth'; //Add FirebaseApp

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  
  constructor(platform: Platform, private splashscreen: SplashScreen, private statusbar: StatusBar, private auth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusbar.styleDefault();
      splashscreen.hide();

      //Check if user is authenticated
      auth.authState.subscribe((authState)=>{
        if (authState){
          console.log('Logged in user :', authState.email);
        }
      }); 
    });
  }
}
