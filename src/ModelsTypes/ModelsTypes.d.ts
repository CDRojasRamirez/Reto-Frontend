// import { ORDERSTATUS, FILTER_ALL } from "../Data/Data";

import { ORDERSTATUS } from "../Data/Data";

export type Order = {
  id: string;
  name: string;
  description: string;
  date: string;
  image: string;
  status: OrderStatusType;
  products: Product[];
  user: User;
  quantity: number;
  price: number;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
}

export type OrderStatusType = ORDERSTATUS.PENDING | ORDERSTATUS.IN_PROCESS | ORDERSTATUS.COMPLETED | ORDERSTATUS.CANCELLED

export type FilterType = FILTER_ALL | OrderStatusType
