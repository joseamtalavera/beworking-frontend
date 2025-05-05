import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, List, ListItem } from '@mui/material';

export default function ModernContactSection() {
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        my: 8,
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        background: '#f9f9f9',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 1 }}>
        ✨ Activa tu Oficina Virtual en menos de 1 minuto
      </Typography>
      <Typography align="center" sx={{ color: '#555', mb: 3 }}>
        Déjanos tus datos y te contactamos sin compromiso.
      </Typography>
      <Box component="form">
        <TextField
          fullWidth
          required
          placeholder="Nombre completo"
          variant="outlined"
          sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
        />
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              placeholder="Teléfono"
              type="tel"
              variant="outlined"
              sx={{ background: '#fff', borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              placeholder="Email"
              type="email"
              variant="outlined"
              sx={{ background: '#fff', borderRadius: 1 }}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          multiline
          minRows={4}
          placeholder="¿Qué necesitas?"
          variant="outlined"
          sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          size="large"
          sx={{ fontWeight: 'bold', borderRadius: 1, py: 1.2, backgroundColor: '#009624', '&:hover': { backgroundColor: '#007a1a' } }}
        >
          Quiero mi oficina virtual
        </Button>
      </Box>
      <List sx={{ mt: 3, fontSize: 15, color: '#444', lineHeight: 1.6 }}>
        <ListItem disableGutters sx={{ p: 0 }}><Box component="span" sx={{ color: '#009624', fontWeight: 'bold', mr: 1 }}>✓</Box>Sin dépoisto o permanencia</ListItem>
        <ListItem disableGutters sx={{ p: 0 }}><Box component="span" sx={{ color: '#009624', fontWeight: 'bold', mr: 1 }}>✓</Box>Respuesta automática</ListItem>
        <ListItem disableGutters sx={{ p: 0 }}><Box component="span" sx={{ color: '#009624', fontWeight: 'bold', mr: 1 }}>✓</Box>Precio fijo: 15€/mes</ListItem>
      </List>
    </Paper>
  );
}
