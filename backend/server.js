require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const app = express();
const PORT = 5000;

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

app.use(express.json());
app.use(cors());


// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {
  res.json({
    message: "Dormer backend is running!",
  });
});


// =========================
// GET ALL PROPERTIES
// =========================

app.get("/api/properties", async (req, res) => {
  const properties = await prisma.property.findMany();

  res.json(properties);
});


// =========================
// ADD PROPERTY
// =========================

app.post("/api/properties", async (req, res) => {
  const { title, price, type, location } = req.body;

  const property = await prisma.property.create({
    data: {
      title,
      price,
      type,
      location,
    },
  });

  res.json(property);
});


// =========================
// GET ONE PROPERTY
// =========================

app.get("/api/properties/:id", async (req, res) => {
  const id = Number(req.params.id);

  const property = await prisma.property.findUnique({
    where: { id },
  });

  if (!property) {
    return res.status(404).json({
      message: "Property not found",
    });
  }

  res.json(property);
});


// =========================
// REGISTER USER
// =========================

app.post("/api/users", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  });
});


// =========================
// LOGIN USER
// =========================

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});


// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(
    `Dormer backend running on http://localhost:${PORT}`
  );
});