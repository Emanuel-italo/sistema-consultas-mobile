import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// 1. DEFINIÇÃO DE TIPOS
// Unificamos as tipagens para evitar conflitos de importação
export type Especialidade = {
  id: number;
  nome: string;
  descricao: string;
};

export type Medico = {
  id: number;
  nome: string;
  crm: string;
  especialidade: Especialidade;
  ativo: boolean;
};

export type Paciente = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
};

export type Consulta = {
  id: number;
  paciente: Paciente;
  medico: Medico;
  data: Date;
  valor: number;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
  observacoes: string;
};

// 2. DADOS MOCKADOS (Simulação de Banco de Dados)
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

// 3. COMPONENTE PRINCIPAL
export default function App() {
  // O useState DEVE ficar dentro do componente. 
  // Usamos os objetos reais (medico1, paciente1) e o tipo Date.
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    // Em JavaScript, os meses começam em 0 (Janeiro = 0, Fevereiro = 1, Março = 2)
    data: new Date(2026, 1, 28), 
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  // Função única para atualizar o status da consulta
  function confirmarConsulta() {
    setConsulta({
      ...consulta, // Mantém os outros dados da consulta intactos
      status: "confirmada", // Atualiza apenas o status
    });
  }

  // Funções utilitárias para formatar os dados visuais
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
        {/* Como paciente e medico são objetos, acessamos a propriedade '.nome' */}
        <Text style={styles.texto}>Paciente: {consulta.paciente.nome}</Text>
        <Text style={styles.texto}>Médico: {consulta.medico.nome}</Text>
        <Text style={styles.texto}>Data: {formatarData(consulta.data)}</Text>
        <Text style={styles.texto}>Valor: {formatarValor(consulta.valor)}</Text>
        <Text style={styles.texto}>Status: {consulta.status}</Text>
        
        {/* O botão só aparece se o status for "agendada" */}
        {consulta.status === "agendada" && (
          <View style={styles.botaoContainer}>
            <Button title="Confirmar Consulta" onPress={confirmarConsulta} />
          </View>
        )}
      </View>
    </View>
  );
}

// 4. ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
  botaoContainer: {
    marginTop: 15,
  }
});