import { Platform } from "react-native";
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
} from "./style";
import { useNavigation } from "@react-navigation/native";
import { Navigate } from "@/Routes/types/screenProps";

export default function SignIn() {
  const navigation = useNavigation<Navigate>();
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enable>
        <Logo source={require("@/assets/Logo.png")} />

        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onpress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar uma Conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
