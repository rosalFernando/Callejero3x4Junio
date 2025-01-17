var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ModalPage } from './modal/modal/modal.page';
import { MapaPage } from './modal/mapa/mapa.page';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ReactiveFormsModule } from '@angular/forms';
firebase.initializeApp(environment.firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [AppComponent, ModalPage, MapaPage],
            entryComponents: [ModalPage, MapaPage,],
            imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
                AngularFireModule,
                AngularFireDatabaseModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                ReactiveFormsModule,
                AngularFirestoreModule,
                AngularFireAuthModule
            ],
            providers: [
                StatusBar,
                SplashScreen,
                AuthService,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                AngularFirestore,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map