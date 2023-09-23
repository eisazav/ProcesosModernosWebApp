import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import { ClientForm } from '../sections/client';

export default function AddClientPage(props) {

  return (
    <>
      <Helmet>
        <title> Dashboard | EverGreen </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          {"Registrar Dispositivo"}
        </Typography>

        <ClientForm />
      </Container>
    </>
  );
}