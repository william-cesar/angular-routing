import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  cursoId: string = "";
  inscricao: Subscription;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.inscricao = this.homeService.shareInput$.subscribe((data: string) => {
      this.cursoId = data;
    });
  }

  //É recomendado remover as subscrições ao destruir o componente
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
