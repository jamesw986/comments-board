import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Comment } from '../types/types';

const useGetComments = () => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: async (): Promise<Comment[]> => {
      const { data } = await axios.get('http://localhost:3001/comments');
      return data;
    }
  });
};

export default useGetComments;
