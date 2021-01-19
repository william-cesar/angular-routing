import { Component, OnInit } from "@angular/core";

import { AlunosService } from "../../services/alunos.service";

@Component({
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.css"]
})
export class AlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }
}
