import { FormEvent, useContext, useState } from 'react';
import usePatchComment from '../hooks/usePatchComment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ToggleEditModeContext from '../contexts/ToggleEditModeContext';

interface EditCommentProps {
  id: string;
  username: string;
  comment: string;
}

const EditComment = ({ id, username, comment }: EditCommentProps) => {
  const { toggleEditMode } = useContext(ToggleEditModeContext);

  const [newComment, setNewComment] = useState(comment);

  const mutation = usePatchComment(id);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ username, newComment, id: uuidv4() });
    toggleEditMode();
  };

  return (
    <Stack spacing={1} sx={{ maxWidth: 400 }}>
      <Typography variant="h6">Edit comment</Typography>
      <TextField disabled label="Username" variant="standard" value={username} />
      <TextField
        label="Comment"
        variant="standard"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        disabled={mutation.isLoading}
        variant="outlined"
        size="small"
        sx={{ maxWidth: 150, alignSelf: 'flex-end' }}>
        Edit Comment
      </Button>
    </Stack>
  );
};

export default EditComment;
