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
      {/* <Box sx={{ py: 12, textAlign: 'center' }}>
        <Container maxWidth="md"> */}
          {/* Section Title */}
          {/* <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 400 }}>
            Nuestros 5 Pilares
          </Typography> */}

          {/* Intro Text */}
          {/* <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              textAlign: 'center',
              //fontSize: '1.1rem',
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
          </Typography> */}

          {/* First row: 4 features */}
         {/*  <Grid container spacing={10} justifyContent="center" sx={{ mt: 8 }}>
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
          </Grid> */}

          {/* Second row: 1 feature (pilar5) */}
          {/* <Grid container spacing={10} justifyContent="center" sx={{ mt: 4 }}>
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

      <Divider sx={{ my: 8 }} /> */}

      <Box sx={{ py: 6 }}>
      <Typography variant="h5" align="center" sx={{ mb: 3, fontWeight: 400, mt: 12, color: '#009624' }}>
          Nuestros Beneficos
        </Typography>
        <Typography variant="h2" align="center" sx={{ mb: 3, fontWeight: 400, mt: 3 }}>
          Nuestra Fórmula: 5 Pilares de BeWorking
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 16, maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
          Nuestra modelo de Oficina Virtual se apoya en 5 pilares fundamentales que te ofrecen mucho más que una simple dirección. Descubre cómo cada uno de ellos impulsa tu negocio.¡Conócelos todos y lleva tu empresa al siguiente nivel!
        </Typography>

        <PilarSection
          title="Domiciliación Fiscal y Social"
          image="/pilar1final.png"
          description="Te ofrecemos una dirección legal y fiscal en multiples ubicaciones ."
          benefits={[
            'Cumple con los requisitos legales y fiscales. ',
            'Ubicación visible en Google Maps. ',
            'Manten tu privacidad sin necesidad de usar tu dirección personal.',
          ]}
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Recepción de Paquetería y Correspondencia"
          image="/pilar2final.png"
          description="Tu correspondenia siempre atendida: nosotros recibimos tu correo y paquetes."
          benefits={[
            'Tan pronto recibimos tu correo, te lo notificacmos por email o WhatsApp.',
            'Escaneado gratuito de cartas y archivo en la Super App.',
            'Recogida de paquetes en horario amplio.',
          ]}
          reverse
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Acceso al Network de BeSpaces"
          image="/pilar3final.png"
          description="Usa de forma gratuita nuestra red de espacios."
          benefits={[
            'No solo te ofrecemos el servio virtual, si no también el espacio físico cuando lo necesites.',
            'Con el benefico de que todos estos espacios pertencen a BeWorking.',
            'Acceso a espacios de trabajo, salas de reuniones y eventos.',
            'Aprovecha y conecta con emprendedores y freelancers',
          ]}
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Uso gratuito de la Super App"
          image="/pilar4final.png"
          description=" Todas la herramientas de gestión empresarial incluidas en tu plan de Oficina Virtual."
          benefits={[
            'Contactos, Mailbox donde archivamos todo tu correspondenicia, Contabilidad, Chat para conectar con otros Beworkers, ',
            'y un motor para hacer reservas gratuitas en nuestros espacios.',
            'Además tendrás acceso a modulos personalizados y a toda la red de Partners de servicios de BeWorking.',
            'Acceso desde cualquier dispositivo',
          ]}
          reverse
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Eventos y Networking Mensuales"
          image="/pilar5final.png"
          description="Participa en encuentros, talleres y cafés de negocios."
          benefits={[
            'Cada mes, los gestores de los BeSpaces organizarán eventos presenciales. ',
            'De esta forma podrás conocer a otros Beworkers y crear sinergias.',
            'Forma parte de una comunidad activa y en crecimiento.',
          ]}
        />
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* Pricing Banner */}
      <Box sx={{ py: 12, textAlign: 'center', bgcolor: '#fff' }}>
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

      <Divider sx={{ my: 8 }} />

      {/* Google Reviews Carousel */}
      <Box sx={{ py: 12 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Google Reviews
          </Typography>
          <GoogleReviewsCarousel />
        </Container>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* Location Map Placeholder */}
      <Box sx={{ py: 12, textAlign: 'center' }}>
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

      <Divider sx={{ my: 8 }} />

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
