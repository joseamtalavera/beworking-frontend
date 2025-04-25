import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
              sx={{
                width: '20%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 2,
                flexShrink: 0,
              }}
            />
          ))}
        </Box>

        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 16, zIndex: 2, color: '#009624', fontSize: '2rem' }}>
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </Box>

      <Box sx={{ mt: 4 }}>
        <GreenButton label="Ver todas las imágenes" />
      </Box>
    </Box>
  );
}