import express from "express";
import { LuasSegitiga, kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang } from "../controller/bangunDatar";
const app = express()

// allow read a body
app.use(express.json())
// fungsi use() digunaka untuk menerapkan sebuah fungsi pada object express, fungsi tsb akan otomatis berjalan

// Lingkaram
app.post(`/Lingkaran/luas`, luasLingkaran)
app.post(`/Lingkaran/keliling`, kelilingLingkaran)

// Persegi
app.post(`/Persegi/luas`, luasPersegi)
app.post(`/Persegi/keliling`, kelilingPersegi)

// Persegi panjang
app.post(`/PersegiPanjang/luas`, luasPersegiPanjang)
app.post(`/PersegiPanjang/keliling`, kelilingPersegiPanjang)

// Segitiga
app.post(`/Segitiga/luas`, LuasSegitiga)

export default app