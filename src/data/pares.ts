// src/data/pares.ts
import type { ParBiomagnetico } from "@/types/biomagnetismo";

export const PARES_DATA: ParBiomagnetico[] = [
  {
    id: "1",
    puntoNorte: "Timo",
    puntoSur: "Recto",
    categoria: "Virus",
    patogeno: "VIH (SIDA)",
    descripcion: "Afecta el sistema inmunológico. Produce inmunodeficiencia.",
    sintomas: ["Fiebre", "Agotamiento", "Infecciones recurrentes"]
  },
  {
    id: "2",
    puntoNorte: "Hígado",
    puntoSur: "Hígado",
    categoria: "Virus",
    patogeno: "Hepatitis C",
    descripcion: "Inflamación del hígado. Fatiga crónica.",
    sintomas: ["Ictericia", "Dolor abdominal", "Náuseas"]
  },
  {
    id: "3",
    puntoNorte: "Pineal",
    puntoSur: "Bulbo Raquídeo",
    categoria: "Especial",
    patogeno: "Guillain-Barré",
    descripcion: "Parálisis progresiva. Problemas de sueño.",
    sintomas: ["Debilidad muscular", "Hormigueo"]
  }
];