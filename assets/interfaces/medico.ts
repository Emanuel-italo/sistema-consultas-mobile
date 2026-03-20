import { Especialidade } from "../../src/types/especialidade";

export interface Medico {
  id: number;
  nome: string;
  crm: string;
  especialidade: Especialidade;
  ativo: boolean;
}