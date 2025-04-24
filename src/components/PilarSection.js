import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

/**
 * PilarSection: left side image, right side title, description, and benefits.
 * Responsive: halves on desktop, stacked on mobile.
 */
export default function PilarSection({ title, image, description, benefits = [], reverse }) {
  return (
    <Grid container spacing={0} direction={reverse ? 'row-reverse' : 'row'} alignItems="center" justifyContent="center" sx={{ minHeight: 400 }}>
      <Grid item xs={12} md={6} sx={{ p: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '80%',
            height: 'auto',
            maxHeight: 520,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 4, pl: { md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', textAlign: 'left' }}>
        <Typography variant="h3" gutterBottom sx={{ whiteSpace: 'normal', wordBreak: 'break-word', maxWidth: 420, lineHeight: 1.2 }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="h5" sx={{ mb: 2, color: '#009624', textAlign: 'left', maxWidth: 520, whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: 1.2 }}>{description}</Typography>
        )}
        {benefits.length > 0 && (
          <Typography variant="h5" sx={{ mt: 2, textAlign: 'left', maxWidth: 620, whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: 1.5, color: '#757575' }}>
            {benefits.join(' ')}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

