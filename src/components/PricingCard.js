import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import BusinessIcon from '@mui/icons-material/Business'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import GppGoodIcon from '@mui/icons-material/GppGood'
import GreenButton from './GreenButton'

export function PricingCard() {
  const theme = useTheme()

  const features = [
    { icon: AccountBalanceIcon, text: 'Domiciliación fiscal y legal' },
    { icon: MailOutlineIcon, text: 'Recepción de correo y paquetes' },
    { icon: LocationOnIcon, text: 'Registro en Google\u00A0Maps' },
    { icon: BusinessIcon, text: ' Tu Logo en la Recepción' },
    { icon: AccessTimeIcon, text: '5\u00A0Pases\u00A0gratuitos de Oficina en BeSpaces' },
    { icon: GppGoodIcon, text: 'Sin Depósitos ni Permanencia' },
    { icon: PhoneInTalkIcon, text: 'Atención de Llamadas y Visitas' },
  ]

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto' }}>
      <Card elevation={3} sx={{ position: 'relative', bgcolor: 'rgba(255, 255, 255, 0.6)' }}>
        {/* Ribbon */}
        <Box
          sx={{
            position: 'absolute',
            top: 32, // move further inside
            right: -39, // move further inside
            width: 190, // make thicker
            height: 36, // make thicker
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(45deg)',
            bgcolor: '#009624',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            zIndex: 1,
            boxShadow: 2,
            letterSpacing: 1,
            py: 0,
          }}
        >
          Precio Único
        </Box>
        <CardContent sx={{ textAlign: 'center', pt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Title & Price */}
          <Typography variant="h4" gutterBottom align="center">
            Oficina Virtual
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
            <Typography variant="h2" component="span" sx={{ fontWeight: 'bold' }}>
              €15
            </Typography>
            <Typography variant="subtitle1" component="span" sx={{ ml: 1 }}>
              / mes
            </Typography>
          </Box>

          {/* Feature List */}
          <List sx={{ width: '100%' }}>
            {features.map(({ icon: Icon, text }) => (
              <ListItem key={text} disableGutters sx={{ py: 0.5, alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '40px', color: theme.palette.success.main, display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 1 }}>
                  <Icon fontSize="medium" />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ variant: 'body1' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                />
              </ListItem>
            ))}
          </List>

          {/* Illustration */}
          {/* <Box
            component="img"
            src="/assets/office-illustration.png"
            alt="Oficina Virtual"
            sx={{ width: '100%', mt: 2, borderRadius: 1 }}
          /> */}

          {/* CTA Button */}
          <GreenButton />
        </CardContent>
      </Card>
    </Box>
  )
}
