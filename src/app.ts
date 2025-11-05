import express from "express";
import prisma from "./database/prismaclient";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
