import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
/* import LockOpenIcon from '@mui/icons-material/LockOpen';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BadgeIcon from '@mui/icons-material/Badge';
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; */
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { HeroSection, HeroContent } from '../../src/styles/Home.styled';
import { PricingCard } from '../../src/components/PricingCard';
import { GoogleReviewsCarousel } from '../../src/components/GoogleReviewsCarousel';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PilarSection from '../../src/components/PilarSection';


export default function Home() {
  // reusable feature list
  const features = (items) => (
    <List>
      {items.map((text) => (
        <ListItem key={text} disableGutters>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ color: '#000' }}>BeWorking</Typography>
            <Box>
              <Button sx={{ textTransform: 'none', color: 'text.secondary' }}>Planes</Button>
              <Button sx={{ textTransform: 'none', color: 'text.secondary' }}>BeSpaces</Button>
              <Button sx={{ textTransform: 'none', color: 'text.secondary' }}>Ayuda</Button>
              <Button sx={{ textTransform: 'none', color: 'text.secondary' }}>Login</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero */}
      <HeroSection>
        <HeroContent maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom>
            Oficina Virtual
          </Typography>
          <Typography variant="h3" gutterBottom>
            Transformamos tu Oficina Fisica en una Oficina Virtual
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#009624', '&:hover': { bgcolor: '#006014' } }} size="large">
            Contacta
          </Button>
        </HeroContent>
      </HeroSection>

      {/* Plans */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          {/* Section Title */}
          <Typography variant="h2" align="center" gutterBottom>
            Nuestros 5 Pilares
          </Typography>

          {/* Intro Text */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              textAlign: 'center',
              fontSize: '1.1rem',
              mb: 8, // increased from 4 to 6
              lineHeight: 1.4,
            }}
          >
            En BeWorking transformamos la tradicional Oficina Física en una&nbsp;
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Oficina Virtual
            </Box>
            <br />
            respaldada por nuestros&nbsp;
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              5 pilares
            </Box>
            .
          </Typography>

          {/* First row: 4 features */}
          <Grid container spacing={10} justifyContent="center" sx={{ mt: 8 }}>
            {[
              {
                icon: 'pilar1.png',
                label: [
                  <>
                    <Box component="span" sx={{ fontWeight: 'bold', color: '#ff9800' }}>Domiciliación</Box> para fines
                  </>,
                  'fiscales y sociales'
                ]
              },
              {
                icon: 'pilar2.png',
                label: [
                  <>
                    <Box component="span" sx={{ fontWeight: 'bold', color: '#ff9800' }}>Recepción</Box> de paquetes
                  </>,
                  'y correspondencia'
                ]
              },
              {
                icon: 'pilar3.png',
                label: [
                  'Acceso gratuito al',
                  <>
                    network de <Box component="span" sx={{ fontWeight: 'bold', color: '#ff9800' }}>BeSpaces</Box>
                  </>
                ]
              }
            ].map(({ icon, label }) => (
              <Grid item xs={6} sm={3} key={label[0]}>
                <Box>
                  <Image
                    src={`/${icon}`}
                    alt={label[0]}
                    width={120}
                    height={120}
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                  <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold', color: '#757575' }}>
                    {label[0]}<br />{label[1]}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Second row: 1 feature (pilar5) */}
          <Grid container spacing={10} justifyContent="center" sx={{ mt: 4 }}>
            {[
              {
                icon: 'pilar4.png',
                label: [
                  'Uso gratuito',
                  <>
                    de la <Box component="span" sx={{ fontWeight: 'bold', color: '#ff9800' }}>Super App</Box>
                  </>
                ]
              },
              {
                icon: 'pilar5.png',
                label: [
                  <>
                    <Box component="span" sx={{ fontWeight: 'bold', color: '#ff9800' }}>Eventos</Box> y Networking
                  </>,
                  'presenciales cada mes'
                ]
              }
            ].map(({ icon, label }) => (
              <Grid item xs={6} sm={4} key={label[0]}>
                <Box>
                  <Image
                    src={`/${icon}`}
                    alt={label[0]}
                    width={120}
                    height={120}
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                  <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold', color: '#757575' }}>
                    {label[0]}<br />{label[1]}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />



<Box sx={{ py: 8 }}>

  <PilarSection
    title="Domiciliación Fiscal y Social"
    image="/pilar1_new.png"
    description="Te ofrecemos una dirección legal y fiscal en una ubicación premium en Málaga."
    benefits={[
      'Cumple con los requisitos legales y fiscales',
      'Ubicación visible en Google Maps',
      'Ideal para autónomos y startups',
    ]}
  />

  <PilarSection
    title="Recepción de Paquetería y Correspondencia"
    image="/pilar2_new.png"
    description="Tu oficina siempre atendida: nosotros recibimos tu correo y paquetes."
    benefits={[
      'Notificación inmediata por email',
      'Escaneado opcional de cartas importantes',
      'Recogida en horario amplio',
    ]}
    reverse
  />

  <PilarSection
    title="Acceso al Network BeSpaces"
    image="/pilar3_new.png"
    description="Forma parte de una comunidad profesional activa y conectada."
    benefits={[
      'Accede a más de 50 espacios flexibles',
      'Conecta con emprendedores y freelancers',
      'Promociona tus servicios en la comunidad',
    ]}
  />

  <PilarSection
    title="Uso gratuito de la Super App"
    image="/pilar4_new.png"
    description="Herramientas de gestión empresarial incluidas en tu plan de oficina virtual."
    benefits={[
      'Gestión de documentos, clientes y facturas',
      'Soporte por chat y correo',
      'Acceso desde cualquier dispositivo',
    ]}
    reverse
  />

  <PilarSection
    title="Eventos y Networking Mensuales"
    image="/pilar5_new.png"
    description="Participa en encuentros, talleres y cafés de negocios."
    benefits={[
      'Eventos presenciales en Málaga',
      'Sesiones de formación y pitching',
      'Crecimiento colaborativo con otros miembros',
    ]}
  />
</Box>


      <Divider />

      {/* Pricing Banner */}
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#fff' }}>
        <Container maxWidth="md">
          <Typography 
            variant="h2" gutterBottom>
            Precios
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: 'text.primary',
              textAlign: 'center',
              fontSize: '1.1rem',
              mb: 8, // increased from 4 to 6
              lineHeight: 1.4,
            }}
          >
            <Box component="span" sx={{ fontWeight: 'bold' }}>Únete</Box> a BeWorking y transforma tu forma de hacer negocios. Da el salto al futuro e impulsa tu empresa. ¡Haz que tu éxito empiece hoy!
          </Typography>
          {/* Pricing Card injected here */}
          <PricingCard />
          {/* <Button variant="contained" sx={{ bgcolor: '#009624', '&:hover': { bgcolor: '#006014' } }} size="large">
            Reserva ahora
          </Button> */}
        </Container>
      </Box>

      <Divider />

      {/* Google Reviews Carousel */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Google Reviews
          </Typography>
          <GoogleReviewsCarousel />
        </Container>
      </Box>

      <Divider />

      {/* Location Map Placeholder */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Ubicación de BeSpaces
          </Typography>
          <Box
            sx={{
              height: 500,
              backgroundColor: '#ddd',
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 0,
            }}
          >
            <LoadScript googleMapsApiKey="AIzaSyD2wGD__sSA7AEkqMm-9pmKDITc6jivP6o">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '500px' }}
                center={{ lat: 40.4637, lng: -3.7492 }} // Spain central
                zoom={5}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                }}
              />
            </LoadScript>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 3, bgcolor: '#009624', '&:hover': { bgcolor: '#006014' } }}
            size="large"
          >
            Selecciona tu BeSpace
          </Button>
        </Container>
      </Box>

      <Divider />

      {/* Footer */}
      <Box component="footer" sx={{ py: 4, bgcolor: '#009624', color: '#fff' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6">BeWorking</Typography>
            <Typography variant="body2">© 2025 BeWorking.</Typography>
          </Box>
          <Box>
            <Link href="/about" color="inherit" sx={{ display: 'block' }}>
              About
            </Link>
            <Link href="/contact" color="inherit" sx={{ display: 'block' }}>
              Contact
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  )
}
