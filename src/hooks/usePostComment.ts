import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Comment } from '../types/types';

const usePostComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: Comment) => {
      return axios.post('http://localhost:3001/comments', comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    }
  });

  return mutation;
};

export default usePostComment;
