import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,

    onSuccess: (user) => {
      queryClient.clear();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoggingOut };
}
