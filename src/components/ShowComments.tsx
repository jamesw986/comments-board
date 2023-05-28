import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import ToggleEditModeContext from '../contexts/ToggleEditModeContext';
import { Comment } from '../types/types';
import ShowCommentDetails from './ShowCommentDetails';
import DeleteComment from './DeleteComment';

interface ShowCommentsProps {
  comments: Comment[];
}

const ShowComments = ({ comments }: ShowCommentsProps) => {
  const { toggleEditMode } = useContext(ToggleEditModeContext);

  if (comments.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align="center" colSpan={4}>
            Nothing to show
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {comments.map((comment) => {
        return (
          <TableRow key={comment.id}>
            <TableCell>{comment.comment}</TableCell>
            <TableCell>{comment.username}</TableCell>
            <TableCell>
              <Button onClick={() => toggleEditMode(comment.id, comment.username, comment.comment)}>
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <DeleteComment id={comment.id} />
            </TableCell>
            <TableCell>
              <ShowCommentDetails id={comment.id} />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default ShowComments;
