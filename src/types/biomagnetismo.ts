// src/types/biomagnetismo.ts
// export type CategoriaPar = 'Virus' | 'Bacteria' | 'Parásito' | 'Hongo' | 'Especial' | 'Emocional' | 'Funcional';

export type CategoriaPar = 
  | 'Virus' 
  | 'Bacteria' 
  | 'Parásito' 
  | 'Hongo' 
  | 'Especial' 
  | 'Emocional' 
  | 'Funcional' 
  | 'Reservorio' 
  | 'Disfunción';


// export interface ParBiomagnetico {
//   id: string;
//   puntoNorte: string;
//   puntoSur: string;
//   categoria: CategoriaPar;
//   patogeno: string;
//   descripcion: string;
//   sintomas: string[];
// }

export interface ParBiomagnetico {
  id: string;
  puntoNorte: string;
  puntoSur: string;
  categoria: CategoriaPar;
  patogeno: string;
  descripcion: string;
  sintomas: string[];
  // Campos específicos de ubicación
  localizacion1?: string; 
  localizacion2?: string;
  grupo?: string;
}