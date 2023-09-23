import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Checkbox, Grid, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { LoadingButton } from '@mui/lab';
import DevicesApi from '../../services/sensors';

export default function RegistrationForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const [isSuccess, setIsSuccess] = useState(false); // Add success state
    const [error, setError] = useState(null); // Add error state
    
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [model, setModel] = useState('');
    const [version, setVersion] = useState('');
    const [serial, setSerial] = useState('');

    useEffect(() => {
        let timeout;
    
        if (isSuccess) {
            timeout = setTimeout(() => {
                navigate(`/dashboard/dispositivos`);
            }, 3000);
        }
    
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [isSuccess]);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const formData = {
                name,
                location,
                type,
                model,
                version,
                serial
            };

            await DevicesApi.addDevice(formData)
            setIsLoading(false);
            setIsSuccess(true);
        } catch (error) {
            setIsLoading(false);
            setIsSuccess(false);
            setError(
                error.response?.data?.message ||
                'Fallo el registro, valide si posee algun error en los campos e intente nuevamente.'
            );
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <Box width="60%" sx={{ marginX: 'auto' }}>
                <Stack spacing={3}>
                    {isSuccess && (
                        <Alert severity="success">
                            <AlertTitle>
                                {"Registro efectuado con éxito"}
                            </AlertTitle>
                            {
                                "El Dispositivo se a registrado de forma exitosa, ahora podra genera facturas o cotizaciones al cliente"
                            }
                        </Alert>
                    )}

                    {!isSuccess && error && (
                        <Alert severity="error">
                            <AlertTitle>Registro fallido</AlertTitle>
                            {error}
                        </Alert>
                    )}

                    <TextField
                        name="name"
                        label="Nombre"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        name="location"
                        label="Ubicación"
                        fullWidth
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <TextField
                        name="type"
                        label="Tipo"
                        fullWidth
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />

                    <TextField
                        name="model"
                        label="Modelo"
                        fullWidth
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />

                    <TextField
                        name="version"
                        label="Versión"
                        fullWidth
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
                    />
                    <TextField
                        name="serial"
                        label="Serial"
                        fullWidth
                        value={serial}
                        onChange={(e) => setSerial(e.target.value)}
                    />
                </Stack>
                <Box width="40%" sx={{ marginX: 'auto' }}>
                    <LoadingButton
                        sx={{ my: 2 }}
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}
                        loading={isLoading}
                    >
                        {'Registrar dispositivo'}
                    </LoadingButton>
                </Box>
            </Box>
        </form>
    );
}