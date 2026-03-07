import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// 1. IMPORTAÇÕES
// Aqui conectamos o teu App.tsx aos ficheiros que criaste nas outras pastas
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/assets/interfaces/medico";
import { Consulta } from "./src/assets/interfaces/consulta";

// 2. DADOS MOCKADOS (Simulação de Base de Dados)
// Como as tuas interfaces permitem campos opcionais (ex: telefone?), isto vai funcionar perfeitamente
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
  // Inicializamos o estado com os dados e o tipo "Consulta" que importaste
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 1, 28), // 28 de Fevereiro de 2026
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  // Função para confirmar a consulta
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  // Funções para formatar moeda e data para o padrão do Brasil (como pediste no código original)
  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR");
  }

  // 4. RENDERIZAÇÃO NO ECRÃ
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      
      <View style={styles.card}>
        <Text style={styles.texto}>Paciente: {consulta.paciente.nome}</Text>
        <Text style={styles.texto}>Médico: {consulta.medico.nome}</Text>
        <Text style={styles.texto}>Data: {formatarData(consulta.data)}</Text>
        <Text style={styles.texto}>Valor: {formatarValor(consulta.valor)}</Text>
        <Text style={styles.texto}>Status: {consulta.status}</Text>
        
        {/* Validação: Só mostra o botão se estiver 'agendada' */}
        {consulta.status === "agendada" && (
          <View style={styles.botaoContainer}>
            <Button title="Confirmar Consulta" onPress={confirmarConsulta} />
          </View>
        )}
      </View>
    </View>
  );
}

// 5. ESTILOS
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