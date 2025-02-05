import { setLoadingAuth, setUser } from "@/contexts/userSlice";
import { UserSignInSchema } from "./userSignInSchema";
import { useAppDispatch } from "@/contexts/hooks";
import api from "@/services/api";

type response = {
  data: {
    id: string;
    name: string;
    token: string;
  };
};

export default function useSignIn() {
  const dispatch = useAppDispatch();

  async function signIn(user: UserSignInSchema) {
    dispatch(setLoadingAuth(true));

    try {
      const response: response = await api.post("/login", user);

      const { id, name, token } = response.data;

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      dispatch(setUser({ id, name, email: user.email }), setLoadingAuth(false));
    } catch (error) {
      console.log("Erro ao logar", error);
      dispatch(setLoadingAuth(false));
    }
  }

  return { signIn };
}
