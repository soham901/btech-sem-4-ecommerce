import express from "express";


const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server is healthy",
  })
});

// setup routers
import UserRouter from "./users/router";
import ProductRouter from "./products/router";
import CartRouter from "./carts/router";
import { connectDB } from "./db";

app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/carts", CartRouter);

connectDB()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
})
