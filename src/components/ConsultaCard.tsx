import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Aqui está o componente que o seu index.ts estava tentando encontrar!
// Note que estamos usando "export function ConsultaCard" para bater com o seu index.ts
export function ConsultaCard() {
  return (
    <View style={styles.card}>
      <View style={styles.statusBadge}>
        <Text style={{ fontWeight: 'bold' }}>AGENDADA</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.valor}>Nome do Paciente</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.label}>Médico</Text>
        <Text style={styles.valor}>Nome do Médico</Text>
      </View>

      <View style={styles.acoes}>
        <View style={styles.botaoContainer}>
          <Button title="Confirmar" color="#28a745" onPress={() => {}} />
        </View>
        <View style={styles.botaoContainer}>
          <Button title="Cancelar" color="#dc3545" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

// Os seus estilos maravilhosos continuam aqui embaixo
const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginBottom: 10,
    backgroundColor: "#e0e0e0", 
  },
  statusConfirmada: {
    backgroundColor: "#d4edda", 
    borderColor: "#c3e6cb",
    borderWidth: 1,
  },
  statusCancelada: {
    backgroundColor: "#f8d7da", 
    borderColor: "#f5c6cb",
    borderWidth: 1,
  },
  secao: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    paddingTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555555",
    marginTop: 5,
  },
  valor: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  observacoes: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666666",
    marginTop: 8,
  },
  acoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  botaoContainer: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: "hidden", 
  },
  mensagem: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#e2e3e5",
    borderRadius: 8,
  },
  mensagemCancelada: {
    backgroundColor: "#f8d7da",
  },
  mensagemTexto: {
    textAlign: "center",
    color: "#383d41",
    fontSize: 14,
    fontWeight: "500",
  },
});