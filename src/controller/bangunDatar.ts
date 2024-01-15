import { Request, Response } from "express";

// const atau let digunakan mendeklarasikan sebuah variable / objek / array / function
const luasLingkaran = (request: Request, response: Response) => {
  try {
    const phi = Math.PI;
    const r: number = Number(request.body.r);
    const luas = phi * r * r;
    return response.status(200).json({
      status: true,
      r,
      luas,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const kelilingLingkaran = (request: Request, response: Response) => {
  try {
    const phi = Math.PI;
    const r: number = Number(request.body.r);
    const keliling = 2 * phi * r * r;
    return response.status(200).json({
      status: true,
      r,
      keliling,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const luasPersegi = (request: Request, response: Response) => {
  try {
    const sisi: number = Number(request.body.sisi);
    const luas = sisi * sisi;
    return response.status(200).json({
      status: true,
      sisi,
      luas,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const kelilingPersegi = (request: Request, response: Response) => {
  try {
    const sisi: number = Number(request.body.sisi);
    const keliling = sisi + sisi + sisi + sisi;
    return response.status(200).json({
      status: true,
      sisi,
      keliling,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const luasPersegiPanjang = (request: Request, response: Response) => {
  try {
    const panjang: number = Number(request.body.panjang);
    const lebar: number = Number(request.body.lebar);
    const luas = panjang * lebar;
    return response.status(200).json({
      status: true,
      panjang,
      lebar,
      luas,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const kelilingPersegiPanjang = (request: Request, response: Response) => {
  try {
    const panjang: number = Number(request.body.panjang);
    const lebar: number = Number(request.body.lebar);
    const keliling = 2 * (panjang + lebar);
    return response.status(200).json({
      status: true,
      panjang,
      lebar,
      keliling,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

const LuasSegitiga = (request: Request, response: Response) => {
  try {
    const alas: number = Number(request.body.alas);
    const tinggi: number = Number(request.body.tinggi);
    const luas = (1 / 2) * alas * tinggi;
    return response.status(200).json({
      status: true,
      alas,
      tinggi,
      luas,
    });
  } catch (error) {
    return response.status(500).json({
      status: false,
      messag: error,
    });
  }
};

export {
  luasLingkaran,
  kelilingLingkaran,
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjang,
  LuasSegitiga
};
