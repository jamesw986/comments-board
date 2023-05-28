import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Comment } from '../types/types';

type EditedComment = Pick<Comment, 'id' | 'username'> & { newComment: string };

const usePatchComment = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: EditedComment) => {
      return axios.patch(`http://localhost:3001/comments/${id}`, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    }
  });

  return mutation;
};

export default usePatchComment;
