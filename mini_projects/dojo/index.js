import OpenAI from "openai";
import { checkEnvironment } from "./utils.js";

checkEnvironment();

const openai = new OpenAI({
  apiKey: process.env.AI_KEY,
  baseURL: process.env.AI_URL
});


