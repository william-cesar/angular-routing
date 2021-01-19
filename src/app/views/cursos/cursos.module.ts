import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

import { CursosRoutingModule } from "./cursos.routing.module";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

import { CursosService } from "../../services/cursos.service";

@NgModule({
  imports: [CommonModule, CursosRoutingModule, MatButtonModule],
  exports: [],
  declarations: [CursosComponent, CursoDetalheComponent],
  providers: [CursosService]
})
export class CursosModule {}
