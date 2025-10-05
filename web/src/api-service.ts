// src/api-service.ts
import axios from "axios";

const API_BASE = process.env.API_BASE || "/api";

export async function postLogin(data: { email: string; password: string }) {
  try {
    const res = await axios.post(`${API_BASE}/login`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err: any) {
    console.error("Login error:", err.response?.data || err.message);
    throw err.response?.data || err;
  }
}
