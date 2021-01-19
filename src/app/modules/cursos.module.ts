import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

import { CursosComponent } from "../views/cursos/cursos.component";
import { NotFoundComponent } from "../views/notFound/not-found.component";
import { CursoDetalheComponent } from "../components/curso-detalhe/curso-detalhe.component";

import { CursosService } from "../services/cursos.service";

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [],
  declarations: [CursosComponent, CursoDetalheComponent, NotFoundComponent],
  providers: [CursosService]
})
export class CursosModule {}
