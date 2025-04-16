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
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

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
            <Typography variant="h6">BeWorking</Typography>
            <Box>
              <Button>Planes</Button>
              <Button>Puntos</Button>
              <Button>On Demand</Button>
              <Button>Login</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero */}
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#f5f5f5' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Oficina Virtual Málaga
          </Typography>
          <Typography variant="h5" gutterBottom>
            La solución profesional para tu presencia without office
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Contrata
          </Button>
        </Container>
      </Box>

      {/* Plans */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Nuestros 5 Planes
          </Typography>
          <Grid container spacing={4}>
            {['Address', 'Box', 'On Demand', 'App', 'Comunidad'].map((plan) => (
              <Grid item xs={12} sm={6} md={4} key={plan}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6">{plan}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Descripción breve del plan {plan.toLowerCase()}.
                    </Typography>
                    <Box textAlign="center" mt={2}>
                      <Button size="small">Ver más</Button>
                    </Box>
                  </CardContent>
                </Card>
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
          <Button variant="contained" color="secondary" size="large">
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
