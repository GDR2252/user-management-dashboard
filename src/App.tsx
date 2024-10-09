import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useUserService } from "./services/useService";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserFrom";

function App() {
  const { users, loading, error, addNewUser } = useUserService();
  console.log("users-->  ", users);

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" align="center">
          User Management Dashboard
        </Typography>

        {loading && (
          <Box my={2} sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="red" align="center">
            {error}
          </Typography>
        )}
        <Box mt={4} mb={6}>
          <AddUserForm addNewUser={addNewUser} />
        </Box>

        <UserList users={users} />
      </Box>
    </Container>
  );
}

export default App;
