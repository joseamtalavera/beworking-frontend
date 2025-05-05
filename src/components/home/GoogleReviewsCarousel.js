import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

export function GoogleReviewsCarousel() {
  const reviews = [
    {
      rating: 5,
      text: 'Excelente servicio y atención. Muy recomendable.',
      author: 'Ana G.'
    },
    {
      rating: 5,
      text: 'El mejor coworking para mi empresa. ¡Gracias BeWorking!',
      author: 'Luis M.'
    },
    {
      rating: 5,
      text: 'Oficina virtual muy profesional y flexible.',
      author: 'Carmen P.'
    },
    {
      rating: 5,
      text: 'Atención personalizada y rápida. Todo perfecto.',
      author: 'Javier R.'
    },
    {
      rating: 5,
      text: 'Ambiente agradable y espacios modernos.',
      author: 'Marta S.'
    },
    {
      rating: 5,
      text: 'Muy buena ubicación y servicios.',
      author: 'Pedro L.'
    },
    {
      rating: 5,
      text: 'Espacios limpios y bien equipados. Volveré seguro.',
      author: 'Sofía T.'
    },
    {
      rating: 5,
      text: 'El equipo siempre dispuesto a ayudar. Excelente experiencia.',
      author: 'Raúl V.'
    },
    {
      rating: 5,
      text: 'Flexibilidad total para mi negocio. Muy recomendable.',
      author: 'Lucía F.'
    },
    {
      rating: 5,
      text: 'Ambiente profesional y tranquilo para trabajar.',
      author: 'Diego C.'
    },
    {
      rating: 5,
      text: 'Me encanta la comunidad y las actividades que organizan.',
      author: 'Patricia H.'
    },
    {
      rating: 5,
      text: 'Precios competitivos y servicios de calidad.',
      author: 'Fernando B.'
    },
    {
      rating: 5,
      text: 'Perfecto para reuniones y eventos empresariales.',
      author: 'Isabel Q.'
    },
    {
      rating: 5,
      text: 'Siempre encuentro lo que necesito para mi día a día.',
      author: 'Miguel D.'
    },
    {
      rating: 5,
      text: 'La mejor opción para emprendedores en la ciudad.',
      author: 'Sara E.'
    }
  ];
  const [start, setStart] = useState(0);
  const intervalRef = useRef();
  const total = reviews.length;
  const visibleCount = 5;
  const cardWidth = 300; // width + margin

  // Duplicate first 'visibleCount' reviews for seamless looping
  const displayReviews = [...reviews, ...reviews.slice(0, visibleCount)];
  const maxIndex = reviews.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStart((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  // When the animation reaches the end, reset instantly to 0 (no gap)
  useEffect(() => {
    if (start === maxIndex) {
      const timeout = setTimeout(() => {
        setStart(0);
      }, 700); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [start, maxIndex]);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 0,
      mt: 4,
      overflow: 'hidden',
      position: 'relative',
      width: cardWidth * visibleCount,
      maxWidth: '100%',
    }}>
      <Box
        sx={{
          display: 'flex',
          transition: start === maxIndex ? 'none' : 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
          transform: `translateX(-${start * cardWidth}px)`,
        }}
      >
        {displayReviews.map((review, idx) => (
          <Card
            key={idx}
            variant="outlined"
            sx={{
              width: 280,
              minHeight: 180,
              mx: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
              <Image src="/google.png" alt="Google logo" width={28} height={28} />
            </Box>
            <CardContent>
              <Typography>⭐️⭐️⭐️⭐️⭐️</Typography>
              <Typography variant="body2" sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
                “{review.text}”
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {review.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
