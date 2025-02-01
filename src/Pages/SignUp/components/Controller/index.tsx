import { Control, Controller } from "react-hook-form";
import { UserSignUpSchema } from "../../hooks/userSignUpSchema";
import { AreaInput, Input, TextError } from "@/Pages/SignIn/style";

type Props = {
  control: Control<UserSignUpSchema>;
  name: keyof UserSignUpSchema;
  placeholder?: string;
};

export default function ControllerSignUP({
  control,
  name,
  placeholder,
}: Props) {
  return (
    <AreaInput>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              placeholder={placeholder}
              onChangeText={onChange}
              value={value}
            />
            {error && <TextError>{error.message}</TextError>}
          </>
        )}
      />
    </AreaInput>
  );
}
