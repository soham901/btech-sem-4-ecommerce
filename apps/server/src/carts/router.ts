import { Router } from "express";
import { Cart } from "./models";

const router = Router();

router.get("/:userID", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userID: req.params.userID }).populate("products");
    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
      return;
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
})
.post("/:userID", async (req, res) => {
  try {
    const { productID } = req.body;
    const cart = await Cart.findOneAndUpdate(
      { userID: req.params.userID },
      { $addToSet: { products: productID } },
      { new: true, upsert: true }
    ).populate("products");
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: "Bad request", error });
  }
})
.delete("/:userID/:productID", async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userID: req.params.userID },
      { $pull: { products: req.params.productID } },
      { new: true }
    ).populate("products");
    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
      return;
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
})
.delete("/:userID", async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userID: req.params.userID },
      { $set: { products: [] } },
      { new: true }
    );
    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
      return;
    }
    res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
