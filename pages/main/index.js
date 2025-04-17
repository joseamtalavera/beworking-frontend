import * as React from 'react'
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
} from '@mui/material'
import Image from 'next/image'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { HeroSection, HeroContent } from '../../src/styles/Home.styled';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BadgeIcon from '@mui/icons-material/Badge';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

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
          <Button variant="contained" color="success" size="large">
            Contrata
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
              mb: 4,
              lineHeight: 1.4,
            }}
          >
            En BeWorking transformamos la tradicional Oficina Física en una&nbsp;
            <Box component="span" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
              Oficina Virtual
            </Box>
            <br />
            respaldada por nuestros&nbsp;
            <Box component="span" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
              5 pilares
            </Box>
            .
          </Typography>

          {/* First row: 4 features */}
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            {[
              {
                icon: <MailOutlineIcon sx={{ fontSize: 48, color: 'primary.main' }} />, 
                label: 'Recepción correspondencia y paquetes'
              },
              {
                icon: <BusinessIcon sx={{ fontSize: 48, color: 'primary.main' }} />, 
                label: 'Registro de tu negocio en Google Maps'
              },
              {
                icon: <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main' }} />, 
                label: 'Domiciliación para fines fiscales y sociales'
              },
              {
                icon: <LockOpenIcon sx={{ fontSize: 48, color: 'primary.main' }} />, 
                label: 'Sin depósitos ni permanencia'
              }
            ].map(({ icon, label }) => (
              <Grid item xs={6} sm={3} key={label}>
                <Box>
                  {icon}
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Second row: 3 features */}
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            {[
              {
                icon: <MeetingRoomIcon sx={{ fontSize: 48, color: 'primary.main' }} />, 
                label: 'Uso de oficina y salas cada mes'
              },
              {
                icon: <BadgeIcon sx={{ fontSize: 48, color: 'primary.main' }} />, 
                label: 'Logo de tu empresa en Recepción'
              },
              {
                icon: <SupportAgentIcon sx={{ fontSize: 48, color: 'primary.main' }} />, 
                label: 'Atención de visitas personalizadas'
              }
            ].map(({ icon, label }) => (
              <Grid item xs={6} sm={4} key={label}>
                <Box>
                  {icon}
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Feature Sections */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Section
            title="On Demand (Puntos)"
            image="/assets/ondemand.jpg"
            features={[
              'Punto 1 explicado',
              'Punto 2 destacado',
              'Punto 3 disponible',
            ]}
            reverse={false}
          />

          <Divider sx={{ my: 6 }} />

          <Section
            title="Super App"
            image="/assets/superapp.jpg"
            features={[
              'Funcionalidad A',
              'Funcionalidad B',
              'Funcionalidad C',
            ]}
            reverse={true}
          />

          <Divider sx={{ my: 6 }} />

          <Section
            title="Comunidad"
            image="/assets/comunidad.jpg"
            features={[
              'Acceso a eventos',
              'Networking global',
              'Beneficios exclusivos',
            ]}
            reverse={false}
          />
        </Container>
      </Box>

      <Divider />

      {/* Pricing Banner */}
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#e0f7fa' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Precios
          </Typography>
          <Typography variant="body1" gutterBottom>
            Elige el plan que mejor se adapte a ti y comienza hoy mismo.
          </Typography>
          <Button variant="contained" color="success" size="large">
            Reserva ahora
          </Button>
        </Container>
      </Box>

      <Divider />

      {/* Google Reviews Carousel Placeholder */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Google Reviews
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card variant="outlined" sx={{ height: 200 }}>
                  <CardContent>
                    <Typography>⭐️⭐️⭐️⭐️⭐️</Typography>
                    <Typography variant="body2">“Testimonio de cliente {i}.”</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Location Map Placeholder */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Ubicación en España
          </Typography>
          <Box
            sx={{
              height: 300,
              backgroundColor: '#ddd',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Replace with actual Map component */}
            <Typography variant="subtitle1">[Aquí irá el mapa]</Typography>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* Footer */}
      <Box component="footer" sx={{ py: 4, bgcolor: '#333', color: '#fff' }}>
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

/**
 * A reusable left/right feature section.
 * If `reverse` is true, image goes left and text right flips.
 */
function Section({ title, image, features, reverse }) {
  return (
    <Grid
      container
      spacing={4}
      direction={reverse ? 'row-reverse' : 'row'}
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', borderRadius: 2 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <List disablePadding>
          {features.map((text) => (
            <ListItem key={text} disableGutters>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}
