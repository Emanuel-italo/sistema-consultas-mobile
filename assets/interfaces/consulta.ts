import { Medico } from "./medico";
import { Paciente } from "../../src/types/paciente";
import { StatusConsulta } from "../../src/types/statusConsulta";

export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes: string;
}