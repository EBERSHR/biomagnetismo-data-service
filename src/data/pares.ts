// src/data/pares.ts
import type { ParBiomagnetico } from "@/types/biomagnetismo";

export const PARES_DATA: ParBiomagnetico[] = [
  {
    id: "p1",
    puntoNorte: "Acromium",
    puntoSur: "Acromium",
    categoria: "Hongo",
    patogeno: "Hongo no especificado",
    descripcion: "Osteoporosis, Porosidad ósea. Inmovilidad del brazo. Problemas respiratorios.",
    sintomas: ["Osteoporosis", "Dolor de brazo", "Dificultad respiratoria"]
  },
  {
    id: "p2",
    puntoNorte: "Adenohipófisis",
    puntoSur: "Riñón izquierdo",
    categoria: "Especial",
    patogeno: "Corrección hormonal",
    descripcion: "Problemas hormonales. Actúa sobre el lóbulo anterior de la glándula hipófisis.",
    sintomas: ["Desequilibrio hormonal", "Fatiga"]
  },
  {
    id: "p3",
    puntoNorte: "Adenoides",
    puntoSur: "Adenoides",
    categoria: "Especial",
    patogeno: "Alergias tóxicas",
    descripcion: "Normaliza fórmula roja. Sube plaquetas. Hipertrofia de adenoides.",
    sintomas: ["Alergias", "Plaquetas bajas", "Inflamación garganta"]
  },
  {
    id: "p4",
    puntoNorte: "Aductor",
    puntoSur: "Aductor",
    categoria: "Virus",
    patogeno: "Retrovirus",
    descripcion: "VIH (2). Herpes. Trastornos en uretra, vagina y comezón en ingles. Sangrado rectal.",
    sintomas: ["Prurito", "Trastornos urinarios", "Piernas inquietas"]
  },
  {
    id: "p5",
    puntoNorte: "Aductor menor",
    puntoSur: "Aductor menor",
    categoria: "Emocional",
    patogeno: "Frustración",
    descripcion: "Músculo cara interna muslo. Impacta en el estado emocional de frustración.",
    sintomas: ["Frustración", "Tensión muscular"]
  },
  {
    id: "p6",
    puntoNorte: "Agujero",
    puntoSur: "Agujero",
    categoria: "Parásito",
    patogeno: "Giardia Lamblia",
    descripcion: "Se fija y reproduce en el intestino. Por alimentos contaminados. Náuseas, vómitos.",
    sintomas: ["Diarrea", "Dolor abdominal", "Vómitos"]
  },
  {
    id: "p7",
    puntoNorte: "Amígdala cerebral",
    puntoSur: "Timo",
    categoria: "Emocional",
    patogeno: "Odio",
    descripcion: "Berlín 2010. Trabaja la emoción del odio y la agresividad.",
    sintomas: ["Ira", "Agresividad"]
  },
  {
    id: "p8",
    puntoNorte: "Anexo",
    puntoSur: "Ano",
    categoria: "Virus",
    patogeno: "Paramoxivirus",
    descripcion: "Comezón, irritación y sequedad de órganos sexuales en la mujer. Trastorno sexual.",
    sintomas: ["Prurito genital", "Sequedad"]
  },
  {
    id: "p9",
    puntoNorte: "Angina",
    puntoSur: "Angina",
    categoria: "Virus",
    patogeno: "Herpes 2",
    descripcion: "Herpes (2) en boca. Algodoncillo. Reservorio por cicatriz de operación.",
    sintomas: ["Aftas", "Dolor de garganta"]
  },
  {
    id: "p10",
    puntoNorte: "Ángulo (gonión)",
    puntoSur: "Ángulo",
    categoria: "Bacteria",
    patogeno: "Streptococcus fragilis",
    descripcion: "Gingivitis, halitosis, otitis, laringitis, rinitis, faringitis. Fragilidad capilar encías.",
    sintomas: ["Mal aliento", "Gingivitis", "Otitis"]
  },
  {
    id: "p11",
    puntoNorte: "Apéndice",
    puntoSur: "Pleura bilateral",
    categoria: "Bacteria",
    patogeno: "Staphylococcus aureus coagu +",
    descripcion: "Arritmias. Problemas en Laringe, tráquea y pleura. Apendicitis. Pericarditis.",
    sintomas: ["Arritmias", "Dolor de garganta", "Inflamación"]
  },
  {
    id: "p12",
    puntoNorte: "Aquiles superior",
    puntoSur: "Aquiles superior",
    categoria: "Bacteria",
    patogeno: "Shigella",
    descripcion: "Diarreas, gases, malas digestiones. Jaquecas. Trastornos digestivos, recto y ano.",
    sintomas: ["Diarrea", "Gases", "Dolor de cabeza"]
  },
  {
    id: "p13",
    puntoNorte: "Axila",
    puntoSur: "Axila",
    categoria: "Virus",
    patogeno: "Rabia",
    descripcion: "Sintomatología laríngea, otitis, asma, apnea, miedos. Acentúa infecciones.",
    sintomas: ["Miedo", "Asma", "Mareos"]
  },
  {
    id: "p14",
    puntoNorte: "Bazo",
    puntoSur: "Hígado",
    categoria: "Bacteria",
    patogeno: "Brucella / Hepatitis I",
    descripcion: "Falsa leucemia. Anemia discreta. Problemas pulmonares y hepáticos.",
    sintomas: ["Anemia", "Fatiga", "Sobrepeso"]
  },
  {
    id: "p15",
    puntoNorte: "Bulbo raquídeo",
    puntoSur: "Cerebelo",
    categoria: "Virus",
    patogeno: "New castle",
    descripcion: "Gripe aviar. Puede provocar parálisis de ventilación. Ataxia cerebelosa. Conducta agresiva.",
    sintomas: ["Vértigo", "Agresividad", "Apnea"]
  }
];