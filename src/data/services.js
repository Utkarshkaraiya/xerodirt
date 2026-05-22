export const services = [
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    shortDesc: 'Sparkling clean bathrooms with professional deep cleaning.',
    startingPrice: 189,
    unit: '',
    image: '/images/toilet1.jpg',
    heroImage: '/images/ws1.png',
    icon: '🚿',
    tiers: [

      {
        name: 'Deep Bathroom Cleaning', price: 289, description: 'Machine-assisted deep cleaning to remove stains, grime, and bacteria for complete sanitation.',
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
        name: 'Basic Bathroom Cleaning', price: 189, description: 'Surface cleaning, mopping, mirror cleaning, fixture polishing',
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
    id: 'subscription',
    name: 'Subscription Plans',
    shortDesc: 'Keep your home sparkling all month long with our convenient subscription plans.',
    startingPrice: 499,
    unit: '',
    image: '/images/subscription.jpg',
    heroImage: '/images/subscription.jpg',
    icon: '📅',
    tiers: [
      {
        name: '1 Washroom Subscription', price: 599, description: '3 scheduled hygiene cleaning visits per month for 1 washroom.',
        subdescription: '3 scheduled hygiene cleaning visits per month for 1 washroom.',
        details: {
          pros: [
            '3 scheduled hygiene cleaning visits per month',
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
        name: '2 Washroom Subscription', price: 1099, description: '3 scheduled hygiene cleaning visits per month for 2 washrooms.',
        subdescription: '3 scheduled hygiene cleaning visits per month for 2 washrooms.',
        details: {
          pros: [
            '3 scheduled hygiene cleaning visits per month',
            'Cleaning of both washrooms – toilets, basins & floors',
            'Basic fittings & touchpoint cleaning',
            'Consistent service by trained staff',
            'Acid damage, permanent stains, or etched surfaces'
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
        name: '3 Washroom Subscription', price: 1599, description: 'Complete monthly hygiene maintenance with 3 visits for 3 washrooms.',
        subdescription: 'Complete monthly hygiene maintenance with 3 visits for 3 washrooms.',
        details: {
          pros: [
            '3 scheduled hygiene cleaning visits per month',
            'Cleaning of all 3 washrooms – toilets, basins & floors',
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
      }
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
        name: 'Modular Kitchen Deep Cleaning', price: 1199, description: 'Intensive removal of oil, grease, and food residue from all key modular kitchen surfaces for a hygienic cooking space. Upto 7 cabinets.',
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
      {
        name: 'Large Kitchen Deep Cleaning', price: 1699, description: 'Comprehensive deep cleaning for large kitchens, removing heavy oil, grease, and dirt buildup from all major surfaces to restore hygiene and shine. More than 7 cabinets.',
        subdescription: 'Intensive degreasing & deep cleaning solution designed for spacious kitchens.',
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
        name: 'Painting Services', price: 599, description: 'Professional wall painting services for a fresh and vibrant look, using high-quality paints and expert techniques to transform your space.',
        subdescription: 'Professional wall painting services for a fresh and vibrant look, using high-quality paints and expert techniques to transform your space.',
        details: {
          pros: [
            'Surface Preparation',
            'Putty application',
            'Two-coat premium paint application',
          ],
          cons: [
            'Furniture painting',
            'Ceiling painting',
            'Major wall damage'
          ]
        }
      },
      {
        name: 'Plumbing Services', price: 99, description: 'Professional installation of basic plumbing fixtures and wiring.',
        subdescription: 'Professional installation of basic plumbing fixtures and wiring.',
        details: {
          pros: [
            'Leaky tap repair',
            'Pipe leakage repair',
            'Water outlet installation and repair'
          ],
          cons: [
            'Major pipeline replacement',
            'Water tank cleaning'
          ]
        }
      },
      {
        name: 'Electrical Services',
        price: 99, description: 'Professional installation of basic electrical fixtures and wiring.',
        subdescription: 'Professional installation of basic electrical fixtures and wiring.',
        details: {
          pros: [
            'Light fixture installation and repair',
            'Switchboard repair',
            'Wiring and socket repair'
          ],
          cons: [
            'Major electrical work',
            'Water tank cleaning'
          ]
        }
      },
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
        name: '2 Washrooms – Monthly Plan', price: 1099, description: 'Professional cleaning with 3 scheduled visits per month for 2 washrooms.',
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
        name: '3 Washrooms – Monthly Plan', price: 1599, description: 'Complete monthly hygiene maintenance with 3 visits for 3 washrooms.',
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

];

export const testimonials = [
  
  {
    name: 'Prashant Ransingh',
    rating: 5,
    text: 'They are affordable, prompt and absolute professionals. Timely cleaning done, understood the requirements, done as told. Can\'t recommend enough!!',
    date: '3 months ago',
  },
  {
    name: 'Priyadarshini Patel',
    rating: 5,
    text: 'I have availed washroom cleaning service from Xerodirt. Experience was very good. The person was well mannered and skilled one. He maintained the professionalism and work was very good. Washroom were properly cleaned with good hygiene. They understand the urgency and provide service beyond their working hours also.. i am highly satisfied and will recommend everyone to try it.',
    date: '3 months ago',
  },
  {
    name: 'Lakshay sharma',
    rating: 5,
    text: 'Recently booked Xerodirt for deep cleaning of my two bathrooms, and I\'m extremely satisfied with their service. The representative was professional and did a thorough job, every bit of stubborn dirt was completely removed. The bathrooms now look fresh and spotless. Highly recommended for anyone looking for reliable and effective deep cleaning services!',
    date: '4 months ago',
  },
  {
    name: 'Jay Mathur',
    rating: 5,
    text: 'Great service by the team and very affordable prices. Would definitely recommend to others. The cleaning quality is up to mark and they bring all the equipments.',
    date: '3 months ago',
  },
  {
    name: 'Vaibhav Shrivastava',
    rating: 5,
    text: 'Took their services for washroom cleaning, pretty much impressed with their work. Staff is also very humble and cooperative. Good experience overall',
    date: '3 months ago',
  },
  {
    name: 'Akshita Agnihotri',
    rating: 5,
    text: 'Very well service. Scheduled the service as per my convenience and early morning timings as required. The staff was polite through out the service and did things which i pointed out during service, did it without any fuss. The service was good, although things removed(bottles) were not kept in place, overall good service, would highly recommend.',
    date: '5 months ago',
  },
  {
    name: 'Vikrant Patil',
    rating: 5,
    text: 'Xero dirt team is very professional and provided efficiently deep cleaning service for our 2bhk flat , each nooks and corners were properly cleaned  All the best for team xerodirt',
    date: '3 months ago',
  },
  {
    name: 'Saurabh Rajat',
    rating: 5,
    text: 'Great service by xerodirt very neet and clean services i took washroom cleaning services and it was really great and perfect',
    date: '4 months ago',
  },
  {
    name: 'Shitij Paul',
    rating: 5,
    text: 'Great job done by the person assigned. The whole team is very supportive and dedicated towards customer delight. Keep the good work and maintain the same standards. Nice experience and it is very cost effective as compared to other apps including Urban. Deep cleaning is literally done meticulously and thoroughly. Thanks Utkarsh and team.',
    date: '5 months ago',
  },
  {
    name: 'Gaurav Khare',
    rating: 5,
    text: 'Very satisfied with the bathroom cleaning service. The team responded on priority and completed the work promptly. The cleaning was thorough, leaving the bathroom fresh and spotless. What really stood out was the very convenient and …',
    date: '5 months ago',
  },
  {
    name: 'Abhishek Shukla',
    rating: 5,
    text: 'Excellent service at the best price available in the market. Really impressed with today\'s toilet cleaning—professional, thorough, and worth every rupee.',
    date: '4 months ago',
  },
  {
    name: 'Jyotiraditya Dhalmahapatra',
    rating: 5,
    text: 'Excellent service from Xerodirt. Professionals are well mannered and they are doing their work perfectly. Kudos to Jitendra who came to our house and do all the cleaning, I must say he has done it really well.',
    date: '4 months ago',
  },
  {
    name: 'Abhishek Jeet',
    rating: 5,
    text: 'Thank you for the wonderful cleaning service! The team was punctual, professional, and paid great attention to detail. My home looks fresh and spotless. Really happy with the experience!',
    date: '5 months ago',
  },
  {
    name: 'Ranjeet Singh',
    rating: 5,
    text: 'Best service till now. I used multiple service provider company in this segment but it\'s amazing. Cost is very affordable, and very quick service.',
    date: '6 months ago',
  },
  {
    name: 'Neha Singh',
    rating: 5,
    text: 'Very nice affordable and quick service much cheaper than urban company and nice results',
    date: '3 months ago',
  },
  {
    name: 'Jayant Aggarwal',
    rating: 5,
    text: 'Service was smooth and on schedule. The team maintained good punctuality, did proper and detailed cleaning, and left the place spotless. Overall, very satisfied with the service provided',
    date: '5 months ago',
  },
  {
    name: 'N Z',
    rating: 5,
    text: 'I have availed washroom cleaning service from Xerodirt. Experience was very good. The person was well mannered and skilled one. Washroom were properly cleaned with good hygiene.',
    date: '3 months ago',
  },
  {
    name: 'Archana Karanam',
    rating: 5,
    text: 'Xerodirt- washroom was cleaned very well and looking shiny, spotless and sparkling. The cleaning was excellent .everything looked neat and bright.Jitender did well.Thank you',
    date: '3 months ago',
  },
  {
    name: 'Ravindra kumar',
    rating: 5,
    text: 'Excellent service and top-notch security! Maintains very high standards of hygiene and professionalism. Truly impressive work!',
    date: '6 months ago',
  },
  {
    name: 'Ankita Raut',
    rating: 5,
    text: 'Cleaning service was excellent, cleaning staff did great job, washroom is neat & fresh. Great work 💯 …',
    date: '5 months ago',
  },
  {
    name: 'Ashutosh Mohapatra',
    rating: 5,
    text: 'Very professional, polite, and punctual staff. Extremely happy with their work and highly recommended.',
    date: '6 months ago',
  },
  {
    name: 'Rishav Kumar',
    rating: 5,
    text: 'Commendable service ❤️❤️ They put efforts from being timely and doing amazing cleaning. Very nice to customers and meet the expectation at reasonable price. I recommend using their services. I have used their deep cleaning services where they spent around 2 hours and cleaned every corner, used machines as well.',
    date: '5 months ago',
  },
  {
    name: 'Neha Metkari',
    rating: 5,
    text: 'I had recently called xerodirt for deep washroom cleaning in my home and had a very good experience.Jitendera from xerodirt visited my place and had cleaned the washrooms very well.',
    date: '2 months ago',
  },
  {
    name: 'ESHITA PORWAL',
    rating: 5,
    text: 'I had booked Xerodirt services. They did amazing job. They were highly cooperative and also delivered services at priority due to urgency. Jeetu, the assigned professional patiently delivered the cleaning service and did great work.',
    date: '3 months ago',
  },
  {
    name: 'Shalini Singh',
    rating: 5,
    text: 'My experience has been wonderful with the bathroom cleaning services. Highly recommend.',
    date: '5 months ago',
  },
  {
    name: 'Aman singh',
    rating: 5,
    text: 'Budget friendly and amazing service they offer. I have tried there deep clean and I clearly see the difference...give it a try 💯 recommended …',
    date: '6 months ago',
  },
  {
    name: 'Dhiraj Thorat',
    rating: 5,
    text: 'Excellent service by Xerodirt. I booked them for washroom cleaning and the work was really good. Very satisfied!',
    date: 'Edited 4 months ago',
  },
  {
    name: 'Nitish Jha',
    rating: 5,
    text: 'Used washroom cleaning service and excellent work was done by them. Will definitely recommend',
    date: '4 months ago',
  },
  {
    name: 'Chanki Choudhary',
    rating: 5,
    text: 'Had a great experience. I booked the service on the same day, and the staff was polite and responsive. They took feedback immediately after the cleaning, and if anything wasn\'t up to the mark, they fixed it on the spot.',
    date: '6 months ago',
  },
  {
    name: 'Akanksha sahu',
    rating: 5,
    text: 'I had an amazing experience with this cleaning service! The team was punctual, professional, and did a thorough job from start to finish.',
    date: '6 months ago',
  },
  {
    name: 'Devyanshi Khatri',
    rating: 5,
    text: 'Friendly and polite behavior.  Cleaned professionally and the overall experience was good.',
    date: '4 months ago',
  },
  {
    name: 'Adarsh Tiwari',
    rating: 5,
    text: 'I opted for deep cleaning of one washroom, bhaiya did a great job. The washroom is crystal clean now. Great service at a reasonable price!',
    date: '4 months ago',
  },
  {
    name: 'Anurag Singh',
    rating: 5,
    text: 'Really sophisticated cleaning procedure, cleans every corner possible too, would highly recommend',
    date: '3 months ago',
  },
  {
    name: 'Arpit Lohana',
    rating: 5,
    text: 'Recently used XeroDirt washroom cleaning service and they send a professional cleaner which did a very good job Highly recommended',
    date: '3 months ago',
  },
  {
    name: 'Shreyash Patil 1010',
    rating: 5,
    text: 'Impressed with their quality of work! The bathroom deep cleaning was done with great attention to detail — tiles, taps, and glass all look sparkling clean. The staff was friendly and made sure everything was perfectly tidy before leaving. Definitely worth the service!✌🏻✌🏻 …',
    date: 'Edited 6 months ago',
  },
  {
    name: 'Sejal mehta',
    rating: 5,
    text: 'Sharing a recent service experience — I got deep cleaning of 2 bathrooms done by Xerodirt. The total cost was ₹449 (₹399 after discount), which was significantly lower than what I typically pay with Urban Company.  I personally was  very satisfied with the service..  Will be looking at a weekly service contract with them',
    date: '3 months ago',
  },
  {
    name: 'Priyanka Patil',
    rating: 5,
    text: 'Excellent cleaning service — professional staff and great results….highly Recommend',
    date: '6 months ago',
  },
  {
    name: 'arijit das',
    rating: 5,
    text: 'Very good service will highly recommend for quick bathroom cleaning at affordable price.',
    date: '5 months ago',
  },
  {
    name: 'shamiya khan',
    rating: 5,
    text: 'Excellent service! The team was punctual, polite, and left my home spotless — totally worth it.',
    date: '6 months ago',
  },
  {
    name: 'ARBIND KUMAR',
    rating: 5,
    text: 'The washroom cleaning service provided by Xerodirt was carried out efficiently and to a satisfactory standard. The washrooms were cleaned thoroughly and the service was completed on time. Overall performance is satisfactory.',
    date: '5 months ago',
  },
  {
    name: 'Vishakha Torne',
    rating: 5,
    text: 'It was really very good experience. Stubborn Stains removed completely. The person who is visiting is very humble. Service is really worth.',
    date: '3 months ago',
  },
  {
    name: 'Joey',
    rating: 5,
    text: 'jitendar was very professional and knew what to do. cleaned the bathroom efficiently and super clean. kudos to xerodirt',
    date: '3 months ago',
  },
  {
    name: 'Timeless Teller',
    rating: 5,
    text: 'I cleaned washroom from zero dirt, and they truly cleaned it very well, zero dirt team is very kind and dedicated towards cleaning.',
    date: 'a week ago',
  },
  {
    name: 'Akansha',
    rating: 5,
    text: 'Availed their services for fridge cleaning. Cleaned it quite well and quick. Price effective. Definitely recommend their service.',
    date: 'a week ago',
  },
  {
    name: 'Akash mitkar',
    rating: 5,
    text: 'Excellent bathroom cleaning service. Neat and professional work. Highly recommended.',
    date: 'a week ago',
  },
  {
    name: 'Manan Jain',
    rating: 5,
    text: 'Great Cleaning Service, cleaning staff Jiten did a good job in deep cleaning the kitchen and bathroom.',
    date: 'a week ago',
  },
  {
    name: 'Akansha Anuranjani',
    rating: 5,
    text: 'Cleaned well. The cleaning agent used was a bit harsh with a strong smell. But I guess those are the strong acids used. Rest cleaning was good and quick.',
    date: '2 weeks ago',
  },
  {
    name: 'Smit Ray',
    rating: 5,
    text: 'Absolutely impressed with the washroom cleaning service! The guy did a thorough and meticulous job—every corner was spotless, tiles were shining, and even the toughest stains were completely gone. The freshness and hygiene level after the cleaning was outstanding. What stood out most was the attention to detail and professionalism. They were punctual, efficient, and used quality cleaning products that left a pleasant fragrance without being overpowering. Highly recommend their service to anyone looking for a deep, reliable, and hassle-free washroom cleaning experience!',
    date: '2 weeks ago',
  },
  {
    name: 'Pradip Mandal',
    rating: 5,
    text: 'Had a great experience with Xerodirt Cleaning Services! The team (jitendra and Rahul) was professional, punctual, and did a thorough job. My house feels fresh and spotless. Highly recommended for anyone looking for reliable home cleaning services.',
    date: '3 weeks ago',
  },
  {
    name: 'Prajakta Pandit',
    rating: 5,
    text: 'Good service. The washrooms are always clean and well-maintained. Appreciate the housekeeping staff for their good work.',
    date: '3 weeks ago',
  },
  {
    name: 'Abhishek Shrivastava',
    rating: 5,
    text: 'Top-notch professionalism! The team arrived right on time with all their own specialized equipment and safe cleaning agents. They were polite, efficient, and very respectful of my home. It\'s rare to find a service this meticulous. My washroom smells fresh and looks absolutely spotless. 10/10 recommendation!',
    date: '4 weeks ago',
  },
  {
    name: 'Pankaj Nayak',
    rating: 5,
    text: 'I recently hired Xerodirt for a deep cleaning service, and I am beyond impressed with the results. They did a phenomenal job from start to finish. The transformation of my kitchen is unbelievable—it literally looks brand new again! The team was extremely professional, well-mannered, and paid attention to every small detail. Their pricing is very reasonable for the high quality of work they provide. Highly recommend Xerodirt. Will definitely be using their services again!',
    date: 'a month ago',
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
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    shortDesc: 'Professional bathroom cleaning.',
    image: '/images/toilet1.jpg',
    icon: '🚿',
    subCategories: [
      {
        id: 'bathroom-cleaning',
        name: 'Bathroom Cleaning',
        originalRef: 'bathroom-cleaning',
        icon: '🚿'
      }
    ]
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    shortDesc: 'Professional kitchen cleaning.',
    image: '/images/kitchen.jpg',
    icon: '🍳',
    subCategories: [
      {
        id: 'kitchen-cleaning',
        name: 'Kitchen Cleaning',
        originalRef: 'kitchen-cleaning',
        icon: '🍳'
      }
    ]
  },
  {
    id: 'flat-cleaning',
    name: 'Flat Cleaning',
    shortDesc: 'Professional flat cleaning.',
    image: '/images/flat.jpg',
    icon: '🏠',
    subCategories: [
      {
        id: 'flat-cleaning',
        name: 'Flat Cleaning',
        originalRef: 'flat-cleaning',
        icon: '🏠'
      }
    ]
  },

  {
    id: 'subscription',
    name: 'Subscription Plans',
    shortDesc: 'Hassle-Free Bathroom Cleaning, Without Rebooking Every Time.',
    image: '/images/subscription.jpg',
    icon: '📅',
    subCategories: [
      {
        id: 'subscription',
        name: 'Subscription Plans',
        originalRef: 'subscription',
        icon: '📅'
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
