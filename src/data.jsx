// import hero slider images
import HeroSlideImage1 from './assets/img/dogs/dog-slide-1.png';
import HeroSlideImage2 from './assets/img/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/img/dogs/dog-slide-3.png';
// import dog category images
import DogCateg1 from './assets/img/dogs/dog-categ-1.png';
import DogCateg2 from './assets/img/dogs/dog-categ-2.png';
import DogCateg3 from './assets/img/dogs/dog-categ-3.png';
import DogCateg4 from './assets/img/dogs/dog-categ-4.png';
// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export const navigation = [
  {
    name: 'home',
    href: '#',
  },
  {
    name: 'prices',
    href: '#',
  },
  {
    name: 'contact',
    href: '#',
  },
  {
    name: 'get an appointment',
    href: '#',
  },
];

export const heroSlider = [
  {
    id: 1,
    title: 'Professional Grooming Services',
    image: <HeroSlideImage1 />,
    subtitle: 'Dyamond offers top-notch grooming services to keep your pet looking their best.',
    buttonText: 'Book Grooming',
  },
  {
    id: 2,
    title: 'Reliable Dog Walking',
    image: <HeroSlideImage2 />,
    subtitle: 'Ensure your dog gets the exercise they need with Dyamond\'s walking services.',
    buttonText: 'Book Walking',
  },
  {
    id: 3,
    title: 'Behavioral Training',
    image: <HeroSlideImage3 />,
    subtitle: 'Dyamond provides expert behavioral training to help your dog be their best self.',
    buttonText: 'Book Training',
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: 'small',
    dogCategory: '1 - 9 kg',
    services: [
      {
        name: 'Standard',
        price: 20,
        list: ['Bathing and Drying', 'Brushing and Trimming', 'Nail Clipping', 'Ear Cleaning'],
      },
      {
        name: 'Premium',
        price: 40,
        list: [
          'All standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'Luxury',
        price: 60,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'medium',
    image: <DogCateg2 />,
    dogCategory: '10 - 19 kg',
    services: [
      {
        name: 'standard',
        price: 80,
        list: ['Bathing and Drying', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 100,
        list: [
          'all standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'luxury',
        price: 120,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'big',
    image: <DogCateg3 />,
    dogCategory: '20 - 29 kg',
    services: [
      {
        name: 'standard',
        price: 140,
        list: ['Bathing and Drying', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 160,
        list: [
          'all standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'luxury',
        price: 180,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'super',
    image: <DogCateg4 />,
    dogCategory: '30 - 39 kg',
    services: [
      {
        name: 'standard',
        price: 200,
        list: ['Bathing and Drying', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 210,
        list: [
          'all standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'luxury',
        price: 220,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: '#',
  },
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
  {
    icon: <AiFillGithub />,
    href: '#',
  },
];
