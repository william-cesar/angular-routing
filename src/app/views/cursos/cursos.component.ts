import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CursosService } from "../../services/cursos.service";

@Component({
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe((pagina: any) => {
      this.pagina = +pagina["pagina"]; //ou parseInt()
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  paginaAnterior() {
    if (this.pagina == 1) {
      this.router.navigate(["/cursos"], {
        queryParams: { pagina: 1 }
      });
    } else {
      this.router.navigate(["/cursos"], {
        queryParams: { pagina: --this.pagina }
      });
    }
  }

  proximaPagina() {
    this.router.navigate(["/cursos"], {
      queryParams: { pagina: ++this.pagina }
    });
  }
}
