import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

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
    }
  ];
  const [start, setStart] = useState(0);
  const intervalRef = useRef();
  const total = reviews.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStart((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [total]);

  // Duplicate reviews for seamless looping
  const displayReviews = [...reviews, ...reviews.slice(0, 4)];

  // Calculate translateX for seamless loop
  const cardWidth = 300; // width + margin
  const visibleCount = 4;
  const maxIndex = total;

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
          <Card key={idx} variant="outlined" sx={{ width: 280, minHeight: 180, mx: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'box-shadow 0.3s', boxShadow: idx === ((start + 1) % total) ? 6 : 1 }}>
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
