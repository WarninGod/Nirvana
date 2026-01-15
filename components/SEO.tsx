import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Nirvana Interiors | Luxury Architectural Design Studio',
  description = 'Dark, moody architectural interior design studio serving global clients. Specializing in modular kitchens, TV panels, custom woodwork, and complete spatial transformations in Delhi, India.',
  canonicalUrl = 'https://nirvana-interiors.com',
  ogImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
  ogType = 'website'
}) => {
  return (
    <Helmet prioritizeSeoTags>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nirvana Interiors" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@nirvanainteriors" />
      
      {/* Additional SEO */}
      <meta name="keywords" content="luxury interior design, modular kitchen, architectural design, wood sculptures, interior decorator Delhi, home design India, commercial interiors, residential design" />
      <meta name="author" content="Nirvana Interiors" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="New Delhi" />
      <meta name="geo.position" content="28.5355;77.3910" />
      <meta name="ICBM" content="28.5355, 77.3910" />
    </Helmet>
  );
};

export default SEO;
