import { Schema, model } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      default: "uncategorized",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rating: {
      rate: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct>("Product", schema);
