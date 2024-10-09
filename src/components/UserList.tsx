import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { User } from "../types";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box my={4}>
      <Typography variant="h5" align="center" my={5}>
        UserList
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell key={user.id}>{user.id}</TableCell>
                    <TableCell key={user.name}>{user.name}</TableCell>
                    <TableCell key={user.email}>{user.email}</TableCell>
                    <TableCell key={user.phone}>{user.phone}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default UserList;
