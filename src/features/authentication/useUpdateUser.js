import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User updated successfully");

      queryClient.invalidateQueries({ queryKey: ["user"] });

      // queryClient.setQueriesData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
