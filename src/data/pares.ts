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
    sintomas: ["Fiebre", "Agotamiento", "Infecciones"]
  },
  {
    id: "2",
    puntoNorte: "Hígado",
    puntoSur: "Hígado",
    categoria: "Virus",
    patogeno: "Hepatitis C",
    descripcion: "Inflamación del hígado. Fatiga crónica.",
    sintomas: ["Ictericia", "Dolor abdominal"]
  },
  {
    id: "3",
    puntoNorte: "Pineal",
    puntoSur: "Bulbo Raquídeo",
    categoria: "Especial",
    patogeno: "Guillain-Barré",
    descripcion: "Parálisis progresiva. Problemas de sueño.",
    sintomas: ["Debilidad muscular", "Hormigueo"]
  },
  {
    id: "4",
    puntoNorte: "Parietal",
    puntoSur: "Parietal",
    categoria: "Virus",
    patogeno: "Encefalitis Viral",
    descripcion: "Inflamación cerebral. Problemas de memoria.",
    sintomas: ["Cefalea", "Confusión"]
  },
  {
    id: "5",
    puntoNorte: "Riñón",
    puntoSur: "Riñón",
    categoria: "Bacteria",
    patogeno: "Clostridium Difficile",
    descripcion: "Problemas digestivos graves e inflamación renal.",
    sintomas: ["Diarrea", "Dolor lumbar"]
  },
  {
    id: "6",
    puntoNorte: "Duodeno",
    puntoSur: "Hígado",
    categoria: "Bacteria",
    patogeno: "Chlamydia Trachomatis",
    descripcion: "Principal causa de problemas hepáticos y digestivos.",
    sintomas: ["Inflamación", "Gases"]
  },
  {
    id: "7",
    puntoNorte: "Bazo",
    puntoSur: "Bazo",
    categoria: "Bacteria",
    patogeno: "Yersinia Pestis",
    descripcion: "Afecta el sistema linfático y la sangre.",
    sintomas: ["Tos", "Fiebre alta"]
  },
  {
    id: "8",
    puntoNorte: "Mandíbula",
    puntoSur: "Mandíbula",
    categoria: "Bacteria",
    patogeno: "Neisseria Gonorrhoeae",
    descripcion: "Inflamación de garganta y problemas dentales.",
    sintomas: ["Dolor mandibular", "Halitosis"]
  },
  {
    id: "9",
    puntoNorte: "Ojo",
    puntoSur: "Ojo",
    categoria: "Virus",
    patogeno: "Citomegalovirus",
    descripcion: "Afecta la visión y el sistema nervioso central.",
    sintomas: ["Visión borrosa", "Fatiga"]
  },
  {
    id: "10",
    puntoNorte: "Páncreas",
    puntoSur: "Páncreas",
    categoria: "Especial",
    patogeno: "Pancreatitis",
    descripcion: "Causa desequilibrios en la insulina y digestión.",
    sintomas: ["Dolor abdominal", "Malas digestiones"]
  }
  // Podemos seguir expandiendo hasta los 100...
];