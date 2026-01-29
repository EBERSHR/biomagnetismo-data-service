// // src/App.tsx
// import { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { PARES_DATA } from './data/pares';
// import { CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Magnet, Search, Activity } from 'lucide-react'; // Iconos
// import type { ParBiomagnetico } from './types/biomagnetismo';


// function App() {
//   const [busqueda, setBusqueda] = useState("");
//   const [seleccionados, setSeleccionados] = useState<ParBiomagnetico[]>([]);

//   const togglePar = (par: ParBiomagnetico) => {
//     if (seleccionados.find(p => p.id === par.id)) {
//       setSeleccionados(seleccionados.filter(p => p.id !== par.id));
//     } else {
//       setSeleccionados([...seleccionados, par]);
//     }
//   };

//   const paresFiltrados = PARES_DATA.filter(par =>
//     par.puntoNorte.toLowerCase().includes(busqueda.toLowerCase()) ||
//     par.puntoSur.toLowerCase().includes(busqueda.toLowerCase()) ||
//     par.patogeno.toLowerCase().includes(busqueda.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Header Estilo Clínico */}
//       <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center shadow-sm">
//         <div className="flex items-center gap-3">
//           <div className="bg-blue-600 p-2 rounded-lg">
//             <Magnet className="text-white" size={24} />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold text-slate-900 leading-tight">BioData Manager</h1>
//             <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Centro de Biomagnetismo</p>
//           </div>
//         </div>
//         <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
//           <Activity size={14} className="mr-1" /> Sistema Activo
//         </Badge>
//       </header>

//       <main className="max-w-6xl mx-auto p-8">
//         {/* Buscador Central */}
//         <div className="mb-10 max-w-2xl mx-auto text-center">
//           <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Rastreo de Pares</h2>
//           <div className="relative">
//             <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
//             <Input
//               placeholder="Buscar por punto o patógeno..."
//               className="pl-12 h-14 text-lg shadow-xl border-slate-200 rounded-2xl focus:ring-blue-500"
//               value={busqueda}
//               onChange={(e) => setBusqueda(e.target.value)}
//             />
//           </div>
//           <p className="mt-3 text-slate-500 text-sm">
//             Mostrando {paresFiltrados.length} de {PARES_DATA.length} pares registrados
//           </p>
//         </div>

//         {/* Grid de Pares */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {paresFiltrados.map(par => (
//             <Card key={par.id} className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-500">
//               <CardHeader className="pb-3">
//                 <div className="flex justify-between items-start mb-2">
//                   <Badge className={
//                     par.categoria === 'Virus' ? 'bg-red-500' :
//                       par.categoria === 'Bacteria' ? 'bg-green-600' : 'bg-purple-500'
//                   }>
//                     {par.categoria}
//                   </Badge>
//                 </div>
//                 <CardTitle className="text-2xl text-slate-800">
//                   {par.puntoNorte} <span className="text-slate-300 mx-1">—</span> {par.puntoSur}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm font-bold text-blue-700 mb-1">{par.patogeno}</p>
//                 <p className="text-sm text-slate-600 line-clamp-2">{par.descripcion}</p>
//                 <div className="mt-4 flex flex-wrap gap-1">
//                   {par.sintomas.map(s => (
//                     <span key={s} className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md text-slate-500 uppercase">
//                       {s}
//                     </span>
//                   ))}
//                 </div>


//                 <Button
//                   variant={seleccionados.find(p => p.id === par.id) ? "default" : "outline"}
//                   className="mt-4 w-full"
//                   onClick={() => togglePar(par)}
//                 >
//                   {seleccionados.find(p => p.id === par.id) ? (
//                     <><CheckCircle2 className="mr-2" size={16} /> Seleccionado</>
//                   ) : (
//                     "Añadir al Rastreo"
//                   )}
//                 </Button>


//               </CardContent>
//             </Card>
//           ))}

//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import { Magnet, Search, Trash2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PARES_DATA } from './data/pares';


// Tipos internos para evitar errores de importación por ahora
export type CategoriaPar = 'Virus' | 'Bacteria' | 'Parásito' | 'Hongo' | 'Especial' | 'Emocional' | 'Funcional';
const CATEGORIAS: CategoriaPar[] = ['Virus', 'Bacteria', 'Parásito', 'Hongo', 'Especial', 'Emocional'];


export interface ParBiomagnetico {
  id: string;
  puntoNorte: string;
  puntoSur: string;
  categoria: CategoriaPar;
  patogeno: string;
  descripcion: string;
  sintomas: string[];
}

// Datos de ejemplo (Semilla)
// const PARES_DATA: ParBiomagnetico[] = [
//   { id: "1", puntoNorte: "Timo", puntoSur: "Recto", categoria: "Virus", patogeno: "VIH", descripcion: "Inmunodeficiencia.", sintomas: ["Fiebre"] },
//   { id: "2", puntoNorte: "Hígado", puntoSur: "Hígado", categoria: "Virus", patogeno: "Hepatitis C", descripcion: "Inflamación hepática.", sintomas: ["Fatiga"] },
//   { id: "3", puntoNorte: "Pineal", puntoSur: "Bulbo", categoria: "Especial", patogeno: "Guillain-Barré", descripcion: "Debilidad motriz.", sintomas: ["Parálisis"] }
// ];

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [seleccionados, setSeleccionados] = useState<ParBiomagnetico[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<CategoriaPar | 'Todos'>('Todos');






  // --- LÓGICA DE PERSISTENCIA (STORAGE) ---
  
  // 1. Cargar datos del disco al iniciar
  useEffect(() => {
    const datosGuardados = localStorage.getItem('sesion_biomagnetismo');
    if (datosGuardados) {
      setSeleccionados(JSON.parse(datosGuardados));
    }
  }, []);

  // 2. Guardar en el disco cada vez que seleccionamos un par
  useEffect(() => {
    localStorage.setItem('sesion_biomagnetismo', JSON.stringify(seleccionados));
  }, [seleccionados]);

  // --- LÓGICA DE NEGOCIO ---

  const togglePar = (par: ParBiomagnetico) => {
    if (seleccionados.find(p => p.id === par.id)) {
      setSeleccionados(seleccionados.filter(p => p.id !== par.id));
    } else {
      setSeleccionados([...seleccionados, par]);
    }
  };

  const limpiarSesion = () => {
    if(confirm("¿Deseas borrar todos los pares del paciente actual?")) {
      setSeleccionados([]);
    }
  };

  // const paresFiltrados = PARES_DATA.filter(par => 
  //   par.puntoNorte.toLowerCase().includes(busqueda.toLowerCase()) ||
  //   par.patogeno.toLowerCase().includes(busqueda.toLowerCase())
  // );

    // Filtrado avanzado
  const paresFiltrados = PARES_DATA.filter(par => {
    const cumpleBusqueda = par.puntoNorte.toLowerCase().includes(busqueda.toLowerCase()) || 
                           par.patogeno.toLowerCase().includes(busqueda.toLowerCase());
    const cumpleCategoria = categoriaSeleccionada === 'Todos' || par.categoria === categoriaSeleccionada;
    
    return cumpleBusqueda && cumpleCategoria;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2 text-blue-700">
          <Magnet size={24} />
          <h1 className="text-xl font-bold">BioData Pro</h1>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            <ClipboardList className="w-4 h-4 mr-2" /> {seleccionados.length} Detectados
          </Badge>
          {seleccionados.length > 0 && (
            <Button variant="ghost" size="sm" onClick={limpiarSesion} className="text-red-500">
              <Trash2 size={16} />
            </Button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
                {/* FILTROS DE CATEGORÍA */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button 
            variant={categoriaSeleccionada === 'Todos' ? "default" : "outline"}
            size="sm"
            onClick={() => setCategoriaSeleccionada('Todos')}
          >
            Todos
          </Button>
          {CATEGORIAS.map(cat => (
            <Button 
              key={cat}
              variant={categoriaSeleccionada === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaSeleccionada(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 text-slate-400" size={20} />
          <Input 
            placeholder="Buscar punto de rastreo..." 
            className="pl-10 h-12 text-lg shadow-sm"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paresFiltrados.map(par => (
            <Card key={par.id} className={`transition-all ${seleccionados.find(p => p.id === par.id) ? 'border-blue-500 bg-blue-50/50' : ''}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{par.puntoNorte} - {par.puntoSur}</CardTitle>
                  <Badge variant={par.categoria === 'Virus' ? 'destructive' : 'default'}>{par.categoria}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-blue-600 mb-2">{par.patogeno}</p>
                <Button 
                  variant={seleccionados.find(p => p.id === par.id) ? "default" : "outline"}
                  className="w-full"
                  onClick={() => togglePar(par)}
                >
                  {seleccionados.find(p => p.id === par.id) ? "Quitar del Rastreo" : "Añadir al Rastreo"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

import { ClipboardList } from 'lucide-react';