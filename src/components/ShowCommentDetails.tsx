import Button from '@mui/material/Button';
import useGetComment from '../hooks/useGetComment';
import { Comment } from '../types/types';

interface ShowCommentDetailsProps {
  id: string;
}

const ShowCommentDetails = ({ id }: ShowCommentDetailsProps) => {
  const { data } = useGetComment(id);

  const viewComment = (comment: Comment) => {
    alert(`Comment: ${comment.comment}\n\nUser: ${comment.username}\n\nid: ${comment.id}`);
  };

  return (
    <Button size="small" onClick={() => viewComment(data!)}>
      View details
    </Button>
  );
};

export default ShowCommentDetails;
