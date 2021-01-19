import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { CursosComponent } from "./views/cursos/cursos.component";
import { NotFoundComponent } from "./views/notFound/not-found.component";
import { CursoDetalheComponent } from "./components/curso-detalhe/curso-detalhe.component";

const APP_ROUTES: Routes = [
  { path: "cursos", component: CursosComponent },
  { path: "curso/:id", component: CursoDetalheComponent },
  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "", component: HomeComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  APP_ROUTES
);
