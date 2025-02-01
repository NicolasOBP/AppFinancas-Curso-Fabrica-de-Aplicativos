import { useForm } from "react-hook-form";
import { UserSignUpSchema, userSignUpSchema } from "./userSignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useHookFormSignUp() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserSignUpSchema>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  return { handleSubmit, errors, control };
}
