import { Order } from "../ModelsTypes/ModelsTypes";

export const orders: Order[] = [
  {
    id: crypto.randomUUID(),
    name: "Sopa wantán",
    description: "Sopa con fideos wantanes rellenos de carne.",
    date: "2024-01-01",
    image:
      "https://cdn-images-chwk-prod.s3.amazonaws.com/media/recipemanager/recipe/1691007809_wantan.jpg",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "wantán",
        description: "wantán cocinado",
        price: 50,
        image:
          "https://cdn-images-chwk-prod.s3.amazonaws.com/media/recipemanager/recipe/1691007809_wantan.jpg",
      },
      {
        id: crypto.randomUUID(),
        name: "Caldo",
        description: "Caldo aromático",
        price: 70,
        image:
          "https://cdn-images-chwk-prod.s3.amazonaws.com/media/recipemanager/recipe/1691007809_wantan.jpg",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Dario",
      lastname: "Tarazona",
      email: "",
    },
    quantity: 3,
    price: 36.0,
  },
  {
    id: crypto.randomUUID(),
    name: "Arroz chaufa",
    description: "Arroz frito estilo gastronómico tusán.",
    date: "2024-01-02",
    image:
      "https://static01.nyt.com/images/2023/06/08/multimedia/hew-arroz-chaufa-zmbt/hew-arroz-chaufa-zmbt-mediumThreeByTwo440.jpg",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Arroz",
        description: "Arroz chifa.",
        price: 80,
        image:
          "https://static01.nyt.com/images/2023/06/08/multimedia/hew-arroz-chaufa-zmbt/hew-arroz-chaufa-zmbt-mediumThreeByTwo440.jpg",
      },
      {
        id: crypto.randomUUID(),
        name: "Kitchen",
        description: "Trozos de pollo.",
        price: 120,
        image:
          "https://static01.nyt.com/images/2023/06/08/multimedia/hew-arroz-chaufa-zmbt/hew-arroz-chaufa-zmbt-mediumThreeByTwo440.jpg",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Pedro",
      lastname: "Roco",
      email: "",
    },
    quantity: 1,
    price: 15.0,
  },
  {
    id: crypto.randomUUID(),
    name: "Aeropuerto",
    description: "Arroz chaufa + tallarín saltado.",
    date: "2024-01-03",
    image:
      "https://www.comedera.com/wp-content/uploads/2022/05/aereopuero-receta-peruana.jpg",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Arroz",
        description: "Arroz chifa con tallarin",
        price: 100,
        image:
          "https://www.comedera.com/wp-content/uploads/2022/05/aereopuero-receta-peruana.jpg",
      },
      {
        id: crypto.randomUUID(),
        name: "Tallarin",
        description: "Tallarin saltado.",
        price: 200,
        image:
          "https://www.comedera.com/wp-content/uploads/2022/05/aereopuero-receta-peruana.jpg",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Carmen",
      lastname: "Zapata",
      email: "carmen@gmail.com",
    },
    quantity: 2,
    price: 34.0,
  },
  {
    id: crypto.randomUUID(),
    name: "Kamlu wantán",
    description: "Especial por lo salado y dulce.",
    date: "2024-01-04",
    image:
      "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1001028.jpg",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Arroz Chaufa",
        description: "Arroz frito estilo gastronómico tusán",
        price: 10,
        image:
          "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1001028.jpg",
      },
      {
        id: crypto.randomUUID(),
        name: "Tamarindo",
        description: "Manjar especial y recurrente de la comida china",
        price: 3,
        image:
          "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1001028.jpg",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Christian",
      lastname: "Montoya",
      email: "montoya@gmail.com",
    },
    quantity: 2,
    price: 40.0,
  },
  {
    id: crypto.randomUUID(),
    name: "Chaufa de langostinos",
    description: "Base de langostinos de mar.",
    date: "2024-01-05",
    image:
      "https://www.comedera.com/wp-content/uploads/2022/02/arroz-chaufa-de-mariscos.jpg",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Chaufa",
        description: "Arroz frito especial.",
        price: 10,
        image:
          "https://www.comedera.com/wp-content/uploads/2022/02/arroz-chaufa-de-mariscos.jpg",
      },
      {
        id: crypto.randomUUID(),
        name: "Langostinos",
        description: "Exquisitos de mar.",
        price: 10,
        image:
          "https://www.comedera.com/wp-content/uploads/2022/02/arroz-chaufa-de-mariscos.jpg",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Abel",
      lastname: "Perez",
      email: "abelillo@gmail.com",
    },
    quantity: 1,
    price: 18.0,
  },

  {
    id: crypto.randomUUID(),
    name: "Chijaukay",
    description:
      "Elaborado con muslos del pollo sin huesos.",
    date: "2024-01-06",
    image:
      "https://comida-peruana.net/wp-content/uploads/2019/04/receta-de-pollo-chi-jau-kay.webp",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Pollo especial",
        description: "Pollo deshuesado, cortado en trozos pequeños",
        price: 10,
        image:
          "https://comida-peruana.net/wp-content/uploads/2019/04/receta-de-pollo-chi-jau-kay.webp",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Sofi",
      lastname: "Rojas",
      email: "sofia@gmail.com",
    },
    quantity: 2,
    price: 40,
  },

  /************** */

  {
    id: crypto.randomUUID(),
    name: "Chijaukay",
    description:
      "Elaborado con muslos del pollo sin huesos.",
    date: "2024-01-06",
    image:
      "https://comida-peruana.net/wp-content/uploads/2019/04/receta-de-pollo-chi-jau-kay.webp",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Pollo especial",
        description: "Pollo deshuesado, cortado en trozos pequeños",
        price: 10,
        image:
          "https://comida-peruana.net/wp-content/uploads/2019/04/receta-de-pollo-chi-jau-kay.webp",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Sofi",
      lastname: "Rojas",
      email: "sofia@gmail.com",
    },
    quantity: 2,
    price: 40,
  },

];





export const ORDERSTATUS = {
  PENDING: "pending",
  IN_PROCESS: "in process",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const;

export const FILTER_ALL = "all" as const;

export const FILTERS_BUTTONS = {
  [FILTER_ALL]: {
    label: "Todo",
    value: FILTER_ALL,
  },
  [ORDERSTATUS.PENDING]: {
    label: "Pendiente",
    value: ORDERSTATUS.PENDING,
  },
  [ORDERSTATUS.IN_PROCESS]: {
    label: "En proceso",
    value: ORDERSTATUS.IN_PROCESS,
  },
  [ORDERSTATUS.COMPLETED]: {
    label: "Completado",
    value: ORDERSTATUS.COMPLETED,
  },
  [ORDERSTATUS.CANCELLED]: {
    label: "Cancelado",
    value: ORDERSTATUS.CANCELLED,
  },
} as const;

export const NEW_ORDER = {
  id: crypto.randomUUID(),
  name: "Tipakay",
  description: "Platillo opuesto al Chijaukay",
  date: "2024-01-07",
  image: 'https://pbs.twimg.com/media/FTnlRDtXwAAn7KR.jpg',
  status: "pending",
  products: [
    {
      id: crypto.randomUUID(),
      name: "Combinacion perfecta",
      description: "Pollo salado y cortado en trozos pequeños",
      price: 15,
      image: "https://pbs.twimg.com/media/FTnlRDtXwAAn7KR.jpg",
    },
  ],
  user: {
    id: crypto.randomUUID(),
    name: "Trejo",
    lastname: "Urquia",
    email: "",
  },
  quantity: 1,
  price: 20.00,
}
