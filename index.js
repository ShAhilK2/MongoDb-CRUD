// console.log("Hello Just Started");

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World From GET Api");
});

// app.post("/api/products", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json({ products: products });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json({ message: product });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// update
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       res.status(404).json({ message: "Product Not Found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json({ updatedProduct });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// delete
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product Not Found" });
//     }
//     res.status(200).json({ message: "Product Deleted Successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://harshadkataria3:q2rGwAbWBeyfda9I@crudapi.sv8e4.mongodb.net/CrudApi?retryWrites=true&w=majority&appName=CRUDAPI"
  )
  .then(() => {
    console.log("Connected SuccessFully Mongo!");
    app.listen(3000, () => {
      console.log("Server Running In  Port 3000");
    });
  })

  .catch(() => {
    console.log("Connection Failed");
  });

