import React from 'react';
import {
  Typography,
  Box,
  Container,
  Divider,
} from '@mui/material';
import { 
  MainSection, 
  StartContent, 
  SectionBox, 
  PricingBanner, 
} from '../src/styles/indexStyles';
import { PricingCard } from '../src/components/home/PricingCard';
import { GoogleReviewsCarousel } from '../src/components/home/GoogleReviewsCarousel';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PilarSection from '../src/components/home/PilarSection';
import GreenButton from '../src/components/home/GreenButton';
import GallerySection from '../src/components/home/GallerySection';
import Image from 'next/image';
import ModernContactSection from '../src/components/home/ModernContactSection';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Layout from '../src/components/Layout';

export default function Home() {

  // Orange pointer icon for map markers
  const orangePin = {
    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
    fillColor: '#FFA500',
    fillOpacity: 1,
    strokeColor: '#FFFFFF',
    strokeWeight: 2,
    scale: 1.5,
    anchor: { x: 12, y: 24 },
  };

  return (
    <Layout>
      {/* Main */}
      <MainSection sx={{ pt: { xs: 4, sm: 4 }, mt: -6 }}>
        <StartContent maxWidth="md" sx={{ pt: { xs:8, sm:10, md:10,  } }}>
          <Typography variant="h1" component="h1" gutterBottom>
          Tu Oficina Virtual por 15 €/mes
          </Typography>
          <Typography variant="h3" gutterBottom>
            Dirección para tu Empresa, Recogida de Paquetería y acceso a Espacios de Trabajo.
          </Typography>
          <Box sx={{ maxWidth: 480, width: '100%', mx: 'auto' }}>
            <GreenButton label="Solicita tu oficina virtual" />
          </Box>
        </StartContent>
      </MainSection>

      {/* Pilares section */}
      <SectionBox>
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
          image="/pilar1.2final.png"
          description="Te ofrecemos una dirección legal y fiscal en multiples ubicaciones ."
          benefits={[
            'Cumple con los requisitos legales y fiscales. ',
            <>Ubicación visible en <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Google Maps</Box>. Mantén tu privacidad sin necesidad de usar tu dirección personal.</>,
          ]}
        />

        <Box sx={{ bgcolor: '#f9f9f9' }}>
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
        </Box>

        <Box sx={{ height: { xs: 120, md: 200 } }} />

        <PilarSection
          title="Accede a nuestra red de espacios físicos BeSpaces"
          image="/pilar3final.png"
          description="Usa de forma gratuita nuestra red de espacios de trabajo."
          benefits={[
            <>No solo te ofrecemos el servio virtual, si no también la <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Oficina Física</Box> y <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Sala de Reuniones</Box> cuando las necesites.</>,
            'Con el benefico de que todos estos espacios pertencen a BeWorking.',
            'Aprovecha y conecta con emprendedores y freelancers.',
          ]}
        />

        <Box sx={{ bgcolor: '#f9f9f9' }}>
          <Box sx={{ height: { xs: 120, md: 200 } }} />
          <PilarSection
            title="Uso gratuito de la SuperApp"
            image="/pilar4.1final.png"
            description=" Todas la herramientas de gestión empresarial incluidas en tu plan de Oficina Virtual."
            benefits={[
              <>Contactos, <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>MailBox</Box> donde archivamos todo tu correspondenicia, Contabilidad, Chat para conectar con otros Beworkers.</>,
              <>Además dispones de un motor  <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Reservas Gratuitas</Box> para hacer uso de nuestros espacios.</>,
              <>Y con la posibilidad de crear modulos personalizados y usar toda la <Box component="span" sx={{ fontWeight: 'bold', color: 'black' }}>Red de Partners</Box> de servicios de BeWorking.</>,
              'Acceso disponible desde cualquier dispositivo.',
            ]}
            reverse
          />
        </Box>

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
          <GreenButton label="Solicita tu oficina virtual" />
        </Box>
      </SectionBox>

      {/* Pricing Banner */}
      <PricingBanner>
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
        </Container>
      </PricingBanner>

      {/* Gallery Section */}
      <GallerySection />

      {/* Google Reviews Carousel */}
      <Box sx={{ py: 12 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 3, fontWeight: 400, mt: 3 }}>
            Google Reviews
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 6, maxWidth: 900, mx: 'auto', color: 'text.secondary' }}>
            Descubre lo que opinan nuestros clientes y cómo BeWorking ha impulsado sus negocios. ¡Tu experiencia puede ser la próxima historia de éxito!
          </Typography>
          <GoogleReviewsCarousel />
        </Container>
      </Box>

      <Divider sx={{ my: 4, borderColor: 'rgba(87, 84, 84, 0.3)', opacity: 1, borderBottomWidth: '0.5px' }} />

      {/* Location Map Placeholder */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h2" gutterBottom sx={{ mb: 3, fontWeight: 400, mt: 1 }}>
            Ubicación de BeSpaces
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 6, maxWidth: 900, mx: 'auto', color: 'text.secondary' }}>
            Encuentra tu BeSpace en las mejores ubicaciones de España. Consulta el mapa para ver dónde puedes disfrutar de todos nuestros servicios y formar parte de la comunidad BeWorking.
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
              >
                <Marker position={{ lat: 36.7213, lng: -4.4214 }} icon={orangePin} /> {/* Malaga */}
                <Marker position={{ lat: 37.3886, lng: -5.9823 }} icon={orangePin} /> {/* Sevilla */}
                <Marker position={{ lat: 39.4699, lng: -0.3763 }} icon={orangePin} /> {/* Valencia */}
                <Marker position={{ lat: 41.6488, lng: -0.8891 }} icon={orangePin} /> {/* Zaragoza */}
                <Marker position={{ lat: 43.2630, lng: -2.9350 }} icon={orangePin} /> {/* Bilbao */}
                <Marker position={{ lat: 42.2406, lng: -8.7207 }} icon={orangePin} /> {/* Vigo */}
                <Marker position={{ lat: 39.5696, lng: 2.6502 }} icon={orangePin} /> {/* Palma de Mallorca */}
                <Marker position={{ lat: 28.1235, lng: -15.4363 }} icon={orangePin} /> {/* Las Palmas de Gran Canaria */}
                <Marker position={{ lat: 41.3851, lng: 2.1734 }} icon={orangePin} /> {/* Barcelona */}
                <Marker position={{ lat: 40.4168, lng: -3.7038 }} icon={orangePin} /> {/* Madrid */}
              </GoogleMap>
            </LoadScript>
          </Box>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
          <GreenButton label="Selecciona tu BeSpace" />
        </Box>
        </Container>
      </Box>

      <Divider sx={{ my: 4, borderColor: 'rgba(87, 84, 84, 0.3))', opacity: 1, borderBottomWidth: '0.5px' }} />

      {/* Interviews Section */}
      <Box sx={{ py: 4, textAlign: 'center', bgcolor: '#fff' }}>
        <Container>
          <Typography variant="h2" align="center" sx={{ mb: 3, fontWeight: 400, mt: 3 }}>
            Entrevistas a nuestros Coworkers
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 6, maxWidth: 900, mx: 'auto', color: 'text.secondary' }}>
            Descubre las historias y experiencias de los profesionales que forman parte de la comunidad BeWorking.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            {/* Example interview cards, replace with real data/images as needed */}
            <Box sx={{ width: 280, textAlign: 'center', bgcolor: '#fafafa', borderRadius: 3, boxShadow: 2, p: 3 }}>
              <Image src="/avatars/marta.jpg" alt="Marta" width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>Marta García</Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, color: '#FFA500' }}>Marketing Digital</Typography>
              <Typography variant="body2" color="text.secondary">
                &quot;BeWorking me ha permitido crecer profesionalmente y conectar con otros emprendedores. La flexibilidad y el ambiente son únicos.&quot;
              </Typography>
            </Box>
            <Box sx={{ width: 280, textAlign: 'center', bgcolor: '#fafafa', borderRadius: 3, boxShadow: 2, p: 3 }}>
              <Image src="/avatars/luis.jpg" alt="Luis" width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>Luis Martínez</Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, color: '#FFA500' }}>Desarrollador Web</Typography>
              <Typography variant="body2" color="text.secondary">
                La comunidad de BeWorking es muy activa y siempre hay oportunidades para colaborar. Recomiendo este espacio a todos los freelancers.
              </Typography>
            </Box>
            <Box sx={{ width: 280, textAlign: 'center', bgcolor: '#fafafa', borderRadius: 3, boxShadow: 2, p: 3 }}>
              <Image src="/avatars/carmen.jpg" alt="Carmen" width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>Carmen Pérez</Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, color: '#FFA500' }}>Administración</Typography>
              <Typography variant="body2" color="text.secondary">
                Gracias a BeWorking he encontrado el equilibrio entre mi vida personal y profesional. El soporte del equipo es excelente.
              </Typography>
            </Box>
            <Box sx={{ width: 280, textAlign: 'center', bgcolor: '#fafafa', borderRadius: 3, boxShadow: 2, p: 3 }}>
              <Image src="/avatars/javier.jpg" alt="Javier" width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>Javier Ruiz</Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, color: '#FFA500' }}>Ventas</Typography>
              <Typography variant="body2" color="text.secondary">
                El networking y los eventos mensuales me han ayudado a ampliar mi red de contactos y a conseguir nuevos clientes.
              </Typography>
            </Box>
            {/* Add more interview cards as needed */}
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ py: 4, textAlign: 'center', bgcolor: '#f9f9f9' }}>
        <ModernContactSection />
      </Box>

      {/* Floating WhatsApp Button */}
      <Box
        component="a"
        href="https://wa.me/34666666666" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 64,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'none',
          bgcolor: 'transparent',
          borderRadius: 0,
          transition: 'box-shadow 0.2s',
          '&:hover': {
            boxShadow: 'none',
            bgcolor: 'transparent',
          },
        }}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon sx={{ color: '#25D366', fontSize: 70 }} />
      </Box>
    </Layout>
  )
}