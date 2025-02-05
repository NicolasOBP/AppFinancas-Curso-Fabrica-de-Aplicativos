import { useAppDispatch } from "@/contexts/hooks";
import { setLoadingAuth } from "@/contexts/userSlice";
import { NavigateAuth } from "@/Routes/types/screenProps";
import api from "@/services/api";
import { useNavigation } from "@react-navigation/native";
import { UserSignUpSchema } from "./userSignUpSchema";

export default function useSignUp() {
  const navigation = useNavigation<NavigateAuth>();
  const dispatch = useAppDispatch();

  async function signUp(user: UserSignUpSchema) {
    if (user.name === "" || user.email === "" || user.password === "") {
      alert("Preencha todos os campos");
      return;
    }

    dispatch(setLoadingAuth(true));
    try {
      const response = await api.post("/users", user);

      dispatch(setLoadingAuth(false));
      navigation.goBack();
    } catch (e) {
      console.log("ERRO", e);
      dispatch(setLoadingAuth(false));
    }
  }

  return { signUp };
}
