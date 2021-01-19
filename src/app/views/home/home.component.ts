import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  cursoId: string = "";

  constructor(private homeService: HomeService) {}

  ngOnInit() {}

  updateValues(): void {
    this.homeService.shareInput(this.cursoId);
  }
}
