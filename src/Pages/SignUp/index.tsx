import { Platform, Text, View } from "react-native";
import {
  AreaInput,
  Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from "@/Pages/SignIn/style";

export default function SignUp() {
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enable>
        <AreaInput>
          <Input placeholder="Nome" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua Senha" />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
