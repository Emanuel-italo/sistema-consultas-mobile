import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/assets/interfaces/medico";
import { Consulta } from "./src/assets/interfaces/consulta";

const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
  descricao: "Cuidados com o coração",
};

const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};

const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
  telefone: "(11) 98765-4321",
};

export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 1, 28),
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  const [mensagem, setMensagem] = useState("");

  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });

    setMensagem("✅ Consulta confirmada com sucesso!");
  }

  function cancelarConsulta() {
    setConsulta({
      ...consulta,
      status: "cancelada",
    });

    setMensagem("❌ Consulta cancelada.");
  }

  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>Paciente: {consulta.paciente.nome}</Text>
        <Text style={styles.texto}>Médico: {consulta.medico.nome}</Text>
        <Text style={styles.texto}>Especialidade: {consulta.medico.especialidade.nome}</Text>
        <Text style={styles.texto}>Data: {formatarData(consulta.data)}</Text>
        <Text style={styles.texto}>Valor: {formatarValor(consulta.valor)}</Text>
        <Text style={styles.texto}>Status: {consulta.status}</Text>

        {mensagem !== "" && (
          <Text style={styles.mensagem}>{mensagem}</Text>
        )}

        {consulta.status === "agendada" && (
          <View style={styles.botoes}>

            <TouchableOpacity
              style={styles.botaoConfirmar}
              onPress={confirmarConsulta}
            >
              <Text style={styles.textoBotao}>Confirmar Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={cancelarConsulta}
            >
              <Text style={styles.textoBotao}>Cancelar Consulta</Text>
            </TouchableOpacity>

          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    maxWidth: 350,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 4,
  },

  texto: {
    fontSize: 16,
    marginBottom: 6,
  },

  mensagem: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  botoes: {
    marginTop: 20,
  },

  botaoConfirmar: {
    backgroundColor: "#2ecc71",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },

  botaoCancelar: {
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});