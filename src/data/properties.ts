// Featured Properties — sourced from real developer brochures.
// To add a new property, drop images in src/assets/properties/<slug>/ and
// append a new entry to the PROPERTIES array below.

import etherea1 from '@/assets/properties/binghatti_etherea/page_4.jpg';
import etherea2 from '@/assets/properties/binghatti_etherea/page_3.jpg';
import etherea3 from '@/assets/properties/binghatti_etherea/page_2.jpg';
import etherea4 from '@/assets/properties/binghatti_etherea/page_8.jpg';
import etherea5 from '@/assets/properties/binghatti_etherea/page_7.jpg';

import cullinan1 from '@/assets/properties/binghatti_cullinan/page_8.jpg';
import cullinan2 from '@/assets/properties/binghatti_cullinan/page_10.jpg';
import cullinan3 from '@/assets/properties/binghatti_cullinan/page_6.jpg';
import cullinan4 from '@/assets/properties/binghatti_cullinan/page_4.jpg';

import seacliff1 from '@/assets/properties/sea_cliff_by_imtiaz/page_4.jpg';
import seacliff2 from '@/assets/properties/sea_cliff_by_imtiaz/page_10.jpg';
import seacliff3 from '@/assets/properties/sea_cliff_by_imtiaz/page_6.jpg';
import seacliff4 from '@/assets/properties/sea_cliff_by_imtiaz/page_9.jpg';
import seacliff5 from '@/assets/properties/sea_cliff_by_imtiaz/page_8.jpg';
import seacliff6 from '@/assets/properties/sea_cliff_by_imtiaz/page_3.jpg';

import tilal1 from '@/assets/properties/tilal_binghatti/page_1.jpg';
import tilal2 from '@/assets/properties/tilal_binghatti/page_2.jpg';
import tilal3 from '@/assets/properties/tilal_binghatti/page_3.jpg';
import tilal4 from '@/assets/properties/tilal_binghatti/page_4.jpg';

import maybach1 from '@/assets/properties/maybach_binghatti_city/page_1.jpg';
import maybach2 from '@/assets/properties/maybach_binghatti_city/page_2.jpg';
import maybach3 from '@/assets/properties/maybach_binghatti_city/page_3.jpg';
import maybach4 from '@/assets/properties/maybach_binghatti_city/page_4.jpg';
import maybach5 from '@/assets/properties/maybach_binghatti_city/page_5.jpg';

import raw1 from '@/assets/properties/raw_district/page_1.jpg';
import raw2 from '@/assets/properties/raw_district/page_2.jpg';
import raw3 from '@/assets/properties/raw_district/page_3.jpg';
import raw4 from '@/assets/properties/raw_district/page_4.jpg';
import raw5 from '@/assets/properties/raw_district/page_5.jpg';




export interface Property {
  id: string;
  title: string;
  location: string;
  specs: string[];
  highlight: string;
  description: string;
  price?: string;
  propertyType: string;
  completionYear: string;
  features: string[];
  hero: string;
  gallery: string[];
  featured?: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: 'binghatti-etherea-jvc',
    title: 'Binghatti Etherea – JVC',
    location: 'Jumeirah Village Circle, Dubai',
    specs: ['Studio', '1 Bed', '2 Bed'],
    highlight: 'Wellness Amenities',
    description:
      'Modern luxury residences in JVC featuring wellness-focused amenities, elegant interiors, resort-style pools, yoga spaces, and seamless city connectivity.',
    propertyType: 'Residential Tower',
    completionYear: 'Completion 2026',
    features: [
      'Adult & children swimming pools',
      'Jacuzzi & sun deck',
      'Yoga / aerobics platform',
      'Walking & bicycle paths',
      'Premium marble & oak finishes',
      'Modern geometric architecture',
      'Retail & residential tower',
      'Floor-to-ceiling windows',
    ],
    hero: etherea1,
    gallery: [etherea1, etherea2, etherea3, etherea4, etherea5],
    featured: true,
  },
  {
    id: 'binghatti-cullinan-al-jadaf',
    title: 'Binghatti Cullinan – Al Jadaf',
    location: 'Al Jadaf, Dubai',
    specs: ['Studio', '1 Bed', '2 Bed', '3 Bed'],
    highlight: 'Multi-Level Podium Parking',
    description:
      'Contemporary urban residences in Al Jadaf with premium retail spaces, large-scale podium parking, modern geometric architecture, and excellent road connectivity.',
    propertyType: 'Residential & Retail',
    completionYear: 'Completion 2026',
    features: [
      '624 residential units',
      'Retail arcade & commercial spaces',
      'Double-volume lobby',
      'Dedicated retail & residential lifts',
      'Bicycle parking',
      'Accessibility-focused design',
      'Modern geometric façade',
      'Multi-level podium parking',
    ],
    hero: cullinan1,
    gallery: [cullinan1, cullinan2, cullinan3, cullinan4],
  },
  {
    id: 'sea-cliff-imtiaz-dubai-islands',
    title: 'Sea Cliff by Imtiaz – Dubai Islands',
    location: 'Dubai Islands, Dubai',
    specs: ['Waterfront Apartments', 'Duplexes'],
    highlight: 'Ocean Inspired Living',
    description:
      'An ocean-inspired waterfront residence on Dubai Islands featuring serene coastal architecture, panoramic sea views, wellness-focused amenities, and refined contemporary interiors.',
    propertyType: 'Waterfront Residences',
    completionYear: 'Completion 2027',
    features: [
      'Panoramic sea & skyline views',
      'Resort-style pool',
      'Clubhouse & social spaces',
      'Gym & outdoor yoga',
      'Waterfront lifestyle',
      'Luxury duplex residences',
      'Elegant double-height lobby',
      'Premium earth-toned finishes',
      'Floor-to-ceiling windows',
    ],
    hero: seacliff1,
    gallery: [seacliff1, seacliff2, seacliff3, seacliff4, seacliff5, seacliff6],
    featured: true,
  },
  {
    id: 'tilal-binghatti-jvc',
    title: 'Tilal – Binghatti',
    location: 'Jumeirah Village Circle, Dubai',
    specs: ['Studio', '1 Bed', '2 Bed'],
    highlight: 'Wellness Amenities',
    description:
      'Modern luxury residences in JVC featuring wellness-focused amenities, elegant interiors, resort-style pools, yoga spaces, and seamless city connectivity.',
    propertyType: 'Residential Tower',
    completionYear: 'Completion 2026',
    features: [
      'Adult & children swimming pools',
      'Jacuzzi & sun deck',
      'Yoga / aerobics platform',
      'Walking & bicycle paths',
      'Premium marble & oak finishes',
      'Modern geometric architecture',
      'Retail & residential tower',
      'Floor-to-ceiling windows',
    ],
    hero: tilal1,
    gallery: [tilal1, tilal2, tilal3, tilal4],
    featured: true,
  },
];
