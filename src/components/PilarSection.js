import React from 'react';
import { Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * PilarSection: left side image, right side title, description, and benefits.
 * Responsive: halves on desktop, stacked on mobile.
 */
export default function PilarSection({ title, image, description, benefits = [], reverse }) {
  return (
    <Grid container spacing={4} direction={reverse ? 'row-reverse' : 'row'} alignItems="center">
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: 320,
            objectFit: 'contain',
            borderRadius: 2,
            boxShadow: 2,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        {description && (
          <Typography variant="body1" sx={{ mb: 2 }}>{description}</Typography>
        )}
        {benefits.length > 0 && (
          <List disablePadding>
            {benefits.map((text) => (
              <ListItem key={text} disableGutters>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
    </Grid>
  );
}

