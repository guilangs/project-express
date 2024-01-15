import { Request, Response } from "express";

// Tabung
const volumeTabung = (request: Request, response: Response) => {
  try {
    const phi = Math.PI;
    const jariJari: number = Number(request.body.jariJari);
    const tinggi: number = Number(request.body.tinggi);
    const volume = phi * jariJari * jariJari * tinggi;
    return response.status(200).json({
      status: true,
      jariJari,
      tinggi,
      volume,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const luasPermukaanTabung = (request: Request, response: Response) => {
  try {
    const phi = Math.PI;
    const jariJari: number = Number(request.body.jariJari);
    const tinggi: number = Number(request.body.tinggi);

    const luasAlas = 2 * phi * Math.pow(jariJari, 2);
    const luasSelimut = 2 * phi * jariJari * tinggi;
    const luasPermukaan = luasAlas + luasSelimut;
    return response.status(200).json({
      status: true,
      jariJari,
      tinggi,
      luasAlas,
      luasSelimut,
      luasPermukaan,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

// Kubus
const volumeKubus = (request: Request, response: Response) => {
  try {
    const sisi: number = Number(request.body.sisi);

    const volume = Math.pow(sisi, 3);
    return response.status(200).json({
      status: true,
      sisi,
      volume
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const luasPermukaanKubus = (request: Request, response: Response) => {
  try {
    const sisi: number = Number(request.body.sisi);

    const luasPermukaan = 6 * Math.pow(sisi, 2);
    return response.status(200).json({
      status: true,
      sisi,
      luasPermukaan
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

// Balok
const volumeBalok = (request: Request, response: Response) => {
  try {
    const phi = Math.PI;
    const panjang: number = Number(request.body.panjang);
    const lebar: number = Number(request.body.lebar);
    const tinggi: number = Number(request.body.tinggi);

    const volume = panjang * lebar * tinggi;
    return response.status(200).json({
      status: true,
      panjang,
      lebar,
      tinggi,
      volume,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const luasPermukaanBalok = (request: Request, response: Response) => {
  try {
    const phi = Math.PI;
    const panjang: number = Number(request.body.panjang);
    const lebar: number = Number(request.body.lebar);
    const tinggi: number = Number(request.body.tinggi);

    const luasPermukaan =
      2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    return response.status(200).json({
      status: true,
      panjang,
      lebar,
      tinggi,
      luasPermukaan,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

export { volumeTabung, luasPermukaanTabung, volumeKubus, luasPermukaanKubus, volumeBalok, luasPermukaanBalok };
