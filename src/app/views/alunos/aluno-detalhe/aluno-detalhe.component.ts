import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlunosService } from "../../../services/alunos.service";

@Component({
  templateUrl: "./aluno-detalhe.component.html",
  styleUrls: ["./aluno-detalhe.component.css"]
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
      this.aluno = this.alunosService.getAluno(this.id);

      if (this.aluno == null) {
        this.router.navigate(["/404"]);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
