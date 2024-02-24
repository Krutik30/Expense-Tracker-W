// import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// import { MotionContainer, varBounce } from '../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
}));



// ----------------------------------------------------------------------

export const Page404 = () => {

    return (
        <RootStyle>
            <Container
            >
                <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                    <Typography variant="h3" paragraph>
                        Sorry, page not found!
                    </Typography>
                    <Button to="/" size="large" variant="contained" component={RouterLink}>
                        Go to Home
                    </Button>
                </Box>
            </Container>
        </RootStyle>
    );
}
