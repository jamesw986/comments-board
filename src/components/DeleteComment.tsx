import Button from '@mui/material/Button';
import useDeleteComment from '../hooks/useDeleteComment';

interface DeleteCommentProps {
  id: string;
}

const DeleteComment = ({ id }: DeleteCommentProps) => {
  const mutation = useDeleteComment(id);

  const deleteComment = () => {
    mutation.mutate();
  };

  return (
    <Button size="small" onClick={deleteComment}>
      Delete
    </Button>
  );
};

export default DeleteComment;
