import plastic from '../assets/img/plastic.svg'; 
import paper from '../assets/img/paper.svg'; 
import glass from '../assets/img/glass.svg'; 
import metal from '../assets/img/metal.svg'; 
import depositBootles from '../assets/img/deposit-bottles.svg';
import medicine from '../assets/img/medicine.svg'; 
import textile from '../assets/img/textile.svg'; 
import bioWaste from '../assets/img/bio-waste.svg'; 
import batteries from '../assets/img/batteries.svg'; 
import electricals from '../assets/img/electricals.svg'; 
//import bulbs from '../assets/img/bulbs.svg'; 
import tyres from '../assets/img/tyres.svg'; 
import oils from '../assets/img/oils.svg'; 
import bulkyWaste from '../assets/img/bulky-waste.svg'; 
import construction from '../assets/img/construction.svg';

//Tips and Tricks
import tree from '../assets/img/tree.svg'; 
import buyLocal from '../assets/img/buy-local.svg'; 
import inspireOthers from '../assets/img/inspire-others.svg'; 
import shower from '../assets/img/shower.svg';
import tap from '../assets/img/tap.svg';

//Eco-friendly Shops
import livin from '../assets/img/livin.svg';
import burka from '../assets/img/burka.svg'; 
import kuule from '../assets/img/kuule.svg'; 
import badnica from '../assets/img/badnica.svg'; 
import sekoeko from '../assets/img/sekoeko.svg'; 
import daba from '../assets/img/daba.svg'; 

export const dataCategory = [
  {
    id: 1,
    title: 'Plastic',
    image: plastic,
    detail1: {
      name: 'Allowed',
      description: [
        'Plastic bottles',
        'Chemical bottles',
        'Plastic boxes',
        'Cosmetic bottles',
        'Cans',
        'Plastic bags',
        'Food plastic packaging',
        'Egg boxes',
        'Drinks packages',
        'Tetrapack'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins',
        'Laminated paper',
        'Shredded paper',
        'Disposable dishes',
        'Household items',
        'Toys',
        'Foil',
        'Batteries',
        'Metal tubes',
        'Bulky waste'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [
        `Check item, for sorting allowed only clean items without food leftovers`,
        `Flatten before disposal`,
        `Labels and plastic stoppers are permitted`
      ]
    }
  },
  {
    id: 2,
    title: 'Paper',
    image: paper,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)',
        'Plastic bags',
        'Writing paper Books',
        'Newspapers Cardboard boxes',
        'packaging Metal cans Corks'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Paper towels and napkins',
        'Dirty, greasy paper',
        'Laminated paper',
        'Shredded paper'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [
        `Check item, for sorting allowed only clean items without food leftovers`,
        `Flatten before disposal`,
        `Labels and plastic stoppers are permitted`
      ]
    }
  },
  {
    id: 3,
    title: 'Glass',
    image: glass,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 4,
    title: 'Metal',
    image: metal,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 5,
    title: 'Deposit bottles',
    image: depositBootles,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 6,
    title: 'Textile',
    image: textile,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 7,
    title: 'Medicine',
    image: medicine,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 8,
    title: 'BIO waste',
    image: bioWaste,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 9,
    title: 'Batteries',
    image: batteries,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 10,
    title: 'Electricals',
    image: electricals,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 11,
    title: 'Bulbs',
    image: electricals,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 12,
    title: 'Tyres',
    image: tyres,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 13,
    title: 'Oils',
    image: oils,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 14,
    title: 'Bulky waste',
    image: bulkyWaste,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 15,
    title: 'Construction',
    image: construction,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'Cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  }
];

export const dataContainer = [
  {
    id: 1,
    title: 'Light waste',
    image: bulkyWaste,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 2,
    title: 'Glass',
    image: glass,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 3,
    title: 'BIO waste',
    image: bioWaste,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 4,
    title: 'Textile',
    image: textile,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  },
  {
    id: 5,
    title: 'Household',
    image: glass,
    detail1: {
      name: 'Allowed',
      description: [
        'PET Bottles',
        'cans Plastic (LDPE)'
      ]
    },
    detail2: {
      name: 'Not allowed',
      description: [
        'Dirty, greasy items',
        'Paper towels and napkins'
      ]
    },
    detail3: {
      name: 'Before sorting',
      description: [`Flatten before disposal`]
    }
  }
]

export const dataMap = [
  {
    locationId: 1,
    name: "Mount Vernon - S 42nd St, IL",
    contact: "01 325 1526",
    address : {
      street: "1409 S 42nd St",
      city: "Mt. Vernon",
      state: "IL",
      country: "USA"
    },
    gps: {
      latitude: 38.300369,
      longitude: -88.942472
    },
  },
  {
    locationId: 2,
    name: `Ģertrūdes iela 22-24, Centra rajons, Rīga, LV-1011, Latvia`,
    contact: "+371 23 222 888",
    address : {
      street: '',
      city: '',
      state: '',
      country: "LVA"
    },
    gps: {
      latitude: 56.956,
      longitude: 24.12539
    },
  },
  {
    locationId: 3,
    name: `Ģertrūdes iela 27, Centra rajons, Rīga, LV-1011, Latvia`,
    contact: "+371 23 111 888",
    address : {
      street: '',
      city: '',
      state: '',
      country: "LVA"
    },
    gps: {
      latitude: 56.936,
      longitude: 24.11519
    },
  },
  {
    locationId: 4,
    name: `Ģertrūdes iela 34-1A, Centra rajons, Rīga, LV-1011, Latvia`,
    contact: "+371 23 111 123",
    address : {
      street: '',
      city: '',
      state: '',
      country: "LVA"
    },
    gps: {
      latitude: 56.947,
      longitude: 24.1351
    },
  },
  {
    locationId: 5,
    name: `Ludzas iela 24, Latgales priekšpilsēta, Rīga, LV-1003, Latvia`,
    contact: "+371 67 140 175",
    address : {
      street: '',
      city: '',
      state: '',
      country: "LVA"
    },
    gps: {
      latitude: 56.940,
      longitude: 24.1250
    },
  }
]

export const dataEcoShop = [
  {
    id: 1,
    title: 'Livin',
    image: livin,
    detail1: {
      description: [
        `Nowadays goods are produced in such a way as to satisfy the consumer. But how to choose? How to understand which products are good and which are produced using harmful substances? How to understand what is written on the label and what is its subtext? Which manufacturer really cares about the wishes of the consumer, but who only talks loudly about it? And finally, how do you find the time to do this work? This is exactly what we do, and we are picky about it. We sell high quality natural and ecological food products, natural cosmetics, cleaning products. The food we offer is delicious, the cosmetics are effective, and the cleaning products are effective. Experience for yourself that natural and ecological - it is not an echo of the past, but a very rational and modern choice!`
      ]
    }
  },
  {
    id: 2,
    title: 'Burka',
    image: burka,
    detail1: {
      description: [
        `"Burka" is a place where you can buy food without packaging (by weight) exactly in the quantity you need and in the packaging you want, as well as environmentally friendly things that help you live "greener". We also try to promote a green lifestyle by implementing anti-waste initiatives and giving people the opportunity to exchange resources such as jars, dishes, candle scraps, boxes, etc. for free. We are for a life free from pollution, against unnecessary consumption of resources, favoring sustainable development, environmentally friendly, ethical consumption and lifestyle.`
      ]
    }
  },
  {
    id: 3,
    title: 'Kuule',
    image: kuule,
    detail1: {
      description: [
        ``
      ]
    }
  },
  {
    id: 4,
    title: 'Badnica',
    image: badnica,
    detail1: {
      description: [
        ``
      ]
    }
  },
  {
    id: 5,
    title: 'Sekoeko',
    image: sekoeko,
    detail1: {
      description: [
        ``
      ]
    }
  },
  {
    id: 6,
    title: 'Daba',
    image: daba,
    detail1: {
      description: [
        ``
      ]
    }
  }
]


export const dataTipsTricks = [
  {
    id: 1,
    title: 'Plant a tree',
    image: tree,
    detail1: {
      description: `Trees save energy and release oxygen that keeps the air clean. If you have the means (and the yard space), plant a few trees on your property. Look for a variety that’s native to your area and help it grow by following the care instructions for that type of tree. Trees are crucial to the environment, and they reduce the effects of global warming and climate change.
      If you don’t have a yard of your own, you could always support organizations that aim to plant more trees. 
      The best time to do this is autumn. Do your research to make sure you pick the right tree for your space as some trees have complex root systems that can damage buildings or may grow to high and limit light. `
    }
  },
  {
    id: 2,
    title: 'Buy local',
    image: buyLocal,
    detail1: {
      description: `While we’re on the topic of shopping, it’s important to think about the path your stuff takes just to get to you. All that packaging, combined with the fuel needed for delivery, really takes a toll on the environment. Instead, check out your local farmers market for fresh, package-free food; try eating at a farm-to-table restaurant; and buy from local artists, clothing makers, and retailers before you click for that two-day shipping.`
    },
  },
  {
    id: 3,
    title: 'Take a shower',
    image: shower,
    detail1: {
      name: 'Allowed',
      description: ''
    }
  },
  {
    id: 4,
    title: 'Compost',
    image: bioWaste,
    detail1: {
      name: 'Allowed',
      description: ''
    }
  },
  {
    id: 5,
    title: 'Turn off the tap',
    image: tap,
    detail1: {
      name: 'Allowed',
      description: ''
    }
  },
  {
    id: 6,
    title: 'Inspire others',
    image: inspireOthers,
    detail1: {
      name: 'Allowed',
      description: ''
    }
  }
]
