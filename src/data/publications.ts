
export interface Publication {
  id: number;
  title: string;
  authors: string;
  source: string;
  year: number;
  doi?: string;
  citations?: number;
  type: 'journal' | 'conference' | 'book' | 'thesis' | 'other';
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "VTOL UAV digital twin for take-off, hovering and landing in different wind conditions",
    authors: "Aláez, D., Olaz, X., Prieto, M., Villadangos, J., Astrain, J.J.",
    source: "Simulation Modelling Practice and Theory 123, 102703",
    year: 2023,
    citations: 41,
    type: "journal"
  },
  {
    id: 2,
    title: "Quadcopter neural controller for take-off and landing in windy environments",
    authors: "Olaz, X., Aláez, D., Prieto, M., Villadangos, J., Astrain, J.J.",
    source: "Expert Systems with Applications 225, 120146",
    year: 2023,
    citations: 15,
    type: "journal"
  },
  {
    id: 3,
    title: "Hil flight simulator for vtol-UAV pilot training using X-plane",
    authors: "Aláez, D., Olaz, X., Prieto, M., Porcellinis, P., Villadangos, J.",
    source: "Information 13 (12), 585",
    year: 2022,
    citations: 12,
    type: "journal"
  },
  {
    id: 4,
    title: "Digital twin modeling of open category UAV radio communications: A case study",
    authors: "Aláez, D., Lopez-Iturri, P., Celaya-Echarri, M., Azpilicueta, L., Falcone, F.",
    source: "Computer Networks 242, 110276",
    year: 2024,
    citations: 6,
    type: "journal"
  },
  {
    id: 5,
    title: "UAVradio: Radio link path loss estimation for UAVs",
    authors: "Aláez, D., Celaya-Echarri, M., Azpilicueta, L., Villadangos, J.",
    source: "SoftwareX 25, 101628",
    year: 2024,
    citations: 4,
    type: "journal"
  },
  {
    id: 6,
    title: "Real-time object geopositioning from monocular target detection/tracking for aerial cinematography",
    authors: "Aláez, D., Mygdalis, V., Villadangos, J., Pitas, I.",
    source: "2023 IEEE 25th International Workshop on Multimedia Signal Processing (MMSP)",
    year: 2023,
    citations: 2,
    type: "conference"
  },
  {
    id: 7,
    title: "Surrogate modeling of aerodynamic coefficients for Unmanned Aerial Vehicle design",
    authors: "Aláez, D., Villadangos, J.",
    source: "2023 18th Iberian Conference on Information Systems and Technologies (CISTI)",
    year: 2023,
    citations: 1,
    type: "conference"
  },
  {
    id: 8,
    title: "Uav Digital Twin Open-Source Framework: Case of Study Remote Sensing in the Andean Mountains",
    authors: "Valencia, E., Toapanta, F., Oña, G., Carrillo, A., Alaez, D., Loyaga, E.",
    source: "Available at SSRN 4778454",
    year: 2022,
    citations: 1,
    type: "other"
  },
  {
    id: 9,
    title: "Towards a Heat-Resistant Tethered Micro-Aerial Vehicle for Structure Fire Sensing",
    authors: "Aláez, D., Prieto, M., Villadangos, J., Astrain, J.J.",
    source: "Applied Sciences 15 (5), 2388",
    year: 2025,
    type: "journal"
  },
  {
    id: 10,
    title: "On Constructing Efficient UAV Aerodynamic Surrogate Models for Digital Twins",
    authors: "Aláez, D., Prieto, M., Villadangos, J., Astrain, J.J.",
    source: "IEEE Transactions on Industrial Informatics",
    year: 2024,
    type: "journal"
  },
  {
    id: 11,
    title: "Digital twin development for VTOL UAVs",
    authors: "Aláez, D.",
    source: "Universidad Pública de Navarra",
    year: 2024,
    type: "thesis"
  },
  {
    id: 12,
    title: "Democratización de la investigación en aeronáutica: experiencia educativa con túneles de viento de múltiples ventiladores",
    authors: "Aláez Gómez, D.",
    source: "Educación y conocimiento como ejes del pensamiento crítico, 25",
    year: 2024,
    type: "other"
  }
];
