import { Control, Controller } from "react-hook-form";
import { AreaInput, Input, TextError } from "@/Pages/SignIn/style";
import { Fragment } from "react";
import { UserSignInSchema } from "../../hooks/userSignInSchema";

type Props = {
  control: Control<UserSignInSchema>;
  name: keyof UserSignInSchema;
  placeholder?: string;
};

export default function ControllerSignIn({
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
          <Fragment>
            <Input
              placeholder={placeholder}
              onChangeText={onChange}
              value={value}
            />
            {error && <TextError>{error.message}</TextError>}
          </Fragment>
        )}
      />
    </AreaInput>
  );
}
