import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../ModelsTypes/ModelsTypes";
import { orders, ORDERSTATUS } from "../../Data/Data";

const initialState: Array<Order> = orders;

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
    },

    addStatusToProcess: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload);
      if (order) {
        order.status = ORDERSTATUS.IN_PROCESS;
      }
    },

    addStatusToCompleted: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload);
      if (order) {
        order.status = ORDERSTATUS.COMPLETED;
      }
    },

    addStatusToCancelled: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload);
      if (order) {
        order.status = ORDERSTATUS.CANCELLED;
      }
    },
  },
});

export const {
  addOrder,
  addStatusToCompleted,
  addStatusToCancelled,
  addStatusToProcess,
} = orderSlice.actions;

export default orderSlice.reducer;
