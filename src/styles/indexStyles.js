import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const MainSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: 'center',
  backgroundImage: 'url(/main.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.45)',
    zIndex: 1,
  },
}));

export const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const PlansSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export const FeaturesSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export const PricingBanner = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: 'center',
  backgroundColor: '#e0f7fa',
}));

export const ReviewsSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export const MapSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: 'center',
}));

export const MapPlaceholder = styled(Box)(({ theme }) => ({
  height: 300,
  backgroundColor: '#ddd',
  borderRadius: theme.shape.borderRadius * 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Footer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: '#333',
  color: '#fff',
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
