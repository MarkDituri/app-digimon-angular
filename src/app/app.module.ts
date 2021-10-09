import { AppComponent } from './app.component';
import { AppEspecials } from './componentes/app-especials/app-especials.component';
import { AppFooter } from './componentes/app-footer/app-footer.component';
import { AppHeader } from './componentes/app-header/app-header.component';
import { AppMenu } from './componentes/app-menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSlider } from './componentes/app-slider/app-slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { DigimonDest } from './componentes/digimon-dest/digimon-dest.component';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    AppMenu,
    AppSlider,
    AppEspecials,
    DigimonDest
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
