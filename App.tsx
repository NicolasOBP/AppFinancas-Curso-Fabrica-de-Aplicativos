import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Container, Nome, Title } from "./src/Styles/styles";

export default function App() {
  return (
    <Container>
      <Title cor="#F12121">Open up App.tsx to start working on your app!</Title>
      <Nome>Olá Nícolas</Nome>
      <StatusBar style="auto" />
    </Container>
  );
}
