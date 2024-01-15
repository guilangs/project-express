import express from "express";
import { volumeTabung, luasPermukaanTabung, volumeKubus, luasPermukaanKubus, volumeBalok, luasPermukaanBalok } from "../controller/bangunRuang";
const app = express.Router();

// allow read a body
app.use(express.json())
// fungsi use() digunaka untuk menerapkan sebuah fungsi pada object express, fungsi tsb akan otomatis berjalan


// Tabung
app.post('/Tabung/volume', volumeTabung);
app.post('/Tabung/luaspermukaan', luasPermukaanTabung);

// Kubus
app.post('/Kubus/volume', volumeKubus);
app.post('/Kubus/luaspermukaan', luasPermukaanKubus);

// Balok
app.post('/Balok/volume', volumeBalok);
app.post('/Balok/luaspermukaan', luasPermukaanBalok);


export default app;
