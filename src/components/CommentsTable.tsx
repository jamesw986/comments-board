import useGetComments from '../hooks/useGetComments';
import { Table } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ShowComments from './ShowComments';

const CommentsTable = () => {
  const { data, isLoading } = useGetComments();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Typography variant="h3" align="center">
        Comments
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#c55756' }}>
            <TableRow>
              <TableCell>
                <Typography variant="h6" sx={{ color: '#e9fcfd' }}>
                  Comment
                </Typography>
              </TableCell>
              <TableCell colSpan={4}>
                <Typography variant="h6" sx={{ color: '#e9fcfd' }}>
                  User
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <ShowComments comments={data!} />
        </Table>
      </TableContainer>
    </>
  );
};

export default CommentsTable;
