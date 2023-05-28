import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Comment } from '../types/types';

const useGetComment = (id: string) => {
  return useQuery({
    queryKey: ['comment'],
    queryFn: async (): Promise<Comment> => {
      const { data } = await axios.get(`http://localhost:3001/comments/${id}`);
      return data;
    }
  });
};

export default useGetComment;
