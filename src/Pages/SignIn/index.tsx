import { ActivityIndicator, Platform } from "react-native";
import {
  Background,
  Container,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import { NavigateAuth } from "@/Routes/types/screenProps";
import { useHookFormSignIn } from "./hooks/hookForm";
import ControllerSignIn from "./Controller";
import useSignIn from "./hooks/useSignIn";
import { useAppSelector } from "@/contexts/hooks";
import { selectLoading } from "@/contexts/userSlice";

export default function SignIn() {
  const navigation = useNavigation<NavigateAuth>();
  const { control, handleSubmit } = useHookFormSignIn();
  const { signIn } = useSignIn();
  const loading = useAppSelector(selectLoading);

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enable>
        <Logo source={require("@/assets/Logo.png")} />

        <ControllerSignIn
          control={control}
          name="email"
          placeholder="Seu Email"
        />

        <ControllerSignIn
          control={control}
          name="password"
          placeholder="Sua Senha"
        />

        <SubmitButton onPress={handleSubmit(signIn)} activeOpacity={0.8}>
          {loading ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar uma Conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
