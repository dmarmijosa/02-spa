import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import{APP_ROUTING} from './app.routes';


//Servicios


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//CREAR COMPONENTES SIN CSS Y SIN SPEC 
//ng g c components/home  --inline-style --skipTests=true

export class AppModule { }
