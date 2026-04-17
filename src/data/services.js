export const services = [
  {
    id: 'washroom-cleaning',
    name: 'Washroom Cleaning',
    shortDesc: 'Sparkling clean washrooms with professional deep cleaning.',
    startingPrice: 189,
    unit: '',
    image: '/images/toilet.jpg',
    heroImage: '/images/ws1.png',
    icon: '🚿',
    tiers: [

      {
        name: 'Deep Washroom Cleaning', price: 289, description: 'Machine-assisted deep cleaning to remove stains, grime, and bacteria for complete sanitation.',
        subdescription: 'Machine-based deep cleaning.',

        details: {
          pros: [
            'Full washroom cleaning including toilet seat (inside and outside).',
            'Deep floor clean, sink, tiles, taps, mirrors.',
            'Heavy stain and hard water deposit removal from tiles, fittings, and grout lines.',
            'Buffing machine used for deep floor scrubbing.',
            'Disinfection of all touchpoints — handles, taps, andflush areas.'
          ],
          cons: [
            'Acid damage, permanent stains, or etched surfaces',
            'Ceiling cleaning',
            'Shower glass cleaning',
            'Heavy mineral restoration'
          ]
        }
      },
      {
        name: 'Basic Washroom Cleaning', price: 189, description: 'Surface cleaning, mopping, mirror cleaning, fixture polishing',
        subdescription: 'Quick and essential cleaning without machines.',
        details: {
          pros: [
            'Toilet seat cleaning (inside & outside)',
            'Washbasin cleaning'
          ],
          cons: [
            'Machine cleaning',
            'Hard stain removal',
            'Shower glass cleaning',
            'Tile scrubbing,floor scrubbing',
            'Acid damage, permanent stains, or etched surfaces'
          ]
        }
      },
    ],
  },
  {
    id: 'flat-cleaning',
    name: 'Flat Cleaning',
    shortDesc: 'Complete apartment cleaning from top to bottom.',
    startingPrice: 1499,
    unit: '',
    image: '/images/flatcleaning.webp',
    heroImage: '/images/flat.jpeg',
    icon: '🏠',
    tiers: [
      {
        name: '1 BHK Flat Cleaning', price: 1499, description: 'Thorough deep cleaning for unfurnished 1 BHK flats, covering all essential living areas.',
        subdescription: 'Unfurnished flat deep cleaning.',
        details: {
          pros: [
            'Deep cleaning of living room, bedroom, kitchen, bathroom & balcony',
            'Floor sweeping, mopping & machine scrubbing where required',
            'Dusting of ceilings, fans, switchboards & light fixtures',
            'Kitchen slab, tiles, sink',
            'Bathroom deep cleaning including toilet seat, washbasin, taps & tiles',
            'Side walls, partition glass & stain removal'
          ],
          cons: [
            'Furnished interiors and furniture cleaning',
            'Glue, paint stain or sticker removal',
            'Terrace cleaning or inaccessible areas',
            'Wet wiping of walls & ceilings',
            'Window,tracks & mirror cleaning',
            'Acid damage, permanent stains, or etched surfaces'
          ]
        }
      },
      {
        name: '2 BHK Flat Cleaning', price: 2499, description: 'Comprehensive deep cleaning for unfurnished 2 BHK flats, ensuring complete hygiene and freshness.',
        subdescription: 'Unfurnished flat deep cleaning.',
        details: {
          pros: [
            'Deep cleaning of living room, bedrooms, kitchen, bathrooms & balcony',
            'Floor sweeping, mopping & machine scrubbing where required',
            'Dusting of ceilings, fans, switchboards & light fixtures',
            'Kitchen slab, tiles, sink & stove exterior cleaning',
            'Bathroom deep cleaning including toilet seat, washbasin, taps & tiles',
            'Side walls, partition glass & stain removal'
          ],
          cons: [
            'Furnished interiors and furniture cleaning',
            'Glue, paint stain or sticker removal',
            'Terrace cleaning or inaccessible areas',
            'Wet wiping of walls & ceilings',
            'Window,tracks & mirror cleaning',
            'Acid damage, permanent stains, or etched surfaces'
          ]
        }

      },
      {
        name: '3 BHK Flat Cleaning', price: 3499, description: 'End-to-end deep cleaning for unfurnished 3 BHK flats with detailed attention to every room.',
        subdescription: 'Unfurnished flat deep cleaning.',
        details: {
          pros: [
            'All 3 BHK washrooms cleaned — toilets, basins, tiles, taps, mirrors, and windows.',
            'Floor sweeping, mopping & machine scrubbing where required',
            'Dusting of ceilings, fans, switchboards & light fixtures',
            'Kitchen slab, tiles, sink',
            'Bathroom deep cleaning including toilet seat, washbasin, taps & tiles',
            'Side walls, partition glass & stain removal'
          ],
          cons: [
            'Furnished interiors and furniture cleaning',
            'Glue, paint stain or sticker removal',
            'Terrace cleaning or inaccessible areas',
            'Wet wiping of walls & ceilings',
            'Window,tracks & mirror cleaning',
            'Acid damage, permanent stains, or etched surfaces'
          ]
        }
      },
    ],
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    shortDesc: 'Deep cleaning for a hygienic, grease-free kitchen.',
    startingPrice: 499,
    unit: '',
    image: '/images/kitchenc.png',
    heroImage: '/images/kitchen.jpg',
    icon: '🍳',
    tiers: [
      {
        name: 'Kitchen Deep Cleaning', price: 499, description: 'Complete cleaning of kitchen surfaces to remove oil, grease, and dirt, ensuring a clean and hygienic cooking space.',
        subdescription: 'Thorough oil, grease & hygiene-focused cleaning for empty kitchens.',
        details: {
          pros: [
            'Deep cleaning of kitchen platform & slab.',
            'Sink & drainage area cleaning.',
            'Tiles / backsplash degreasing and scrubbing.',
            'Floor deep cleaning and mopping.'
          ],
          cons: [
            'kitchen trolleys and cabinets (inside & outside)',
            'Appliance interior cleaning (oven, microwave, refrigerator, etc.)',
            'Stove, chimney exterior or interior cleaning',
            'Acid damage, permanent stains, or etched surfaces',
            'Repair, polishing, or replacement work'
          ]
        }
      },
      {
        name: 'Modular Kitchen Deep Cleaning', price: 1199, description: 'Intensive removal of oil, grease, and food residue from all key modular kitchen surfaces for a hygienic cooking space.',
        subdescription: 'Oil & grease removal.',
        details: {
          pros: [
            'Platform & slab deep cleaning.',
            'Sink & drainage area cleaning.',
            'Tiles / backsplash degreasing.',
            'Cabinet & trolley cleaning (inside & outside).',
            'If the kitchen trolley is removable, we will remove, clean, and refit it.',
            'Floor cleaning.'
          ],
          cons: [
            'Appliance interior',
            'Stove, chimney exterior cleaning.',
            'Acid damage, permanent stains, or etched surfaces'
          ]
        }
      },
    ],
  },
  {
    id: 'mini-services',
    name: 'Mini Services',
    shortDesc: 'Quick, affordable cleaning for individual items.',
    startingPrice: 49,
    unit: '',
    image: '/images/fan.png',
    heroImage: '/images/sofa.png',
    icon: '✨',
    tiers: [
      {
        name: 'Ceiling Fan Cleaning', price: 49, description: 'Professional dust and grease removal for ceiling fans.',
        subdescription: 'Dust-free professional ceiling fan cleaning.',
        details: {
          pros: [
            'Blade dust removal',
            'Motor housing cleaning',
            'Light fixture cleaning (if applicable)',
            'Dry & wet wiping'
          ],
          cons: [
            'Electrical repair',
            'Fan dismantling'
          ]
        }
      },
      {
        name: 'Window Cleaning', price: 149, description: 'Streak-free glass and frame cleaning per window.',
        subdescription: 'Crystal clear glass & frame cleaning.',
        details: {
          pros: [
            'Glass cleaning',
            'Frame wiping',
            'Corner dust removal',
            'Streak-free finish'
          ],
          cons: [
            'High-rise exterior glass',
            'Broken glass repair'
          ]
        }
      },
      {
        name: 'Wall Wet Wiping (Per Room)', price: 399, description: 'Wet wiping of walls to remove dust, stains, and marks.',
        subdescription: 'Professional wall cleaning to remove dust & stains.',
        details: {
          pros: [
            'Wet wiping of all walls',
            'Dust & dirt removal',
            'Mild stain cleaning'
          ],
          cons: [
            'Paint damage correction',
            'Permanent or acid marks'
          ]
        }
      },
      {
        name: 'Sofa & Chair Cleaning', price: 129, description: 'Deep vacuum and stain treatment per seat.',
        subdescription: 'Deep fabric cleaning per seat.',
        details: {
          pros: [
            'Vacuum cleaning',
            'Stain treatment',
            'Odor removal',
            'Fabric-safe products'
          ],
          cons: [
            'Leather repair',
            'Color restoration'
          ]
        }
      },
      {
        name: 'Single Door Fridge Cleaning', price: 199, description: 'Interior & exterior fridge cleaning with odor removal.',
        subdescription: 'Complete hygienic fridge cleaning.',
        details: {
          pros: [
            'Interior deep cleaning',
            'Exterior wiping',
            'Tray & compartment sanitization',
            'Odor removal'
          ],
          cons: [
            'Gas refilling',
            'Electrical repairs'
          ]
        }
      },
      {
        name: 'Double Door Fridge Cleaning', price: 299, description: 'Complete fridge & freezer deep cleaning.',
        subdescription: 'Deep cleaning including freezer section.',
        details: {
          pros: [
            'Interior & freezer cleaning',
            'Exterior polishing',
            'Compartment sanitization',
            'Odor removal'
          ],
          cons: [
            'Gas refilling',
            'Cooling issue repair'
          ]
        }
      },
      {
        name: 'Chimney Deep Cleaning', price: 299, description: 'Grease removal, filter cleaning & exterior polishing.',
        subdescription: 'Grease-free kitchen chimney service.',
        details: {
          pros: [
            'Filter cleaning',
            'Grease removal',
            'Motor surface cleaning',
            'Exterior polishing'
          ],
          cons: [
            'Motor replacement',
            'Electrical repairs'
          ]
        }
      },
    ],
  },
  {
    id: 'monthly-cleaning',
    name: 'Monthly Cleaning',
    shortDesc: 'Hassle-free monthly washroom maintenance plans.',
    startingPrice: 599,
    unit: '/month',
    image: '/images/mm.jpg',
    heroImage: '/images/mm.jpg',
    icon: '📅',
    tiers: [
      {
        name: '1 Washroom – Monthly Plan', price: 599, description: '3 scheduled hygiene cleaning visits per month for 1 washroom.',
        subdescription: 'Hygiene maintenance with 3 scheduled visits per month.',
        details: {
          pros: [
            '3 scheduled cleaning visits per month',
            'Cleaning of toilet seat, washbasin & floor',
            'Basic fittings & touchpoint cleaning',
            'Regular hygiene maintenance'
          ],
          cons: [
            'Deep cleaning with machines',
            'Hard water stain removal',
            'Tile restoration or repairs',
            'Acid damage, permanent stains, or etched surfaces'
          ]
        }
      },
      {
        name: '2 Washrooms – Monthly Plan', price: 999, description: 'Professional cleaning with 3 scheduled visits per month for 2 washrooms.',
        subdescription: 'Professional hygiene maintenance for 2 washrooms with 3 monthly visits.',
        details: {
          pros: [
            '3 scheduled cleaning visits per month',
            'Cleaning of both washrooms – toilets, basins & floors',
            'Basic fittings & touchpoint cleaning',
            'Consistent service by trained staff',
            'Acid damage, permanent stains, or etched surfaces'
          ],
          cons: [
            'Deep cleaning with machines',
            ' Hard water stain removal',
            ' Tile restoration or repairs',
            ' Acid damage, permanent stains, or etched surfaces'
          ]
        }
      },
      {
        name: '3 Washrooms – Monthly Plan', price: 1399, description: 'Complete monthly hygiene maintenance with 3 visits for 3 washrooms.',
        subdescription: 'Comprehensive hygiene maintenance for 3 washrooms with 3 visits per month.',
        details: {
          pros: [
            '3 scheduled cleaning visits per month',
            'Cleaning of toilet seat, washbasin & floor',
            'Basic fittings & touchpoint cleaning',
            'Regular hygiene maintenance'
          ],
          cons: [
            ' Deep cleaning with machines',
            'Hard water stain removal',
            'Tile restoration or repairs',
            'Acid damage, permanent stains, or etched surfaces'
          ]
        }
      },
    ],
  },
  {
    id: 'plumbing-services',
    name: 'Plumbing Services',
    shortDesc: 'Expert plumbing repairs and installations.',
    startingPrice: 99,
    unit: '',
    image: '/images/plumb.webp',
    heroImage: '/images/plumb.jpg',
    icon: '🔧',
    tiers: [
      { name: 'Plumbing Services', price: 99, description: 'Professional installation of basic plumbing fixtures and wiring.' }
    ],
  },
  {
    id: 'electrical-services',
    name: 'Electrical Services',
    shortDesc: 'Safe and reliable electrical repair services.',
    startingPrice: 99,
    unit: '',
    image: '/images/electric1.jpg',
    heroImage: '/images/electric1.jpg',
    icon: '⚡',
    tiers: [
      { name: 'Electrical Services', price: 99, description: 'Professional installation of basic electrical fixtures and wiring.' }
    ],
  },
  {
    id: 'painting-services',
    name: 'Painting Services',
    shortDesc: 'Professional painting to refresh your space.',
    startingPrice: 599,
    unit: '',
    image: '/images/mm.jpg',
    heroImage: '/images/mm.jpg',
    icon: '🎨',
    tiers: [
      { name: 'Painting Services', price: 599, description: 'Professional wall painting services for a fresh and vibrant look, using high-quality paints and expert techniques to transform your space.' }
    ],
  },
];

export const testimonials = [
  {
    name: 'Lakshay Sharma',
    rating: 5,
    text: 'Excellent washroom cleaning service! The team was very professional and thorough. My bathroom looks brand new. Will definitely use their services again.',
    date: '2 months ago',
  },
  {
    name: 'Priya Deshmukh',
    rating: 5,
    text: 'Booked their flat cleaning service for my 2BHK apartment. The entire place was sparkling clean in just a few hours. Very satisfied with the quality and pricing!',
    date: '1 month ago',
  },
  {
    name: 'Rahul Patil',
    rating: 5,
    text: 'Best kitchen cleaning service in Pune! They cleaned every corner including behind the gas stove which I could never reach. Very affordable pricing too.',
    date: '3 weeks ago',
  },
  {
    name: 'Sneha Kulkarni',
    rating: 5,
    text: 'The monthly washroom cleaning plan is a game changer. No more worrying about deep cleaning — the team comes on schedule every month. Worth every rupee!',
    date: '2 weeks ago',
  },
  {
    name: 'Amit Joshi',
    rating: 5,
    text: 'Great mini services! Got my chimney and both fridges cleaned. The team was punctual and very careful with all appliances. Highly recommended.',
    date: '1 week ago',
  },
  {
    name: 'Neha Verma',
    rating: 5,
    text: 'Professional and punctual team. I booked the deep washroom cleaning and was impressed by the results. The tiles look like they were just installed. Highly recommend Xerodirt!',
    date: '3 days ago',
  },
];

export const faqs = [
  {
    question: 'How do I book a cleaning service?',
    answer: 'You can book our services directly through our website by clicking the "Book Now" button, or reach us via WhatsApp at +91 7559337336. Simply choose your service, select a convenient time, and we\'ll handle the rest!',
  },
  {
    question: 'What areas in Pune do you serve?',
    answer: 'We currently serve all major areas across Pune, including Kothrud, Hinjewadi, Wakad, Baner, Aundh, Kharadi, Viman Nagar, Hadapsar, and more. Contact us to check availability in your area.',
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use professional-grade, eco-friendly cleaning products that are safe for your family and pets. Our products are effective at removing tough stains while being gentle on surfaces.',
  },
  {
    question: 'How long does a typical cleaning session take?',
    answer: 'It depends on the service. A basic washroom cleaning takes about 45-60 minutes, while a full flat cleaning can take 3-5 hours depending on the size. We\'ll give you an estimate when you book.',
  },
  {
    question: 'Do I need to provide any cleaning supplies?',
    answer: 'No! Our team brings all necessary cleaning supplies, tools, and equipment. You don\'t need to arrange anything — just sit back and relax.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer: 'You can cancel or reschedule your booking up to 4 hours before the scheduled time at no charge. If you\'re not satisfied with our service, contact us within 24 hours and we\'ll arrange a re-clean at no extra cost.',
  },
];

export const majorCategories = [
  {
    id: 'cleaning',
    name: 'Cleaning',
    shortDesc: 'Washroom, Flat, Kitchen, and Monthly cleaning services.',
    image: '/images/toilet.jpg',
    icon: '🚿',

    subCategories: [

      {
        id: 'washroom-cleaning',
        name: 'Bathroom cleaning',
        originalRef: 'washroom-cleaning',
        icon: '🚿'
      },


      {
        id: 'kitchen-cleaning',
        name: 'Kitchen cleaning',
        originalRef: 'kitchen-cleaning',
        icon: '🍳'
      },
      {
        id: 'flat-cleaning',
        name: 'Home cleaning',
        originalRef: 'flat-cleaning',
        icon: '🏠'
      },
      {
        id: 'combos',
        name: 'Combos',
        originalRef: 'monthly-cleaning',
        icon: '📅'
      }
    ]
  },
  {
    id: 'plumbing-services',
    name: 'Plumbing Services',
    shortDesc: 'Expert plumbing repairs and installations.',
    image: '/images/plumb.jpg',
    icon: '🔧',
    subCategories: [
      {
        id: 'plumbing-services',
        name: 'Plumbing Services',
        originalRef: 'plumbing-services',
        icon: '🔧'
      }
    ]
  },
  {
    id: 'electrical-services',
    name: 'Electrical Services',
    shortDesc: 'Safe and reliable electrical repair services.',
    image: '/images/electric1.jpg',
    icon: '⚡',
    subCategories: [
      {
        id: 'electrical-services',
        name: 'Electrical Services',
        originalRef: 'electrical-services',
        icon: '⚡'
      }
    ]
  },
  {
    id: 'painting-services',
    name: 'Painting Services',
    shortDesc: 'Professional painting to refresh your space.',
    image: '/images/paint.avif',
    icon: '🎨',
    subCategories: [
      {
        id: 'painting-services',
        name: 'Painting Services',
        originalRef: 'painting-services',
        icon: '🎨'
      }
    ]
  },
  {
    id: 'mini-services',
    name: 'Mini Services',
    shortDesc: 'Quick, affordable cleaning for individual items.',
    image: '/images/fan.png',
    icon: '✨',
    subCategories: [
      {
        id: 'mini-services',
        name: 'Mini Services',
        originalRef: 'mini-services',
        icon: '✨'
      }
    ]
  }
];
