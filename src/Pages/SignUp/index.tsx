import { Platform } from "react-native";
import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
} from "@/Pages/SignIn/style";
import { useState } from "react";
import useSignUp from "@/hooks/useSignUp";

export default function SignUp() {
  const { signUp } = useSignUp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enable>
        <AreaInput>
          <Input placeholder="Nome" value={name} onChangeText={setName} />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={setEmail}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={() => signUp({ name, email, password })}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
