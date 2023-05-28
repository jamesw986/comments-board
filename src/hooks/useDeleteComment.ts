import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useDeleteComment = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return axios.delete(`http://localhost:3001/comments/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    }
  });

  return mutation;
};

export default useDeleteComment;
