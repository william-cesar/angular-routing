import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app.routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { CursosComponent } from "./views/cursos/cursos.component";
import { NotFoundComponent } from "./views/notFound/not-found.component";
import { HeaderComponent } from "./components/header/header.component";
import { CursoDetalheComponent } from "./components/curso-detalhe/curso-detalhe.component";

import { HomeService } from "./services/home.service";
import { CursosService } from "./services/cursos.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    NotFoundComponent
  ],
  providers: [HomeService, CursosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
