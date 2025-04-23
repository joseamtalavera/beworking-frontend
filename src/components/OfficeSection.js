import React from 'react'
import {
  Grid,
  Box,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material'

/**
 * OfficeSection
 *  - subtitle (e.g. "Visita nuestra oficina física")
 *  - title    (e.g. "Oficina BeWorking")
 *  - photos   array of 6 image URLs
 *  - phoneImg URL of a phone mockup screenshot
 *  - description  paragraph text
 *  - reverse: flip columns
 */
export default function OfficeSection({
  subtitle,
  title,
  photos,
  phoneImg,
  description,
  reverse = false,
}) {
  return (
    <Grid
      container
      direction={reverse ? 'row-reverse' : 'row'}
      alignItems="center"
      spacing={0}
      sx={{ minHeight: 400 }}
    >
      {/* LEFT: tablet grid + phone overlay */}
      <Grid item xs={12} md={6} sx={{ p: 2 }}>
        <Box
          sx={{
            position: 'relative',
            backgroundColor: 'success.main',
            borderRadius: 3,
            overflow: 'hidden',
            // maintain a 3:2 aspect ratio
            pt: '66.66%',
          }}
        >
          {/* Photo grid */}
          <ImageList
            variant="quilted"
            cols={3}
            rowHeight={Math.floor((1 / 2) * 100) + '%'}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {photos.map((src, i) => (
              <ImageListItem key={i} cols={1} rows={1}>
                <img
                  src={src}
                  alt={`office photo ${i + 1}`}
                  loading="lazy"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </ImageListItem>
            ))}
          </ImageList>

          {/* Phone overlay */}
          <Box
            component="img"
            src={phoneImg}
            alt="phone screenshot"
            sx={{
              position: 'absolute',
              width: '30%',
              bottom: '5%',
              right: '5%',
              boxShadow: 3,
              borderRadius: 2,
            }}
          />
        </Box>
      </Grid>

      {/* RIGHT: text */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: 4,
          textAlign: { xs: 'center', md: reverse ? 'left' : 'right' },
        }}
      >
        {subtitle && (
          <Typography
            variant="overline"
            sx={{ color: 'success.main', mb: 1, display: 'block' }}
          >
            {subtitle.toUpperCase()}
          </Typography>
        )}

        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: 500, mx: 'auto', mb: 0 }}
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  )
}
