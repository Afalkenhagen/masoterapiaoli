import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavComponent } from './components/nav/nav.component';
import { ArticleComponent } from './components/article/article.component';
import { Article2Component } from './components/article2/article2.component';
import { Article3Component } from './components/article3/article3.component';
import { FooterComponent } from './components/footer/footer.component';
import { TerapiasComponent } from "./pages/terapias/terapias.component";
import { InicioComponent } from './pages/inicio/inicio.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticleComponent,
    Article2Component,
    Article3Component,
    FooterComponent,
    TerapiasComponent,
    InicioComponent,
    TurnosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, 
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
