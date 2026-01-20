export type ServiceType = 'kitchens' | 'media-panels' | 'interior-decor';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  id: ServiceType;
  hero: {
    title: string;
    subtitle: string;
    category: string;
  };
  description: {
    paragraphs: string[];
  };
  capabilities: string[];
  process: ProcessStep[];
}

export const servicesData: Record<ServiceType, ServiceData> = {
  'kitchens': {
    id: 'kitchens',
    hero: {
      title: 'Modular Culinary Spaces',
      subtitle: 'Where function meets artistry in the heart of your home',
      category: 'Kitchens',
    },
    description: {
      paragraphs: [
        'The kitchen is no longer just a space for preparation—it is the architectural core of modern living. We approach each project with the understanding that a well-designed kitchen must balance precision engineering with timeless aesthetics.',
        'Our modular systems are built around intelligent storage, seamless integration of appliances, and materials that age with grace. Every surface, every mechanism, every joint is considered.',
        'From matte lacquer finishes to natural stone countertops, we work exclusively with materials that meet our standards for durability, beauty, and environmental responsibility.',
      ],
    },
    capabilities: [
      'Custom Island Configurations',
      'Hidden & Integrated Appliances',
      'Stone & Marble Countertops',
      'Soft-Close Cabinetry Systems',
      'Smart Storage Solutions',
      'Integrated Ambient Lighting',
      'Handleless Design Options',
    ],
    process: [
      {
        number: '01',
        title: 'Consultation',
        description: 'We begin with an in-depth conversation about your lifestyle, cooking habits, and spatial requirements.',
      },
      {
        number: '02',
        title: 'Design Development',
        description: 'Our team creates detailed 3D visualizations and technical drawings for your approval.',
      },
      {
        number: '03',
        title: 'Material Selection',
        description: 'Together, we curate the perfect combination of finishes, hardware, and surfaces.',
      },
      {
        number: '04',
        title: 'Installation',
        description: 'Our craftsmen execute the installation with precision, ensuring every detail is perfect.',
      },
    ],
  },
  'media-panels': {
    id: 'media-panels',
    hero: {
      title: 'Media & Panel Systems',
      subtitle: 'Architectural entertainment design for the modern home',
      category: 'TV Systems & Theatre Rooms',
    },
    description: {
      paragraphs: [
        'Entertainment spaces deserve more than a screen on a wall. Our media panel systems transform your living area into a seamless composition of technology and design, where every wire is hidden and every surface tells a story.',
        'For those with the space to dream bigger, we design complete private theatre rooms—immersive cinematic experiences engineered for your home. Theatre installations require a dedicated room of adequate size to achieve proper acoustics, seating arrangement, and screen proportions.',
        'From floating TV units that appear to defy gravity to backlit stone panels that create ambient atmospheres, each installation is engineered to accommodate future technology upgrades while maintaining its architectural integrity for years to come.',
      ],
    },
    capabilities: [
      'Private Theatre Room Design',
      'Floating TV Unit Systems',
      'Backlit Onyx & Stone Panels',
      'Acoustic Wood Paneling',
      'Concealed Cable Management',
      'Integrated Soundbar Housing',
      'LED Ambient Lighting',
    ],
    process: [
      {
        number: '01',
        title: 'Space Assessment',
        description: 'We evaluate your room dimensions, viewing angles, and existing electrical infrastructure.',
      },
      {
        number: '02',
        title: 'Panel Design',
        description: 'Custom designs are created to complement your interior while maximizing functionality.',
      },
      {
        number: '03',
        title: 'Technical Planning',
        description: 'All wiring, mounting systems, and lighting are meticulously planned before execution.',
      },
      {
        number: '04',
        title: 'Installation',
        description: 'Our specialists install the complete system with attention to every concealed detail.',
      },
    ],
  },
  'interior-decor': {
    id: 'interior-decor',
    hero: {
      title: 'Interior Decor',
      subtitle: 'Spatial transformation through architectural detail',
      category: 'Walls & Ceilings',
    },
    description: {
      paragraphs: [
        'True interior design lives in the details—the way light falls across a textured wall, the quiet confidence of a well-proportioned ceiling, the subtle interplay between furniture and space.',
        'We approach interior decor as an exercise in restraint and intention. Our work encompasses false ceiling designs that add dimension without overwhelm, wall treatments that create atmosphere, and custom furniture that belongs exactly where it stands.',
        'Every element is considered in relation to the whole, creating spaces that feel both curated and effortless.',
      ],
    },
    capabilities: [
      'False Ceiling Concepts',
      'Textured Wall Finishes',
      'Custom Tables & Cabinets',
      'Ambient Lighting Design',
      'Architectural Feature Walls',
      'Crown Molding & Trim',
      'Bespoke Furniture Pieces',
    ],
    process: [
      {
        number: '01',
        title: 'Vision Mapping',
        description: 'We explore your aesthetic preferences, functional needs, and the character you envision.',
      },
      {
        number: '02',
        title: 'Material Consultation',
        description: 'Hands-on sessions with finishes, fabrics, and samples to define the material palette.',
      },
      {
        number: '03',
        title: 'Design Finalization',
        description: 'Comprehensive plans and mood boards ensure alignment before any work begins.',
      },
      {
        number: '04',
        title: 'Execution',
        description: 'Our artisans bring the vision to life with craftsmanship and precision.',
      },
    ],
  },
};
