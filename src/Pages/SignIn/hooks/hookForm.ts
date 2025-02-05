import { useForm } from "react-hook-form";
import { UserSignInSchema, userSignInSchema } from "./userSignInSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useHookFormSignIn() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserSignInSchema>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return { handleSubmit, errors, control };
}
