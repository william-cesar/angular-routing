import { Component, OnInit } from "@angular/core";
import { CursosService } from "../../services/cursos.service";

@Component({
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit {
  cursos: any[];

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
}
