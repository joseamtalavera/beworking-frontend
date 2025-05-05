import React, { useState } from 'react';
import { Box, Typography, IconButton, Dialog, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GreenButton from './GreenButton';

const images = [
  '/_MG_1510.jpg',
  '/_MG_1521.jpg',
  '/_MG_1541.jpg',
  '/DSC_2247 (Mediano).jpg',
  '/DSC_2260 (Mediano).jpg',
  '/DSC_2281 (Mediano).jpg',
  '/DSC_2281.jpg',
  '/DSC_2298.jpg',
  '/DSC_2312 (Mediano).jpg',
  '/DSC_2660.jpg',
  '/DSC_2665.jpg',
  '/DSC_2673.jpg',
  '/DSC_2677.jpg',
  '/DSC_2684.jpg',
  '/DSC_2689.jpg',
  '/DSC_2691.jpg',
  '/DSC_2697.jpg'
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(null); // Start as null
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const visibleImages = [
    ...images.slice(currentIndex, currentIndex + 4),
    ...images.slice(0, Math.max(0, currentIndex + 4 - images.length)),
  ];

  return (
    <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#f9f9f9' }}>
      <Typography variant="h2" align="center" sx={{ mb: 3, fontWeight: 400, mt: 3 }}>
        Galería de Imágenes
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 6, maxWidth: 900, mx: 'auto', color: 'text.secondary' }}>
        Explora nuestra galería para descubrir más sobre nuestos BeSpaces y servicios.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', py: 4 }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 16, zIndex: 2, color: '#009624', fontSize: '2rem' }}>
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>

        <Box
          sx={{ display: 'flex', gap: 2, transition: 'transform 0.3s ease-in-out', justifyContent: 'center', alignItems: 'center' }}
        >
          {visibleImages.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Gallery image ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: '20%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 2,
                flexShrink: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>

        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 16, zIndex: 2, color: '#009624', fontSize: '2rem' }}>
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </Box>

      <Box sx={{ mt: 4 }}>
        <GreenButton label="Ver todas las imágenes" onClick={handleOpen} />
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
          <Box sx={{ p: 4, position: 'relative' }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 16, right: 16, color: 'grey.500' }}
            >
              ✕
            </IconButton>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
              {images.map((src, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    sx={{
                      width: '100%',
                      height: 160,
                      objectFit: 'cover',
                      borderRadius: 1,
                      boxShadow: 1,
                      display: 'block',
                      mx: 'auto',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Dialog>
      </Box>

      {currentIndex !== null && (
        <Box sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'rgba(0,0,0,0.85)',
          zIndex: 1401,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <IconButton
            onClick={() => setCurrentIndex(null)}
            sx={{ position: 'absolute', top: 24, right: 24, color: 'white', zIndex: 2 }}
          >
            ✕
          </IconButton>
          <Box
            component="img"
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            sx={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: 2,
              boxShadow: 4,
              mb: 2,
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <IconButton onClick={handlePrev} sx={{ color: '#009624', fontSize: '2rem' }}>
              <ArrowBackIosIcon fontSize="inherit" />
            </IconButton>
            <IconButton onClick={handleNext} sx={{ color: '#009624', fontSize: '2rem' }}>
              <ArrowForwardIosIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
}