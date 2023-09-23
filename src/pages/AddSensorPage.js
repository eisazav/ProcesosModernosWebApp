import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { SensorForm } from '../sections/sensor';

export default function AddSensorPage(props) {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title> Dashboard | EverGreen </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          {"Registrar Sensor"}
        </Typography>

        <SensorForm id={id} />
      </Container>
    </>
  );
}