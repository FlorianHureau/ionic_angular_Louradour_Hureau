import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
<<<<<<< Updated upstream

import { AgmCoreModule } from '@agm/core';

=======
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgmCoreModule } from '@agm/core';  

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
<<<<<<< Updated upstream
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF9w5Gw-o5L5et8ywyS_dfntBPaRRwzmA'
=======
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
>>>>>>> Stashed changes
    })
  ],
  bootstrap: [IonicApp, AppComponent],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
