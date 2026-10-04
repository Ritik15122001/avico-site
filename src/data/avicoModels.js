/**
 * AVICO-branded models (from the client's "AVICO MODELS" sheet).
 * Each entry is merged into its range/group in categories.js, and also pushed
 * to a live database by `npm run import:avico` in /server.
 *
 * Photos live in public/images/products/avico/<code>.webp and are produced by
 * scripts/process-avico.mjs from the originals in assets-src/avico-products.
 */
export const avicoModels = [
  {
    "code": "AVF 004",
    "name": "Floor cleaning machine 2HP",
    "range": "floor-care",
    "group": "Scrubbers, polishers & burnishers",
    "spec": "Single disc · 2HP · 17\"",
    "summary": "A 1500W, 17-inch single disc machine for scrubbing, polishing and carpet shampooing — supplied ready to work with water tank, floor brush, carpet brush and driving plate.",
    "features": [
      "1500W motor at 154 rpm for scrubbing and polishing hard floors",
      "Quiet running at ≤54 dB — suitable for occupied buildings",
      "12 m power cord covers large rooms without re-plugging",
      "Complete kit: water tank, needle holder, floor brush, carpet brush and driving plate"
    ],
    "specs": [
      {
        "label": "Voltage/Frequency",
        "value": "220V-240V/50Hz"
      },
      {
        "label": "Power",
        "value": "1500W"
      },
      {
        "label": "Brush speed",
        "value": "154rpm/min"
      },
      {
        "label": "Noise",
        "value": "≤54dB"
      },
      {
        "label": "Chassis diameter",
        "value": "17''"
      },
      {
        "label": "Power cord",
        "value": "12m"
      },
      {
        "label": "Head weight",
        "value": "34.2kg"
      },
      {
        "label": "Machine gross weight",
        "value": "52KGS"
      },
      {
        "label": "Handle packaging dimensions",
        "value": "375×126×1133mm"
      },
      {
        "label": "Head packaging size",
        "value": "560×450×350mm"
      },
      {
        "label": "Configuration",
        "value": "host, handle, water tank, needle holder, floor brush, carpet brush, driving plate"
      }
    ],
    "image": "/images/products/avico/avf-004.webp",
    "newArrival": true
  },
  {
    "code": "AVF 005",
    "name": "Floor cleaning machine 1.5HP",
    "range": "floor-care",
    "group": "Scrubbers, polishers & burnishers",
    "spec": "Single disc · 1.5HP · 17\"",
    "summary": "A lighter 1100W, 17-inch single disc machine for daily scrubbing and carpet shampooing in offices, schools and retail.",
    "features": [
      "1100W motor at 154 rpm for routine scrubbing",
      "17-inch chassis balances coverage and manoeuvrability",
      "12 m power cord",
      "Supplied with water tank, needle holder, floor brush and carpet brush"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "220V-240V"
      },
      {
        "label": "Power",
        "value": "1100W"
      },
      {
        "label": "Speed",
        "value": "154 rpm/min"
      },
      {
        "label": "Power cord",
        "value": "12m"
      },
      {
        "label": "Chassis diameter",
        "value": "17\""
      },
      {
        "label": "Machine gross weight",
        "value": "47.56kg"
      },
      {
        "label": "Handle packaging dimensions",
        "value": "375×126×1133mm"
      },
      {
        "label": "Head packaging size",
        "value": "560×450×355mm"
      },
      {
        "label": "Configuration",
        "value": "Equipped with main unit, handle, water tank, needle holder, floor brush and carpet brush"
      }
    ],
    "image": "/images/products/avico/avf-005.webp",
    "newArrival": true
  },
  {
    "code": "AVF 17H",
    "name": "Floor cleaning machine 2HP (new model)",
    "range": "floor-care",
    "group": "Scrubbers, polishers & burnishers",
    "spec": "Single disc · 2HP · 17\" · 175 rpm",
    "summary": "The new heavy-duty 17-inch model — 1500W at 175 rpm for wet polishing and general-purpose floor care.",
    "features": [
      "Higher 175 rpm brush speed for faster wet polishing",
      "1500W electric drive on 220–240V supply",
      "76 kg working weight keeps the pad pressed to the floor",
      "12 m cable"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "220V-240V/50HZ"
      },
      {
        "label": "For Use On",
        "value": "Wet Polishing, General Purpose"
      },
      {
        "label": "Power Source",
        "value": "Electric"
      },
      {
        "label": "Rated Voltage",
        "value": "220V"
      },
      {
        "label": "Rated Input Power",
        "value": "50HZ/60HZ"
      },
      {
        "label": "Wheel Diameter",
        "value": "17inch"
      },
      {
        "label": "RPM",
        "value": "175 rpm/min"
      },
      {
        "label": "Power",
        "value": "1500W"
      },
      {
        "label": "Speed",
        "value": "175"
      },
      {
        "label": "Cable",
        "value": "12M"
      },
      {
        "label": "Net weight",
        "value": "76KGS"
      },
      {
        "label": "Diameter",
        "value": "17 inches"
      }
    ],
    "image": "/images/products/avico/avf-17h.webp",
    "newArrival": true
  },
  {
    "code": "AVF 18H",
    "name": "Floor cleaning machine 2.5HP (new model)",
    "range": "floor-care",
    "group": "Scrubbers, polishers & burnishers",
    "spec": "Single disc · 2.5HP · 18\" · 175 rpm",
    "summary": "The largest single disc in the range — an 1800W, 18-inch machine at 175 rpm for wet polishing large hard-floor areas.",
    "features": [
      "1800W motor — the most powerful single disc in the range",
      "18-inch diameter covers more floor per pass",
      "96 kg working weight for heavy scrubbing and polishing",
      "12 m cable"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "220V-240V/50HZ"
      },
      {
        "label": "For Use On",
        "value": "Wet Polishing, General Purpose"
      },
      {
        "label": "Power Source",
        "value": "Electric"
      },
      {
        "label": "Rated Voltage",
        "value": "220V"
      },
      {
        "label": "Rated Input Power",
        "value": "50HZ/60HZ"
      },
      {
        "label": "Wheel Diameter",
        "value": "18 inch"
      },
      {
        "label": "RPM",
        "value": "175 rpm/min"
      },
      {
        "label": "Power",
        "value": "1800W"
      },
      {
        "label": "Speed",
        "value": "175"
      },
      {
        "label": "Cable",
        "value": "12M"
      },
      {
        "label": "Net weight",
        "value": "96KGS"
      },
      {
        "label": "Diameter",
        "value": "18 inches"
      }
    ],
    "image": "/images/products/avico/avf-18h.webp",
    "newArrival": true
  },
  {
    "code": "AVFG",
    "name": "Foam generator",
    "range": "floor-care",
    "group": "Scrubbers, polishers & burnishers",
    "spec": "Foam generator · Battery",
    "summary": "A battery-powered foam generator that lays an even blanket of cleaning foam on floors, walls and fixtures before agitation and rinse — ideal for washrooms, kitchens and food plants.",
    "features": [
      "Cordless battery operation — no cable across wet floors",
      "Even foam application for better chemical dwell time",
      "Automatic foaming for consistent results",
      "Compact upright body that is easy to move between areas"
    ],
    "specs": [
      {
        "label": "Power supply",
        "value": "Battery"
      },
      {
        "label": "Operation",
        "value": "Automatic"
      }
    ],
    "image": "/images/products/avico/avfg.webp",
    "newArrival": true
  },
  {
    "code": "AVRS 80L",
    "name": "Ride-on scrubber drier 80 L",
    "range": "floor-care",
    "group": "Ride-on scrubber driers",
    "spec": "Ride-on · 80 L · 24V battery",
    "summary": "A battery ride-on scrubber drier with a 760 mm cleaning path and 3,800 m²/h productivity, built for warehouses, malls and large hard-floor areas.",
    "features": [
      "3,800 m²/h productivity with a 760 mm cleaning width",
      "70 L solution and 80 L recovery tanks for long runs between refills",
      "3–4 hours on 2 × 12V 120Ah batteries",
      "Rear-wheel drive, 180 mbar vacuum and 25 kg brush pressure for a dry floor in one pass"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "24V"
      },
      {
        "label": "Cleaning Width",
        "value": "760mm"
      },
      {
        "label": "Squeegee Width",
        "value": "820mm"
      },
      {
        "label": "Productivity",
        "value": "3800M²/h"
      },
      {
        "label": "Driving Motor (Rear-driven)",
        "value": "500W"
      },
      {
        "label": "Brush Motor",
        "value": "500W"
      },
      {
        "label": "Brush Speed",
        "value": "180rpm"
      },
      {
        "label": "Brush Pressure",
        "value": "25kg"
      },
      {
        "label": "Vacuum Motor",
        "value": "500W"
      },
      {
        "label": "Vacuum Degree",
        "value": "180mbar"
      },
      {
        "label": "Solution Tank",
        "value": "70L"
      },
      {
        "label": "Recovery Tank",
        "value": "80L"
      },
      {
        "label": "Noise Level",
        "value": "61dB"
      },
      {
        "label": "Battery",
        "value": "2*DC12V 120AH"
      },
      {
        "label": "Working Time",
        "value": "3~4 H"
      },
      {
        "label": "Net Weight",
        "value": "245kgs"
      },
      {
        "label": "Gross Weight",
        "value": "315kgs"
      },
      {
        "label": "Product Size",
        "value": "1200*820*1150mm"
      },
      {
        "label": "Package Size",
        "value": "1260*830*1250mm"
      }
    ],
    "image": "/images/products/avico/avrs-80l.webp",
    "newArrival": true
  },
  {
    "code": "AVRS 140L",
    "name": "Ride-on scrubber drier 140 L",
    "range": "floor-care",
    "group": "Ride-on scrubber driers",
    "spec": "Ride-on · 36V · 820 mm",
    "summary": "A heavy-duty 36V ride-on scrubber drier with an 820 mm cleaning path and large tanks for warehouse-scale floors.",
    "features": [
      "Up to 2,870 m²/h with an 820 mm cleaning width",
      "125 L solution and 132 L recovery tanks",
      "6 × 6V 310Ah battery pack for long shifts",
      "2420W drive, brush and vacuum system with work lights"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "36V DC"
      },
      {
        "label": "Power",
        "value": "2420W"
      },
      {
        "label": "Cleaning width",
        "value": "820mm"
      },
      {
        "label": "Squeegee width",
        "value": "1100mm"
      },
      {
        "label": "Productivity",
        "value": "1230–2870m²/h"
      },
      {
        "label": "Speed",
        "value": "1.5–5.5 km/h"
      },
      {
        "label": "Driving motor",
        "value": "36V / 700W"
      },
      {
        "label": "Brush motor",
        "value": "36V / 900W"
      },
      {
        "label": "Brush speed",
        "value": "170rpm"
      },
      {
        "label": "Vacuum motor",
        "value": "36V / 600W"
      },
      {
        "label": "Vacuum degree",
        "value": "160mbar"
      },
      {
        "label": "Solution tank",
        "value": "125L"
      },
      {
        "label": "Recovery tank",
        "value": "132L"
      },
      {
        "label": "Battery",
        "value": "6 × 6V 310Ah"
      },
      {
        "label": "Weight",
        "value": "635kg"
      },
      {
        "label": "Size",
        "value": "1680 × 1020 × 1450mm"
      }
    ],
    "image": "/images/products/avico/avrs-140l.webp",
    "newArrival": true
  },
  {
    "code": "AVSD 55L",
    "name": "Walk-behind scrubber drier 55 L",
    "range": "floor-care",
    "group": "Walk-behind scrubber driers",
    "spec": "Battery · 55 L · 560 mm",
    "summary": "A 24V battery walk-behind scrubber drier with a 560 mm path and 2,300 m²/h output — cable-free cleaning for supermarkets, hospitals and factories.",
    "features": [
      "2,300 m²/h productivity with a 560 mm cleaning width",
      "50 L solution and 55 L recovery tanks",
      "Around 3.5 hours per charge on 2 × 12V 100Ah batteries",
      "Tight 620 mm turning radius for aisles and corridors"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "24V"
      },
      {
        "label": "Power",
        "value": "1000W"
      },
      {
        "label": "Cleaning width",
        "value": "560mm"
      },
      {
        "label": "Squeegee width",
        "value": "810mm"
      },
      {
        "label": "Productivity",
        "value": "2300m²/h"
      },
      {
        "label": "Turning radius",
        "value": "620mm"
      },
      {
        "label": "Brush motor",
        "value": "500W"
      },
      {
        "label": "Brush speed",
        "value": "155rpm"
      },
      {
        "label": "Brush pressure",
        "value": "28kg"
      },
      {
        "label": "Vacuum motor",
        "value": "500W"
      },
      {
        "label": "Vacuum degree",
        "value": "180mbar"
      },
      {
        "label": "Solution tank",
        "value": "50L"
      },
      {
        "label": "Recovery tank",
        "value": "55L"
      },
      {
        "label": "Sound level",
        "value": "68dB"
      },
      {
        "label": "Battery",
        "value": "2*12V 100Ah"
      },
      {
        "label": "Running time",
        "value": "3.5 Hrs"
      },
      {
        "label": "Gross weight",
        "value": "170kgs"
      },
      {
        "label": "Packing size",
        "value": "1270 X 670 x 1130mm"
      }
    ],
    "image": "/images/products/avico/avsd-55l.webp",
    "newArrival": true
  },
  {
    "code": "AVSD 50L",
    "name": "Walk-behind scrubber drier 50 L",
    "range": "floor-care",
    "group": "Walk-behind scrubber driers",
    "spec": "Battery / cable · 50 L · 510 mm",
    "summary": "A 510 mm walk-behind scrubber drier offered in battery (24V) and cable (220V) versions, cleaning up to 1,750 m²/h.",
    "features": [
      "Choice of 24V battery or 220V cable version",
      "1,750 m²/h cleaning rate with a 510 mm brush",
      "40 L clean and 50 L dirty water tanks",
      "755 mm squeegee leaves floors dry and safe to walk on"
    ],
    "specs": [
      {
        "label": "Cleaning width",
        "value": "510mm"
      },
      {
        "label": "Water sucker",
        "value": "755mm"
      },
      {
        "label": "Brush diameter",
        "value": "510mm"
      },
      {
        "label": "Brush rotation speed",
        "value": "210/160RPM"
      },
      {
        "label": "Sucking degree",
        "value": "140/180mbar"
      },
      {
        "label": "Floor motor power",
        "value": "550W/750W"
      },
      {
        "label": "Power of water sucking motor",
        "value": "500W/700W"
      },
      {
        "label": "Clean water tank capacity",
        "value": "40L/40L"
      },
      {
        "label": "Dirty water tank capacity",
        "value": "50L"
      },
      {
        "label": "Cleaning rate",
        "value": "1750m²/h"
      },
      {
        "label": "Battery",
        "value": "2*12V 10Ah"
      },
      {
        "label": "Voltage",
        "value": "24V/220V"
      },
      {
        "label": "Cable",
        "value": "— /18m"
      },
      {
        "label": "Size",
        "value": "125*63*95cm"
      },
      {
        "label": "Net weight",
        "value": "148kg/78kg"
      },
      {
        "label": "Gross weight",
        "value": "173kg/103kg"
      },
      {
        "label": "Colour",
        "value": "Blue-BLACK"
      }
    ],
    "image": "/images/products/avico/avsd-50l.webp",
    "newArrival": true
  },
  {
    "code": "AVSD 32L",
    "name": "Walk-behind scrubber drier 32 L",
    "range": "floor-care",
    "group": "Walk-behind scrubber driers",
    "spec": "Cable · 32 L · 455 mm",
    "summary": "A compact cable scrubber drier with a 455 mm path and 1,660 m²/h output for offices, clinics and retail floors.",
    "features": [
      "1,660 m²/h cleaning rate from a compact 455 mm footprint",
      "750W brush motor with 30 kg brush pressure",
      "1000W vacuum motor and 755 mm squeegee",
      "18 m cable for uninterrupted cleaning"
    ],
    "specs": [
      {
        "label": "Voltage/Frequency",
        "value": "220~230V/50Hz"
      },
      {
        "label": "Water sucker",
        "value": "755mm"
      },
      {
        "label": "Brush diameter",
        "value": "455mm"
      },
      {
        "label": "Rolling brush motor",
        "value": "200~240V/750W"
      },
      {
        "label": "Water sucking motor",
        "value": "220~230V/1000W"
      },
      {
        "label": "Brush rotation speed",
        "value": "148RPM"
      },
      {
        "label": "Cleaning width",
        "value": "455mm"
      },
      {
        "label": "Cleaning rate",
        "value": "1660m2/h"
      },
      {
        "label": "Brush pressures",
        "value": "30kg"
      },
      {
        "label": "Clean water tank capacity",
        "value": "27.8L"
      },
      {
        "label": "Dirty water tank capacity",
        "value": "31.3L"
      },
      {
        "label": "Cable",
        "value": "18m"
      },
      {
        "label": "Net weight",
        "value": "75.6kg"
      },
      {
        "label": "Gross weight",
        "value": "98.45kg"
      },
      {
        "label": "Size",
        "value": "965×615×1020mm"
      },
      {
        "label": "Colour",
        "value": "Blue, Grey, Yellow，Blue and Black"
      }
    ],
    "image": "/images/products/avico/avsd-32l.webp",
    "newArrival": true
  },
  {
    "code": "AVMS 40L",
    "name": "Manual sweeper 40 L",
    "range": "sweep-care",
    "group": "Manual & compact",
    "spec": "Hand push · 40 L",
    "summary": "A hand-push sweeper with a 70–92 cm sweeping path and a 40 L dust bin — no power, no charging, no training needed.",
    "features": [
      "Hand-push operation — no fuel, battery or cable",
      "70–92 cm cleaning width with double rotating brushes",
      "40 L dust tank",
      "Light 21 kg build, easy to move between sites"
    ],
    "specs": [
      {
        "label": "Work Mode",
        "value": "Hand Push"
      },
      {
        "label": "Cleaning width",
        "value": "70-92cm"
      },
      {
        "label": "Dust Tank capacity",
        "value": "40Liter"
      },
      {
        "label": "Net Weight",
        "value": "21kgs"
      },
      {
        "label": "Dimension",
        "value": "125*95*105cm"
      },
      {
        "label": "Packing specification",
        "value": "90.5*80*39.5cm"
      }
    ],
    "image": "/images/products/avico/avms-40l.webp",
    "newArrival": true
  },
  {
    "code": "AVS 690",
    "name": "Battery powered sweeper",
    "range": "sweep-care",
    "group": "Manual & compact",
    "spec": "Battery · Walk-behind · 1000 mm",
    "summary": "A battery powered walk-behind sweeper with twin side brushes — sweeps 1,000 mm per pass and up to 4,000 m²/h of dust and debris indoors and out.",
    "features": [
      "4,000 m²/h with a 1,000 mm sweeping width",
      "Main roller brush plus side brushes for edges",
      "About 5 hours per charge on a 12V 100Ah battery",
      "22 L debris bin"
    ],
    "specs": [
      {
        "label": "Battery",
        "value": "12V 100Ah"
      },
      {
        "label": "Running time",
        "value": "5 Hrs"
      },
      {
        "label": "Power",
        "value": "270W"
      },
      {
        "label": "Main brush length",
        "value": "400mm"
      },
      {
        "label": "Side brush diameter",
        "value": "400mm"
      },
      {
        "label": "Cleaning width",
        "value": "1000mm"
      },
      {
        "label": "Productivity",
        "value": "4000m²/h"
      },
      {
        "label": "Debris bin",
        "value": "22L"
      },
      {
        "label": "Optional water tank",
        "value": "12L"
      }
    ],
    "image": "/images/products/avico/avs-690.webp",
    "newArrival": true
  },
  {
    "code": "AVRSW",
    "name": "Ride-on sweeper",
    "range": "sweep-care",
    "group": "Battery ride-on sweepers",
    "spec": "Ride-on · Battery",
    "summary": "A battery electric ride-on sweeper with a drum main brush for large indoor and outdoor areas — warehouses, car parks, campuses and airports.",
    "features": [
      "Battery electric — quiet and emission-free",
      "Ride-on operation covers large areas quickly",
      "Drum-type main brush with lifting V-brush system",
      "Compact 1470 mm body for aisles and ramps"
    ],
    "specs": [
      {
        "label": "Power supply",
        "value": "Battery (DC)"
      },
      {
        "label": "Operation",
        "value": "Ride-on"
      },
      {
        "label": "Brush system",
        "value": "Lifting V-brush, drum type"
      },
      {
        "label": "Size",
        "value": "1470 × 960 × 1230mm"
      }
    ],
    "image": "/images/products/avico/avrsw.webp",
    "newArrival": true
  },
  {
    "code": "AVVC 80L-3",
    "name": "Vacuum cleaner 80 L — 3 motors",
    "range": "clean-care",
    "group": "Wet & dry vacuum cleaners",
    "spec": "Wet & dry · 80 L · 3 motors",
    "summary": "An 80 L industrial wet and dry vacuum available with two or three motors (2000W / 3000W) for heavy pick-up in factories, parking areas and after-flood work.",
    "features": [
      "Wet and dry pick-up with a 80 L tank",
      "Circulating air cooling for long duty cycles",
      "Up to 3000W and 159 L/s airflow on the 3-motor version",
      "250 mbar suction with 40 mm hose and 8 m cable"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "wet and dry"
      },
      {
        "label": "Capacity",
        "value": "80L"
      },
      {
        "label": "Power",
        "value": "2000W/3000W"
      },
      {
        "label": "Voltage",
        "value": "220V~240V"
      },
      {
        "label": "Height",
        "value": "107cm"
      },
      {
        "label": "Tank diameter",
        "value": "440mm"
      },
      {
        "label": "Mode of cooling",
        "value": "Circulating air cooling"
      },
      {
        "label": "Air flow rate",
        "value": "106L/S 159L/S"
      },
      {
        "label": "Vacuum suction",
        "value": "250mbar"
      },
      {
        "label": "Length of the cable",
        "value": "8m"
      },
      {
        "label": "Hose diameter",
        "value": "40mm"
      },
      {
        "label": "Packing",
        "value": "630*560*1140mm"
      },
      {
        "label": "Net weight",
        "value": "29kg/30.5kg"
      },
      {
        "label": "Gross weight",
        "value": "32kg/33.5kg"
      }
    ],
    "image": "/images/products/avico/avvc-80l-3.webp",
    "newArrival": true
  },
  {
    "code": "AVVC 60L-2",
    "name": "Vacuum cleaner 60 L — 2 motors",
    "range": "clean-care",
    "group": "Wet & dry vacuum cleaners",
    "spec": "Wet & dry · 60 L · 2 motors",
    "summary": "A 60 L twin-motor wet and dry vacuum — the all-round choice for commercial kitchens, workshops and large facilities.",
    "features": [
      "Wet and dry pick-up with a 60 L tank",
      "Circulating air cooling for long duty cycles",
      "2000W twin-motor (3000W three-motor option)",
      "250 mbar suction with 40 mm hose and 8 m cable"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "wet and dry"
      },
      {
        "label": "Capacity",
        "value": "60L"
      },
      {
        "label": "Power",
        "value": "2000W/3000W"
      },
      {
        "label": "Voltage",
        "value": "220V~240V"
      },
      {
        "label": "Height",
        "value": "97cm"
      },
      {
        "label": "Tank diameter",
        "value": "440mm"
      },
      {
        "label": "Mode of cooling",
        "value": "Circulating air cooling"
      },
      {
        "label": "Air flow rate",
        "value": "106L/S 159L/S"
      },
      {
        "label": "Vacuum suction",
        "value": "250mbar"
      },
      {
        "label": "Length of the cable",
        "value": "8m"
      },
      {
        "label": "Hose diameter",
        "value": "40mm"
      },
      {
        "label": "Packing",
        "value": "630*560*1040mm"
      },
      {
        "label": "Net weight",
        "value": "26kg/27.3kg"
      },
      {
        "label": "Gross weight",
        "value": "27kg/29kg"
      }
    ],
    "image": "/images/products/avico/avvc-60l-2.webp",
    "newArrival": true
  },
  {
    "code": "AVVC 30L",
    "name": "Vacuum cleaner 30 L",
    "range": "clean-care",
    "group": "Wet & dry vacuum cleaners",
    "spec": "Wet & dry · 30 L · 1000W",
    "summary": "A compact 30 L, 1000W wet and dry vacuum for offices, hotels and retail.",
    "features": [
      "Wet and dry pick-up with a 30 L tank",
      "Circulating air cooling for long duty cycles",
      "1000W motor with 230 mbar suction",
      "Light 11.8 kg body with 7 m cable"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "wet and dry"
      },
      {
        "label": "Capacity",
        "value": "30L"
      },
      {
        "label": "Power",
        "value": "1000W"
      },
      {
        "label": "Voltage",
        "value": "220V~240V"
      },
      {
        "label": "Height",
        "value": "78cm"
      },
      {
        "label": "Tank diameter",
        "value": "345mm"
      },
      {
        "label": "Mode of cooling",
        "value": "Circulating air cooling"
      },
      {
        "label": "Air flow rate",
        "value": "53L/S"
      },
      {
        "label": "Vacuum suction",
        "value": "230mbar"
      },
      {
        "label": "Length of the cable",
        "value": "7m"
      },
      {
        "label": "Hose diameter",
        "value": "40mm"
      },
      {
        "label": "Packing",
        "value": "410*410*815mm"
      },
      {
        "label": "Net weight",
        "value": "11.8kg"
      },
      {
        "label": "Gross weight",
        "value": "15.5kg"
      }
    ],
    "image": "/images/products/avico/avvc-30l.webp",
    "newArrival": true
  },
  {
    "code": "AVVC 15L",
    "name": "Vacuum cleaner 15 L",
    "range": "clean-care",
    "group": "Wet & dry vacuum cleaners",
    "spec": "Wet & dry · 15 L · 1000W",
    "summary": "A small 15 L wet and dry vacuum for rooms, cabins and vehicles.",
    "features": [
      "Wet and dry pick-up with a 15 L tank",
      "Circulating air cooling for long duty cycles",
      "1000W motor with 210 mbar suction",
      "Compact 58 cm height — easy to carry and store"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "wet and dry"
      },
      {
        "label": "Capacity",
        "value": "15L"
      },
      {
        "label": "Power",
        "value": "1000W"
      },
      {
        "label": "Voltage",
        "value": "220V~240V"
      },
      {
        "label": "Height",
        "value": "58cm"
      },
      {
        "label": "Tank diameter",
        "value": "345mm"
      },
      {
        "label": "Mode of cooling",
        "value": "Circulating air cooling"
      },
      {
        "label": "Air flow rate",
        "value": "48L/S"
      },
      {
        "label": "Vacuum suction",
        "value": "210mbar"
      },
      {
        "label": "Length of the cable",
        "value": "7m"
      },
      {
        "label": "Hose diameter",
        "value": "36mm"
      },
      {
        "label": "Packing",
        "value": "438*438*650mm/410*410*640mm"
      },
      {
        "label": "Net weight",
        "value": "14.4kg/13.9kg"
      },
      {
        "label": "Gross weight",
        "value": "15kg/14.5kg"
      }
    ],
    "image": "/images/products/avico/avvc-15l.webp",
    "newArrival": true
  },
  {
    "code": "AVBP",
    "name": "Backpack vacuum cleaner",
    "range": "clean-care",
    "group": "Backpack vacuum cleaners",
    "spec": "Backpack · 5 L · 1000W",
    "summary": "A 5 L backpack vacuum that frees both hands for stairs, cinemas, aircraft cabins, escalators and other tight spaces.",
    "features": [
      "Worn on the back with comfortable shoulder support",
      "1000W motor with a 5 L tank",
      "18 m cable for long runs",
      "Standard tool set for floor and high-level cleaning"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "Dry vacuum"
      },
      {
        "label": "Voltage",
        "value": "220V/50Hz"
      },
      {
        "label": "Motor power",
        "value": "1000W"
      },
      {
        "label": "Tank capacity",
        "value": "5L"
      },
      {
        "label": "Cable length",
        "value": "18m"
      },
      {
        "label": "Net weight",
        "value": "7.4kg"
      },
      {
        "label": "Gross weight",
        "value": "8.4kg"
      },
      {
        "label": "Packing",
        "value": "57.7×35.7×30cm"
      }
    ],
    "image": "/images/products/avico/avbp.webp",
    "newArrival": true
  },
  {
    "code": "AVSC",
    "name": "Steam cleaner",
    "range": "clean-care",
    "group": "Steam cleaning",
    "spec": "3-in-1 · Spray, scrub, extract",
    "summary": "A three-in-one steam carpet cleaning machine that sprays hot solution deep into the pile, scrubs with a 600 rpm roller brush and extracts the dirty water in a single walk-behind pass.",
    "features": [
      "High-pressure spray reaches the base of the carpet to dissolve stubborn stains",
      "600 rpm roller brush lifts and opens matted fibres",
      "1000W extraction leaves carpets fast-drying",
      "Up to 1,800 m² per run with a 12 m cable"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "220V-240V / 50Hz"
      },
      {
        "label": "Roller brush motor",
        "value": "24V DC / 180W"
      },
      {
        "label": "Spray motor",
        "value": "24V DC / 36W"
      },
      {
        "label": "Vacuum motor",
        "value": "1000W"
      },
      {
        "label": "Roller brush diameter",
        "value": "90mm"
      },
      {
        "label": "Clean water tank",
        "value": "30.2L"
      },
      {
        "label": "Recovery tank",
        "value": "28.3L"
      },
      {
        "label": "Air flow rate",
        "value": "2880L/min"
      },
      {
        "label": "Coverage",
        "value": "1800m²"
      },
      {
        "label": "Cable",
        "value": "12m"
      },
      {
        "label": "Net weight",
        "value": "46kg"
      },
      {
        "label": "Gross weight",
        "value": "65kg"
      },
      {
        "label": "Packing",
        "value": "1250 × 500 × 950mm"
      }
    ],
    "image": "/images/products/avico/avsc.webp",
    "newArrival": true
  },
  {
    "code": "AVPW 4HP",
    "name": "Pressure washer 4HP",
    "range": "clean-care",
    "group": "High-pressure washers",
    "spec": "Cold water · 4HP",
    "summary": "A 4HP mobile cold-water high-pressure washer for vehicles, yards, facades and heavy equipment.",
    "features": [
      "Higher-output 4HP pump for tough outdoor dirt",
      "Motor-driven cold-water system",
      "Mobile frame with large wheels",
      "Round water-column nozzle for focused cleaning"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Cold water high-pressure cleaner"
      },
      {
        "label": "Power",
        "value": "4HP"
      },
      {
        "label": "Drive",
        "value": "Motor"
      },
      {
        "label": "Operation",
        "value": "Mobile"
      },
      {
        "label": "Nozzle",
        "value": "Round water column"
      },
      {
        "label": "Dimensions",
        "value": "760 × 550 × 540 mm"
      }
    ],
    "image": "/images/products/avico/avpw-4hp.webp",
    "newArrival": true
  },
  {
    "code": "AVPW 3HP",
    "name": "Pressure washer 3HP",
    "range": "clean-care",
    "group": "High-pressure washers",
    "spec": "Cold water · 3HP",
    "summary": "A 3HP (3.0 kW) mobile cold-water high-pressure washer for car washes, workshops and outdoor cleaning.",
    "features": [
      "3.0 kW motor-driven pump",
      "Double water-seal structure for longer pump life",
      "Compact, mobile frame — easy to move and operate",
      "Suitable for vehicle washing and commercial use"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Cold water high-pressure cleaner"
      },
      {
        "label": "Power",
        "value": "3.0 kW"
      },
      {
        "label": "Drive",
        "value": "Motor"
      },
      {
        "label": "Operation",
        "value": "Mobile"
      },
      {
        "label": "Nozzle",
        "value": "Round water column"
      },
      {
        "label": "Dimensions",
        "value": "760 × 550 × 540 mm"
      }
    ],
    "image": "/images/products/avico/avpw-3hp.webp",
    "newArrival": true
  },
  {
    "code": "AVEC 450",
    "name": "Escalator cleaner",
    "range": "clean-care",
    "group": "Escalator cleaners",
    "spec": "Escalator · 450 mm · 1180W",
    "summary": "A dedicated escalator and travelator cleaner with a 450 mm working width — scrubs and vacuums the grooves of steps and pallets in one pass for malls, metro stations and airports.",
    "features": [
      "450 mm operating width matched to escalator steps",
      "1000W vacuum motor lifts dirt out of the grooves",
      "Rolling brush driven by a 24V 180W motor",
      "20 L tank and 12 m cable for continuous work"
    ],
    "specs": [
      {
        "label": "Voltage",
        "value": "220V-240V / 50Hz"
      },
      {
        "label": "Power",
        "value": "1180W"
      },
      {
        "label": "Operating width",
        "value": "450mm"
      },
      {
        "label": "Vacuum motor",
        "value": "220VAC / 1000W"
      },
      {
        "label": "Roll brush motor",
        "value": "24V / 180W"
      },
      {
        "label": "Tank capacity",
        "value": "20L"
      },
      {
        "label": "Cable",
        "value": "12m"
      },
      {
        "label": "Gross weight",
        "value": "40.2kg"
      },
      {
        "label": "Packing",
        "value": "950 × 540 × 310mm"
      },
      {
        "label": "Insulation",
        "value": "Grade I"
      }
    ],
    "image": "/images/products/avico/avec-450.webp",
    "newArrival": true
  },
  {
    "code": "AVAC",
    "name": "Air compressor 50 L",
    "range": "clean-care",
    "group": "Air compressors",
    "spec": "Electric · 50 L tank",
    "summary": "An industrial electric air compressor with a 50 L mild-steel tank for spray painting, grinding, sanding and workshop air tools.",
    "features": [
      "50 L tank for continuous operation",
      "Mild-steel industrial construction",
      "Runs on 240V electric supply",
      "12-month warranty"
    ],
    "specs": [
      {
        "label": "Usage",
        "value": "Industrial"
      },
      {
        "label": "Power source",
        "value": "Electric"
      },
      {
        "label": "Voltage",
        "value": "240V"
      },
      {
        "label": "Tank capacity",
        "value": "50 L"
      },
      {
        "label": "Material",
        "value": "Mild steel"
      },
      {
        "label": "Warranty",
        "value": "12 months"
      }
    ],
    "image": "/images/products/avico/avac.webp",
    "newArrival": true
  },
  {
    "code": "AVCC 40L",
    "name": "Carpet cleaner 40 L",
    "range": "carpet-care",
    "group": "Extraction & drying",
    "spec": "Extraction · 40 L",
    "summary": "A 40 L spray-extraction carpet cleaner for hotels, offices and cinemas — deep cleans carpets and upholstery in one pass.",
    "features": [
      "Spray-extraction: injects solution and recovers dirty water in one pass",
      "34W pump at 87 PSI with a 10 L clean-water tank",
      "1000W vacuum motor with 230 mbar suction",
      "40 L recovery tank, 7 m cable and 40 mm hose"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "Carpet cleaner"
      },
      {
        "label": "Capacity",
        "value": "40L"
      },
      {
        "label": "Power",
        "value": "1034W"
      },
      {
        "label": "Clean Water Capacity",
        "value": "10L"
      },
      {
        "label": "Voltage",
        "value": "220V-240V"
      },
      {
        "label": "Power of water pump",
        "value": "34W"
      },
      {
        "label": "Power of vacuum motor",
        "value": "1000W"
      },
      {
        "label": "Height",
        "value": "89cm"
      },
      {
        "label": "Tank diameter",
        "value": "Φ335mm"
      },
      {
        "label": "Mode of cooling",
        "value": "Circulating air cooling"
      },
      {
        "label": "Air flow rate",
        "value": "53L/S"
      },
      {
        "label": "Vacuum suction",
        "value": "230mbar"
      },
      {
        "label": "Length of the cable",
        "value": "7m"
      },
      {
        "label": "Hose diameter",
        "value": "Φ40mm"
      },
      {
        "label": "Packing",
        "value": "455*410*920mm"
      },
      {
        "label": "Net weight",
        "value": "17.6kg"
      },
      {
        "label": "Gross weight",
        "value": "18.6kg"
      },
      {
        "label": "Hose gross weight",
        "value": "5.2kg"
      },
      {
        "label": "Pressures",
        "value": "87PSI"
      },
      {
        "label": "Colour",
        "value": "Black"
      }
    ],
    "image": "/images/products/avico/avcc-40l.webp",
    "newArrival": true
  },
  {
    "code": "AVCC 20L",
    "name": "Carpet cleaner 20 L",
    "range": "carpet-care",
    "group": "Extraction & drying",
    "spec": "Extraction · 20 L",
    "summary": "A compact 20 L spray-extraction carpet cleaner for smaller carpeted areas, cabins and upholstery.",
    "features": [
      "Spray-extraction: injects solution and recovers dirty water in one pass",
      "34W pump at 87 PSI with a 10 L clean-water tank",
      "1000W vacuum motor with 230 mbar suction",
      "20 L recovery tank, 7 m cable and 40 mm hose"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "Carpet cleaner"
      },
      {
        "label": "Capacity",
        "value": "20L"
      },
      {
        "label": "Power",
        "value": "1034W"
      },
      {
        "label": "Clean Water Capacity",
        "value": "10L"
      },
      {
        "label": "Voltage",
        "value": "220V-240V"
      },
      {
        "label": "Power of water pump",
        "value": "34W"
      },
      {
        "label": "Power of vacuum motor",
        "value": "1000W"
      },
      {
        "label": "Height",
        "value": "72cm"
      },
      {
        "label": "Tank diameter",
        "value": "Φ335mm"
      },
      {
        "label": "Mode of cooling",
        "value": "Circulating air cooling"
      },
      {
        "label": "Air flow rate",
        "value": "53L/S"
      },
      {
        "label": "Vacuum suction",
        "value": "230mbar"
      },
      {
        "label": "Length of the cable",
        "value": "7m"
      },
      {
        "label": "Hose diameter",
        "value": "Φ40mm"
      },
      {
        "label": "Packing",
        "value": "455*410*755mm"
      },
      {
        "label": "Net weight",
        "value": "15.5kg"
      },
      {
        "label": "Gross weight",
        "value": "17.3kg"
      },
      {
        "label": "Hose gross weight",
        "value": "5.2kg"
      },
      {
        "label": "Pressures",
        "value": "87PSI"
      },
      {
        "label": "Colour",
        "value": "Black"
      }
    ],
    "image": "/images/products/avico/avcc-20l.webp",
    "newArrival": true
  },
  {
    "code": "AVCS 730SF",
    "name": "Carpet and sofa cleaner",
    "range": "carpet-care",
    "group": "Extraction & drying",
    "spec": "Carpet & sofa · 60 L · 2087W",
    "summary": "A carpet and sofa extraction cleaner with a powered scrubbing brush — deep cleans upholstery, carpets and fabric seating for hotels, offices and cinemas.",
    "features": [
      "Spray, scrub and extract in one pass",
      "2000W vacuum motor with 250 mbar suction",
      "20 L clean-water and 60 L recovery tanks",
      "Powered 12V brush head for upholstery and stairs"
    ],
    "specs": [
      {
        "label": "Function",
        "value": "Carpet & sofa cleaner"
      },
      {
        "label": "Total power",
        "value": "2087W"
      },
      {
        "label": "Working power",
        "value": "220V / 50Hz"
      },
      {
        "label": "Vacuum motor",
        "value": "2000W"
      },
      {
        "label": "Vacuum suction",
        "value": "250mbar"
      },
      {
        "label": "Pump power",
        "value": "34W"
      },
      {
        "label": "Brush motor",
        "value": "12V / 45W"
      },
      {
        "label": "Clean water tank",
        "value": "20L"
      },
      {
        "label": "Recovery tank",
        "value": "60L"
      }
    ],
    "image": "/images/products/avico/avcs-730sf.webp",
    "newArrival": true
  },
  {
    "code": "AVCB",
    "name": "Carpet blower",
    "range": "carpet-care",
    "group": "Extraction & drying",
    "spec": "Air mover · 900W · 3-speed",
    "summary": "A 3-speed carpet blower / air mover that dries carpets and floors quickly after extraction or wet cleaning, so areas return to use sooner.",
    "features": [
      "Three speeds — up to 160 m³/min airflow",
      "900W motor on standard 220–240V supply",
      "Compact stackable body with carry handle",
      "7 m cable"
    ],
    "specs": [
      {
        "label": "Power",
        "value": "900W"
      },
      {
        "label": "Voltage",
        "value": "220V-240V"
      },
      {
        "label": "Speeds",
        "value": "High / medium / low"
      },
      {
        "label": "Air flow rate",
        "value": "160 / 130 / 110 m³/min"
      },
      {
        "label": "Cable",
        "value": "7m"
      },
      {
        "label": "Gross weight",
        "value": "17.5kg"
      },
      {
        "label": "Size",
        "value": "500 × 410 × 530mm"
      }
    ],
    "image": "/images/products/avico/avcb.webp",
    "newArrival": true
  }
];
