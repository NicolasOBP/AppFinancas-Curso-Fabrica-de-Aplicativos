import { ActivityIndicator, Platform } from "react-native";
import {
  Background,
  Container,
  SubmitButton,
  SubmitText,
} from "@/Pages/SignIn/style";
import useSignUp from "@/hooks/useSignUp";
import { useAppSelector } from "@/contexts/hooks";
import { selectLoading } from "@/contexts/userSlice";
import { useHookFormSignUp } from "./hooks/hookForm";
import ControllerSignUP from "./components/Controller";

export default function SignUp() {
  const { handleSubmit, control } = useHookFormSignUp();
  const { signUp } = useSignUp();
  const loading = useAppSelector(selectLoading);

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enable>
        <ControllerSignUP placeholder="Nome" control={control} name="name" />
        <ControllerSignUP
          placeholder="Seu email"
          control={control}
          name="email"
        />
        <ControllerSignUP
          placeholder="Sua Senha"
          control={control}
          name="password"
        />

        <SubmitButton onPress={handleSubmit(signUp)}>
          {loading ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
