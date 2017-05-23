import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup'; 
import { ResetPasswordPage } from '../pages/reset-password/reset-password'; //Added reset password page
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth-provider';

export const firebaseConfig = {
    apiKey: '*****',
    authDomain: '*****',
    databaseURL: '*****',
    storageBucket: '*****',
    messagingSenderId: '*****'
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ResetPasswordPage //Added reset password page
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ResetPasswordPage //Added reset password page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},SplashScreen,StatusBar, AuthProvider]
})
export class AppModule {}
