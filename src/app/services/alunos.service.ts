import { Injectable } from "@angular/core";

@Injectable()
export class AlunosService {
  private alunos: any[] = [
    { id: 1, nome: "Jose da Silva", email: "jose.silva@mail.com" },
    { id: 2, nome: "Ana Maria Souza", email: "ana.souza@mail.com" },
    { id: 3, nome: "João Moura", email: "joao.moura@mail.com" },
    { id: 4, nome: "Carla Andrade", email: "carla.andrade@mail.com" },
    { id: 5, nome: "Alice Andrade", email: "alice.andrade@mail.com" }
  ];

  getAlunos() {
    return this.alunos;
  }
}
