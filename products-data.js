const products = [
  // Mixed set 1
  {
    id: 1,
    name: "Smart Microwave 25L",
    brand: "Haier",
    category: "Microwave",
    price: 299.99,
    image: "https://media.istockphoto.com/id/489937746/photo/microwave-stove-isolated.jpg?s=612x612&w=0&k=20&c=vUi8YaHdjDvVHJPXCcYHrWkELl1l8GLpGTg2hUl35V4=",
    description: "The Haier Smart Microwave 25L features intuitive touch controls and precise heating. Perfect for quick, even cooking with minimal energy use."
  },
  {
    id: 4,
    name: "CoolTech Double Door Refrigerator",
    brand: "Haier",
    category: "Refrigerator",
    price: 1299.99,
    image: "https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/saudi-arabia/products/refrigerator/trf-620wexpu/1.jpg?t=1683182590541&w=800&webp=undefined&dpr=2.625&rendition=1068",
    description: "Haier CoolTech Refrigerator offers large storage, even cooling, and a stylish double-door design for family kitchens."
  },
  {
    id: 7,
    name: "Split Air Conditioner 1.5 Ton",
    brand: "Haier",
    category: "Air Conditioner",
    price: 699.99,
    image: "https://thumbs.dreamstime.com/b/set-air-conditioner-ac-inverter-heat-pump-mini-split-system-indoor-outdoor-unit-remote-control-isolated-white-152040641.jpg",
    description: "Haier Split AC delivers powerful cooling and energy efficiency, ideal for medium-sized rooms."
  },

  // Mixed set 2
  {
    id: 2,
    name: "Digital Microwave Pro",
    brand: "TCL",
    category: "Microwave",
    price: 349.99,
    image: "https://t4.ftcdn.net/jpg/00/35/03/01/360_F_35030185_4f0JQTIWSQqAH2GQdMYBVFeeF2JK8Z72.jpg",
    description: "The TCL Digital Microwave Pro brings professional-grade performance with sleek design and advanced cooking modes for all meal types."
  },
  {
    id: 8,
    name: "Inverter Air Conditioner 2 Ton",
    brand: "TCL",
    category: "Air Conditioner",
    price: 899.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeupqMHxUU_CVw9TdQEi9TlnC-k8QY8ipqdw&s",
    description: "TCL Inverter AC 2 Ton provides high performance with advanced inverter technology and ultra-quiet operation."
  },
  {
    id: 6,
    name: "IceVault 280L Smart Refrigerator",
    brand: "Samsung",
    category: "Refrigerator",
    price: 999.99,
    image: "fridge2.png",
    description: "Samsung IceVault 280L Smart Refrigerator includes smart sensors and Wi-Fi connectivity for modern convenience."
  },

  // Mixed set 3
  {
    id: 3,
    name: "Compact Microwave",
    brand: "Samsung",
    category: "Microwave",
    price: 199.99,
    image: "https://media.istockphoto.com/id/148166172/photo/microwave-oven.jpg?s=612x612&w=0&k=20&c=ykBKo_HdgZ7VeUSh-Qfa1EL2S6UPdLuz3VRMAK8Bv08=",
    description: "Samsung Compact Microwave offers quick heating in a small package, ideal for apartments and small kitchens."
  },
  {
    id: 9,
    name: "Window Air Conditioner 1 Ton",
    brand: "Samsung",
    category: "Air Conditioner",
    price: 499.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWRnxz8g4ejuTSE0elRjuzu1iHw7BTlC-oR9NR3lis9XxX1tsFTWr2RtUzDeTnyaEluw&usqp=CAU",
    description: "Samsung Window AC 1 Ton offers efficient cooling with easy installation and minimal maintenance."
  },
  {
    id: 5,
    name: "FrostFree 400L Digital Refrigerator",
    brand: "TCL",
    category: "Refrigerator",
    price: 1599.99,
    image: "fridge.png",
    description: "TCL FrostFree 400L keeps food fresh with multi-airflow cooling, digital temperature control, and a sleek finish."
  },

  // Mixed set 4
  {
    id: 10,
    name: "Convection Microwave",
    brand: "Haier",
    category: "Microwave",
    price: 399.99,
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/mc28h5025vr-tl/gallery/in-28-litre-convection-microwave-oven-mc28h5025vk-274424-mc28h5025vr-tl-530434682?$684_547_PNG$",
    description: "Haier’s Convection Microwave combines baking, grilling, and reheating options for a true all-in-one cooking solution."
  },
  {
    id: 14,
    name: "Side by Side Fridge",
    brand: "TCL",
    category: "Refrigerator",
    price: 349.99,
    image: "fridge4.png",
    description: "The TCL Side by Side Fridge features generous space, modern styling, and dual cooling technology for maximum freshness."
  },
  {
    id: 18,
    name: "ESmart Plus 1.5 Ton DC Inverter AC",
    brand: "Samsung",
    category: "Air Conditioner",
    price: 999.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWRnxz8g4ejuTSE0elRjuzu1iHw7BTlC-oR9NR3lis9XxX1tsFTWr2RtUzDeTnyaEluw&usqp=CAU",
    description: "Samsung ESmart Plus 1.5 Ton DC Inverter AC delivers fast cooling and smart energy control with Wi-Fi connectivity."
  },

  // Mixed set 5
  {
    id: 11,
    name: "QuickHeat 25L Solo Microwave",
    brand: "TCL",
    category: "Microwave",
    price: 849.99,
    image: "https://www.anex.pk/cdn/shop/files/ag-9028-deluxe-microwave-oven-1.jpg?v=1719743151&width=1946",
    description: "TCL QuickHeat 25L delivers fast, consistent heating for daily meals with energy-efficient technology and a stylish design."
  },
  {
    id: 13,
    name: "Smart Refrigerator",
    brand: "Haier",
    category: "Refrigerator",
    price: 299.99,
    image: "fridge3.png",
    description: "Haier Smart Refrigerator adapts to your lifestyle with temperature sensors and an eco-friendly design."
  },
  {
    id: 26,
    name: "DualCool 1.5 Ton Fast Cooling AC",
    brand: "TCL",
    category: "Air Conditioner",
    price: 549.99,
    image: "https://static.tossdown.com/images/3aa61144-afb2-4560-bfbb-93bcb6c8f854.webp",
    description: "TCL DualCool 1.5 Ton AC offers rapid cooling performance with dual inverter technology and energy-saving design."
  },

  // Mixed set 6
  {
    id: 12,
    name: "ChefPro 30L Grill Microwave",
    brand: "Samsung",
    category: "Microwave",
    price: 549.99,
    image: "https://powerhouseexpress.com.pk/cdn/shop/files/haier-hmw-30afr-air-fryer-series-microwave-oven2_53f46f82-6039-4255-b0dd-8b18ba184981.webp?v=1749689663&width=1445",
    description: "Samsung ChefPro 30L Grill Microwave gives precision control for grilling, defrosting, and reheating with modern style."
  },
  {
    id: 22,
    name: "FreshZone No-Frost Refrigerator",
    brand: "Haier",
    category: "Refrigerator",
    price: 399.99,
    image: "fridge6.png",
    description: "Haier FreshZone Refrigerator ensures frost-free cooling with humidity balance for longer-lasting food freshness."
  },
  {
    id: 17,
    name: "EcoStar 1 Ton Split AC",
    brand: "TCL",
    category: "Air Conditioner",
    price: 1599.99,
    image: "https://electromart.com.pk/wp-content/uploads/2024/07/IMG_7212.png",
    description: "TCL EcoStar 1 Ton Split AC features smart sensors and efficient airflow to provide uniform cooling comfort."
  },

  // Mixed set 7
  {
    id: 19,
    name: "AirWave 26L Grill Microwave",
    brand: "Haier",
    category: "Microwave",
    price: 699.99,
    image: "https://i0.wp.com/mns.com.pk/wp-content/uploads/2020/04/45100egb.jpg?fit=400%2C400&ssl=1",
    description: "Haier AirWave 26L Grill Microwave combines rapid heating with grilling performance, ideal for busy kitchens."
  },
  {
    id: 15,
    name: "French Door Refrigerator",
    brand: "Samsung",
    category: "Refrigerator",
    price: 199.99,
    image: "fridge5.png",
    description: "Samsung French Door Refrigerator blends premium design with digital inverter cooling and smart storage compartments."
  },
  {
    id: 25,
    name: "Ultron Supreme 1.5 Ton Inverter AC",
    brand: "Haier",
    category: "Air Conditioner",
    price: 549.99,
    image: "https://i0.wp.com/acs-installations.co.uk/wp-content/uploads/2022/03/Air-vs-water-cooled-ac-2.png",
    description: "Haier Ultron Supreme 1.5 Ton AC provides efficient cooling with silent inverter operation and modern aesthetics."
  },

  // Mixed set 8
  {
    id: 20,
    name: "ClassicHeat 22L Solo Microwave",
    brand: "TCL",
    category: "Microwave",
    price: 899.99,
    image: "https://static.vecteezy.com/system/resources/thumbnails/065/461/484/small/a-microwave-oven-is-shown-on-a-white-background-photo.jpg",
    description: "The TCL ClassicHeat 22L offers simple operation and durable construction for effortless everyday use."
  },
  {
    id: 23,
    name: "Top Freezer Fridge",
    brand: "TCL",
    category: "Refrigerator",
    price: 849.99,
    image: "fridge7.png",
    description: "TCL Top Freezer Fridge offers reliability and energy efficiency, perfect for daily family use."
  },
  {
    id: 27,
    name: "1.5 Ton Digital Inverter AC",
    brand: "Samsung",
    category: "Air Conditioner",
    price: 549.99,
    image: "https://static.tossdown.com/images/1ed3a81d-7e9f-4370-9829-226f8bf1afab.webp",
    description: "Samsung Digital Inverter AC ensures stable temperature, low noise, and smart cooling performance."
  },

  // Mixed set 9
  {
    id: 21,
    name: "TurboHeat 27L Microwave Oven",
    brand: "Samsung",
    category: "Microwave",
    price: 499.99,
    image: "https://png.pngtree.com/png-vector/20240722/ourmid/pngtree-automatic-appliances-microwaves-png-image_13213845.png",
    description: "Samsung TurboHeat 27L delivers quick cooking and defrosting with advanced temperature precision for modern homes."
  },
  {
    id: 24,
    name: "SmartChill 360L Refrigerator",
    brand: "Samsung",
    category: "Refrigerator",
    price: 549.99,
    image: "fridge8.jpg",
    description: "Samsung SmartChill 360L Refrigerator keeps your food fresh with AI-assisted cooling and precise humidity control."
  },
  {
    id: 16,
    name: "TurboCool 1.5 Ton Inverter AC",
    brand: "Haier",
    category: "Air Conditioner",
    price: 1299.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRU-A_4hZaJ2hjxy51oO1SYStSghfhmV53Q&s",
    description: "Haier TurboCool Inverter AC ensures instant cooling and durability, even in extreme heat conditions."
  }
];
