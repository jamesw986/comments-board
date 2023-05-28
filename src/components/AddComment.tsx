import { FormEvent, useState } from 'react';
import usePostComments from '../hooks/usePostComment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const AddComment = () => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const mutation = usePostComments();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ username, comment, id: uuidv4() });

    setComment('');
    setUsername('');
  };

  return (
    <Stack spacing={1} sx={{ maxWidth: 400 }}>
      <Typography variant="h6">Add new comment</Typography>
      <TextField
        label="Username"
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Comment"
        variant="standard"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        disabled={mutation.isLoading}
        variant="outlined"
        size="small"
        sx={{ maxWidth: 150, alignSelf: 'flex-end' }}>
        Post Comment
      </Button>
    </Stack>
  );
};

export default AddComment;
