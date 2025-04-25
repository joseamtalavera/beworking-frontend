import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { MainSection, HeroContent } from '../../src/styles/indexStyles';
import { PricingCard } from '../../src/components/PricingCard';
import { GoogleReviewsCarousel } from '../../src/components/GoogleReviewsCarousel';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PilarSection from '../../src/components/PilarSection';
import GreenButton from '../../src/components/GreenButton';
import GallerySection from '../../src/components/GallerySection';

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
            <Typography variant="h4" sx={{ color: '#000' }}>BeWorking</Typography>
            <Box>
              <Button sx={{ textTransform: 'none', color: 'text.secondary', fontSize: '1.1rem' }}>Precio</Button>
              <Button sx={{ textTransform: 'none', color: 'text.secondary', fontSize: '1.1rem' }}>BeSpaces</Button>
              <Button sx={{ textTransform: 'none', color: 'text.secondary', fontSize: '1.1rem' }}>Ayuda</Button>
              <Button sx={{ textTransform: 'none', color: 'text.secondary', fontSize: '1.1rem' }}>Login</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main */}
      <MainSection>
        <HeroContent maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom>
            Oficina Virtual
          </Typography>
          <Typography variant="h3" gutterBottom>
            Transformamos tu Oficina Fisica en una Oficina Virtual
          </Typography>
          <Box sx={{ maxWidth: 480, width: '100%', mx: 'auto' }}>
            <GreenButton label="Contacta" />
          </Box>
        </HeroContent>
      </MainSection>

      {/* Pilares section */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h5" align="center" sx={{ mb: 3, fontWeight: 400, mt: 12, color: '#009624' }}>
          Nuestros Beneficos
        </Typography>
        <Typography variant="h2" align="center" sx={{ mb: 3, fontWeight: 400, mt: 3 }}>
          Nuestra Fórmula: 5 Pilares de BeWorking
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 16, maxWidth: 900, mx: 'auto', color: 'text.secondary' }}>
          Descubre nuestro modelo de Oficina Virtual el cual se apoya en 5 pilares fundamentales que te ofrecen mucho más que una simple dirección. 
          ¡Conócelos todos y lleva tu empresa al siguiente nivel!
        </Typography>

        <PilarSection
          title="Domiciliación Fiscal y Social"
          image="/pilar1final.png"
          description="Te ofrecemos una dirección legal y fiscal en multiples ubicaciones ."
          benefits={[
            'Cumple con los requisitos legales y fiscales. ',
            <>Ubicación visible en <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Google Maps</Box>. Mantén tu privacidad sin necesidad de usar tu dirección personal.</>,
          ]}
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Recepción de Paquetería y Correspondencia"
          image="/pilar2final.png"
          description="Tu correspondenia siempre atendida: nosotros recibimos tu correo y paquetes."
          benefits={[
            <>Tan pronto recibimos tu correo, te lo notificamos por email o <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>WhatsApp</Box>.</>,
            <>Escaneado gratuito de cartas y archivo en la <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>SuperApp</Box>.</>,
            'Recogida de paquetes en horario amplio.',
          ]}
          reverse
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Acceso al Network de BeSpaces"
          image="/pilar3final.png"
          description="Usa de forma gratuita nuestra red de espacios de trabajo."
          benefits={[
            <>No solo te ofrecemos el servio virtual, si no también la <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Oficina Física</Box> y <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Sala de Reuniones</Box> cuando las necesites.</>,
            'Con el benefico de que todos estos espacios pertencen a BeWorking.',
            'Aprovecha y conecta con emprendedores y freelancers.',
          ]}
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Uso gratuito de la SuperApp"
          image="/pilar4final.png"
          description=" Todas la herramientas de gestión empresarial incluidas en tu plan de Oficina Virtual."
          benefits={[
            <>Contactos, <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>MailBox</Box> donde archivamos todo tu correspondenicia, Contabilidad, Chat para conectar con otros Beworkers.</>,
            <>Además dispones de un motor  <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Reservas Gratuitas</Box> para hacer uso de nuestros espacios.</>,
            <>Y con la posibilidad de crear modulos personalizados y usar toda la <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Red de Partners</Box> de servicios de BeWorking.</>,
            'Acceso disponible desde cualquier dispositivo.',
          ]}
          reverse
        />

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Eventos y Networking Mensuales"
          image="/pilar5final.png"
          description="Participa en encuentros, talleres y cafés de negocios."
          benefits={[
            <>Cada mes, los gestores de los BeSpaces organizarán <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Eventos Presenciales</Box>.</>,
            'De esta forma podrás conocer a otros Beworkers y crear sinergias.',
            <>Forma parte de una <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Comunidad</Box> activa y en crecimiento.</>,
          ]}
        />
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <GreenButton label="Contacta" />
        </Box>
      </Box>

      {/* <Divider sx={{ my: 8 }} /> */}

      {/* Pricing Banner */}
      <Box
        sx={{
          py: 12,
          textAlign: 'center',
          bgcolor: '#fff',
          backgroundImage: 'url(/BeWorking.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 152, 0, 0.5)', // Orange color filter
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ mb: 3, fontWeight: 400, mt: 3, color: 'white' }}
            >
            Precios
          </Typography>
          <Typography 
            variant="h5"
            align="center"
            sx={{ mb: 16, maxWidth: 900, mx: 'auto', color: 'white' }}
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

      {/* <Divider sx={{ my: 8 }} /> */}

      {/* Gallery Section */}
      <GallerySection />

      {/* <Divider sx={{ my: 8 }} /> */}

      {/* Google Reviews Carousel */}
      <Box sx={{ py: 12 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 3, fontWeight: 400, mt: 3 }}>
            Google Reviews
          </Typography>
          <GoogleReviewsCarousel />
        </Container>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* Location Map Placeholder */}
      <Box sx={{ py: 12, textAlign: 'center' }}>
        <Container>
          <Typography variant="h2" gutterBottom sx={{ mb: 3, fontWeight: 400, mt: 3 }}>
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