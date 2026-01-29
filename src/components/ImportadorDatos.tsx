import React, { useState } from 'react';
import Papa from 'papaparse';
import { Upload, FileCheck } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import type { ParBiomagnetico, CategoriaPar } from '@/types/biomagnetismo';

interface ImportadorProps {
    onDataImported: (nuevosPares: ParBiomagnetico[]) => void;
}

export const ImportadorDatos = ({ onDataImported }: ImportadorProps) => {
    const [loading, setLoading] = useState(false);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
complete: (results) => {
  const paresTransformados: ParBiomagnetico[] = results.data.map((row: any, index: number) => {
    // Buscamos la sintomatología probando varios nombres de columna posibles
    const textoSintomas = row.Sintomatología || row.Sintomatologia || row.Sintomas || row.Descripción || '';
    
    return {
      id: `import-${Date.now()}-${index}`,
      puntoNorte: row.Punto || '',
      puntoSur: row.Resonancia || '',
      categoria: (row.Tipo || 'Especial') as CategoriaPar,
      patogeno: row.Patógeno || row.Patogeno || 'N/A',
      // GUARDAMOS AQUÍ EL TEXTO
      descripcion: textoSintomas, 
      sintomas: textoSintomas ? textoSintomas.split('.').filter((s:any) => s.trim() !== '') : [],
      localizacion1: row.Localización1 || row.Localizacion1,
      localizacion2: row.Localización2 || row.Localizacion2,
      grupo: row.Grupo
    };
  });

                onDataImported(paresTransformados);
                setLoading(false);
                alert(`¡Éxito! Se han importado ${paresTransformados.length} pares.`);
            },
            error: (error) => {
                console.error("Error al parsear CSV:", error);
                setLoading(false);
            }
        });
    };

    return (
        <div className="flex flex-col items-center p-4 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
            <input
                type="file"
                accept=".csv"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                {loading ? (
                    <FileCheck className="animate-bounce text-blue-500" size={40} />
                ) : (
                    <Upload className="text-slate-400" size={40} />
                )}
                <span className="mt-2 text-sm font-medium text-slate-600">
                    {loading ? "Procesando..." : "Subir archivo CSV de Pares"}
                </span>
                <span className="text-xs text-slate-400">Columnas: Punto, Resonancia, Patógeno, Tipo, Sintomatología</span>
            </label>
        </div>
    );
};