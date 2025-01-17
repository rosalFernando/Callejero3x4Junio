var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'listas', loadChildren: './listas/listas.module#ListasPageModule' },
    { path: 'modal', loadChildren: './modal/modal/modal.module#ModalPageModule' },
    { path: 'mapa', loadChildren: './modal/mapa/mapa.module#MapaPageModule' },
    { path: 'mapa-principal', loadChildren: './mapaPrincipal/mapa-principal/mapa-principal.module#MapaPrincipalPageModule' },
    { path: 'autenticacion', loadChildren: './auth/autenticacion/autenticacion.module#AutenticacionPageModule' },
    { path: 'registro', loadChildren: './auth/registro/registro.module#RegistroPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map