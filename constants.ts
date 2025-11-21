
import { Attraction, Region, TransportOption, Dish, Accommodation } from './types';

export const SECTIONS = {
  INTRO: 'intro',
  ESSENTIALS: 'essentials',
  TRANSPORT: 'transport',
  ATTRACTIONS: 'attractions',
  SHOWS: 'shows',
  FOOD: 'food',
  STAY: 'stay'
};

export const ATTRACTIONS_DATA: Region[] = [
  {
    id: 'south',
    name: 'South Island',
    attractions: [
      {
        name: 'Star Beach (Bai Sao)',
        description: 'Arguably the most beautiful beach on the island, known for powdery white sand and turquoise water. Perfect for swimming and photography.',
        image: 'https://media1.thrillophilia.com/filestore/oztvpog2bqzs283eq437gl273a1h_Sao%20beach.jpg',
      },
      {
        name: 'Sun World Cable Car & Hon Thom',
        description: 'The world’s longest oversea cable car (approx 8km). Offers breathtaking aerial views of the An Thoi Archipelago. Includes Nature Park.',
        price: 'Combo lunch with Cable Car: ~3700 INR | Cable Car: ~2500 INR',
        image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wwdugjhgtehwiyxkaphe/SunWorldHonThomCableCarTicket-KlookIndia.jpg',
      },
      {
        name: 'An Thoi Archipelago',
        description: 'A paradise for snorkeling and island hopping (Hon May Rut, Hon Gam Ghi). Explore coral reefs and enjoy seafood lunches on boats.',
        image: 'https://www.vietnamairlines.com/~/media/SEO-images/2025%20SEO/Traffic%20TA/MN/an%20thoi%20islands/an-thoi-island.jpg',
      },
      {
        name: 'Coconut Prison',
        description: 'A sobering historical site museum featuring reconstructed prison cells and exhibitions about the war era.',
        image: 'https://statics.vinwonders.com/phu-quoc-prison-2_1693220887.jpg',
      }
    ]
  },
  {
    id: 'central',
    name: 'Central (Duong Dong)',
    attractions: [
      {
        name: 'Phu Quoc Night Market',
        description: 'Bustling hub in Duong Dong Town. Open 6:00 PM - 10:30 PM. Fresh seafood, tropical fruits, street snacks, and pearl jewelry shopping.',
        image: 'https://media1.thrillophilia.com/filestore/o37egttl4xd36yaeh6ml1s3hwqds_phu-quoc-night-market-1_1645711900.jpg',
      },
      {
        name: 'Dinh Cau Temple',
        description: 'Perched on a rocky outcrop, partly a temple and partly a lighthouse. Fishermen pray here for safe journeys. Iconic sunset spot.',
        image: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/82/2016/12/06073333/3.-Destinationsection-dinhc%E1%BA%ADutemple.jpg',
      },
      {
        name: 'Suoi Tranh Waterfall',
        description: 'A popular picnic spot surrounded by lush greenery and rock formations. Best visited during the rainy season (May-Oct) for better water flow.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/3b/8b/47/phu-quoc-waterfall.jpg?w=1200&h=-1&s=1',
      },
      {
        name: 'Sim Wine Factories',
        description: 'Visit local factories to see how Sim Wine (Rose Myrtle fruit) is produced. Sweet, fragrant, and a great souvenir.',
        image: 'https://rootytrip.com/wp-content/uploads/2020/04/sim-wine-6.jpg',
      },
      {
        name: 'King Kong Mart',
        description: 'A must-visit mega supermarket for tourists. The best place to buy souvenirs, coffee, pepper, and travel essentials at fixed, reasonable prices.',
        image: 'https://phapluatplus.baophapluat.vn/stores/news_dataimages/2025/022025/27/15/in_article/47f0bacad1556f0b364420250227154119.jpg?rt=20250227154441',
      }
    ]
  },
  {
    id: 'north',
    name: 'North Island',
    attractions: [
      {
        name: 'Grand World Phu Quoc',
        description: 'The "Sleepless City" operating 24/7. Venice-style canals, water taxis (~700 INR), Teddy Bear Museum (~700 INR), and cultural shows.',
        price: 'Free Entry to Complex',
        image: 'https://res.klook.com/image/upload/activities/tm5ypc6mpiamhf3aamqu.jpg',
      },
      {
        name: 'VinWonders',
        description: 'Largest theme park in Vietnam. Adventure World, Water World, and the Aquarium. Don’t miss the Mermaid Show (2pm) and Once Show (6:45pm).',
        price: 'Entry Ticket: ~3200 INR | Entry with Buggy Service: ~3500 INR',
        image: 'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wqculxbd6ilqbfxdjbix.jpg',
      },
      {
        name: 'Vinpearl Safari',
        description: 'Vietnam’s first open zoo with over 3,000 animals. Take the safari bus to see lions, rhinos, and giraffes in semi-wild habitats.',
        price: 'Entry Ticket: ~3600 INR',
        image: 'https://saigonadventure.com/wp-content/uploads/2025/06/Vinpearl-Safari-Phu-Quoc-Saigon-Adventure-.jpg',
      },
      {
        name: 'Starfish Beach (Rach Vem)',
        description: 'Famous for shallow waters dotted with red starfish. Rustic setting with wooden seafood shacks over the water.',
        image: 'https://worldmatetravel.com/uploads/red-starfish-in-rach-vem-phu-quoc%20(2).png-image-nphrvykn.png',
      },
      {
        name: 'Pepper Farms',
        description: 'Walk among pepper vines in the north. Learn about the drying process and buy fresh pepper products.',
        image: 'https://blog.premierresidencesphuquoc.com/wp-content/uploads/2025/02/phu-quoc-pepper-farm-11.webp',
      }
    ]
  }
];

export const SHOWS_LIST: Attraction[] = [
  {
    name: 'Symphony of the Sea',
    description: 'A thrilling Jetski & Flyboard sports show located in Sunset Town (South Island).',
    price: 'Combo (Kiss of the Sea Show + Symphony): ~3200 INR',
    image: 'https://sunset-town.com/wp-content/uploads/2024/12/Symphony-of-The-Sea-tai-Phu-Quoc-1.jpg',
    details: [
       'Duration: 90 minutes',
       'Schedule: Wednesday-Monday at 7:00 PM'
    ]
  },
  {
    name: 'Kiss of the Sea Show',
    description: 'Spectacular multimedia show at Sunset Town (South Island). Ticket includes Entry to Kiss Bridge.',
    price: 'Show Ticket: ~2150 INR',
    image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wcs29njxr5bpveqvpv5w/Kiss%20of%20the%20Sea%20Phu%20Quoc%20Ticket%20.jpg',
    details: [
       'Duration: 90 minutes',
       'Schedule: Wednesday-Monday at 9:00 PM',
       'Tip: Book a stay with ocean view near Kiss Bridge to watch both shows from your balcony for free!'
    ]
  },
  {
    name: 'Quintessence of Vietnam',
    description: 'A grand historical and cultural show located in Grand World (North Island).',
    price: 'Ticket: ~1000 INR',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/97/78/14/show-tinh-hoa-vi-t-nam.jpg?w=1200&h=-1&s=1',
    details: [
       'Duration: 45 minutes',
       'Schedule: Monday-Sunday at 8:15 PM'
    ]
  },
  {
    name: 'Colors of Venice',
    description: 'The "Sleepless City" of Grand World comes alive with this vibrant water show (North Island).',
    price: 'Free',
    image: 'https://static.vinwonders.com/production/Charm-of-Venice-1.jpg',
    details: [
      'Location: Grand World',
      'Schedule: Everyday 9:00 PM'
    ]
  }
];

export const TRANSPORT_OPTS: TransportOption[] = [
  {
    mode: 'Grab App',
    description: 'The Uber/Ola alternative. Use for quick, fixed-price travel via cars or motorbikes (Grab Bike).',
    details: 'Highly Recommended'
  },
  {
    mode: 'Motorbike Rental',
    description: 'Self-drive for maximum freedom. You can ask your Hotel Receptionist for rental. May requires International Driving Permit (IDP).',
    costVND: '120k - 150k VND',
    costINR: '405 - 505 INR'
  },
  {
    mode: 'Private Car',
    description: 'Ideal for families or groups covering North and South islands comfortably.',
    costVND: '1,000,000 VND/day',
    costINR: '~3,360 INR/day'
  },
  {
    mode: 'Bicycle Rental',
    description: 'Good for short distances or sightseeing around your hotel/Duong Dong.',
    costVND: '30k - 100k VND',
    costINR: '100 - 335 INR'
  }
];

export const DISHES: Dish[] = [
  { name: 'Pho', description: 'Clear rice noodle soup (usually beef/chicken based).' },
  { name: 'Banh Mi', description: 'Crispy baguette sandwich (often has meat/pate).' },
  { name: 'Goi', description: 'Fresh Vietnamese Salad.' },
  { name: 'Com Ga', description: 'Vietnamese Chicken Rice.' },
  { name: 'Ri Ga', description: 'Chicken Curry with bread or rice.' },
  { name: 'Banh Xeo Chay', description: 'Sizzling pancake with veg, noodles, tofu.', isVeg: true },
  { name: 'Bun Chay', description: 'Vegetarian vermicelli bowl.', isVeg: true },
  { name: 'Goi Cuon Chay', description: 'Vegetarian fresh spring rolls.', isVeg: true },
];

export const BEACH_BARS = [
  'Rory’s Beach Bar',
  'Sunset Sanato Beach Club',
  'OCSEN Beach Bar & Club',
  'Rock Sunset Island Bar'
];

export const INDIAN_RESTAURANTS = [
  'Maharaja Lounge',
  'Krishna Garden',
  'Ganesh Indian Restaurant',
  'Sandeep Indian Restaurant',
  'Rasoi Indian'
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    name: 'HANZ VeniceRiver Power MIA',
    location: 'North Island (Grand World)',
    description: 'Lake view and easy accessibility without breaking the wallet. Great for accessing the "Sleepless City".',
    image: 'https://images.trvl-media.com/lodging/92000000/91900000/91894800/91894763/a3109f6f.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill'
  },
  {
    name: 'Venice Hotel Sunset Town',
    location: 'South Island',
    description: 'Beautiful aesthetics in the heart of Sunset Town. Close to the Kiss Bridge and cable car station.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/9a/fb/50/room-with-sea-view.jpg?w=900&h=500&s=1'
  },
  {
    name: 'Rosie Hillside Seaview',
    location: 'South Island',
    description: 'Apartment style living with ocean views. Ideal for those who want a home-like feel.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/584587679.jpg?k=309f04f4ad282d1716590da63093c536ed37e604463b2312900372b9a95da698&o='
  }
];
