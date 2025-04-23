import React from 'react';
import { Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * PilarSection: left side image, right side title, description, and benefits.
 * Responsive: halves on desktop, stacked on mobile.
 */
export default function PilarSection({ title, image, description, benefits = [], reverse }) {
  return (
    <Grid container spacing={0} direction={reverse ? 'row-reverse' : 'row'} alignItems="stretch" sx={{ minHeight: 400 }}>
      <Grid item xs={12} md={6} sx={{ p: 0 }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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

