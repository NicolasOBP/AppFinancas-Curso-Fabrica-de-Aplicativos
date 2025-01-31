import { Navigate } from "@/Routes/types/screenProps";
import api from "@/services/api";
import { useNavigation } from "@react-navigation/native";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function useSignUp() {
  const navigation = useNavigation<Navigate>();

  async function signUp(user: User) {
    try {
      const response = await api.post("/users", user);

      navigation.goBack();
    } catch (e) {
      console.log("ERRO", e);
    }
  }

  return { signUp };
}
