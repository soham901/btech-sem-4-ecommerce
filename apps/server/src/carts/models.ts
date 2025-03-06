import {ObjectId, Schema, model} from "mongoose";
import { User } from "../users/models";
import { Product } from "../products/models";

interface ICart extends Document {
  products: ObjectId[];
  userID: ObjectId;
}

const schema = new Schema<ICart>({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: Product,
    },
  ],
  userID: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
});

export const Cart = model<ICart>("Cart", schema);
