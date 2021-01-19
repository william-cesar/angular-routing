import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app.routing.module";
import { CursosModule } from "./modules/cursos.module";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";

import { HeaderComponent } from "./components/header/header.component";

import { HomeService } from "./services/home.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule,
    MatToolbarModule
  ],
  declarations: [AppComponent, HeaderComponent, HomeComponent, LoginComponent],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
