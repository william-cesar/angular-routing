import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppRoutingModule } from "./app.routing.module";
import { CursosModule } from "./views/cursos/cursos.module";
import { AlunosModule } from "./views/alunos/alunos.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { NotFoundComponent } from "./views/notFound/not-found.component";

import { HeaderComponent } from "./components/header/header.component";

import { HomeService } from "./services/home.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule,
    MatToolbarModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
