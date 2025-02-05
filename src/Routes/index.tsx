import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAppSelector } from "@/contexts/hooks";
import { selectSigned } from "@/contexts/userSlice";

export default function Routes() {
  const signed = useAppSelector(selectSigned);
  const loading = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
