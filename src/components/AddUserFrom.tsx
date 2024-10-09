import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { User } from "../types";

interface addNewUserProps {
  addNewUser: (newUser: Omit<User, "id">) => void;
}

const AddUserFrom = ({ addNewUser }: addNewUserProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const newUser = { name, email, phone };
    addNewUser(newUser);

    setName("");
    setEmail("");
    setPhone("");
    setLoading(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      mb={4}
      mx="auto"
      maxWidth="md"
    >
      <Typography variant="h5" align="center" my={2}>
        Add New User
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? "Adding User.." : "Add User"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddUserFrom;
