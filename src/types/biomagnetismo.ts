// src/types/biomagnetismo.ts
export type CategoriaPar = 'Virus' | 'Bacteria' | 'Parásito' | 'Hongo' | 'Especial' | 'Emocional' | 'Funcional';

export interface ParBiomagnetico {
  id: string;
  puntoNorte: string;
  puntoSur: string;
  categoria: CategoriaPar;
  patogeno: string;
  descripcion: string;
  sintomas: string[];
}