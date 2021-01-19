import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { NotFoundComponent } from "./views/notFound/not-found.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
