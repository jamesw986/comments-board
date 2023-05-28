import AddComment from './AddComment';
import EditComment from './EditComment';
import CommentsTable from './CommentsTable';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useState } from 'react';
import ToggleEditModeContext from '../contexts/ToggleEditModeContext';

const Comments = () => {
  const [editComment, setEditComment] = useState(false);
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const toggleEditMode = (id?: string, username?: string, comment?: string) => {
    setEditComment(!editComment);
    if (id) setId(id);
    if (username) setUsername(username);
    if (comment) setComment(comment);
  };

  return (
    <Container maxWidth="sm">
      <Stack spacing={8} alignItems="center">
        <ToggleEditModeContext.Provider value={{ toggleEditMode }}>
          <CommentsTable />
          {editComment ? (
            <EditComment id={id} username={username} comment={comment} />
          ) : (
            <AddComment />
          )}
        </ToggleEditModeContext.Provider>
      </Stack>
    </Container>
  );
};

export default Comments;
