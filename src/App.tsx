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
import { Database } from "lucide-react";
import { PARES_DATA } from './data/pares';
import type { ParBiomagnetico, CategoriaPar } from "@/types/biomagnetismo"; 
// Imports de Shadcn y Lucide

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { FileText, Copy, Check } from "lucide-react";

import { ImportadorDatos } from './components/ImportadorDatos';
import { MapPin, Info } from "lucide-react"; // Añade MapPin a tus imports

// // Tipos internos para evitar errores de importación por ahora
// export type CategoriaPar = 'Virus' | 'Bacteria' | 'Parásito' | 'Hongo' | 'Especial' | 'Emocional' | 'Funcional';
// const CATEGORIAS: CategoriaPar[] = ['Virus', 'Bacteria', 'Parásito', 'Hongo', 'Especial', 'Emocional'];


// export interface ParBiomagnetico {
//   id: string;
//   puntoNorte: string;
//   puntoSur: string;
//   categoria: CategoriaPar;
//   patogeno: string;
//   descripcion: string;
//   sintomas: string[];
// }

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

  const [copiado, setCopiado] = useState(false);

const CATEGORIAS: CategoriaPar[] = [
  'Virus', 'Bacteria', 'Parásito', 'Hongo', 
  'Especial', 'Emocional', 'Funcional', 'Reservorio', 'Disfunción'
];
// Dentro de tu componente App:
const [datosPares, setDatosPares] = useState<ParBiomagnetico[]>(PARES_DATA);

const manejarImportacion = (nuevosPares: ParBiomagnetico[]) => {
  setDatosPares((prev) => {
    // Unimos los pares actuales con los nuevos evitando duplicados exactos
    const combinados = [...prev];
    
    nuevosPares.forEach(nuevo => {
      const existe = combinados.find(p => 
        p.puntoNorte === nuevo.puntoNorte && p.puntoSur === nuevo.puntoSur
      );
      if (!existe) combinados.push(nuevo);
    });

    // GUARDADO PERMANENTE:
    localStorage.setItem('db_pares_custom', JSON.stringify(combinados));
    
    return combinados;
  });
};

const restablecerBaseDeDatos = () => {
  if (confirm("¿Seguro? Esto borrará todos los pares importados y volverá a la lista original.")) {
    localStorage.removeItem('db_pares_custom');
    setDatosPares(PARES_DATA);
  }
};

  // --- LÓGICA DE PERSISTENCIA (STORAGE) ---

  // 1. Cargar datos del disco al iniciar
  // useEffect(() => {
  //   const datosGuardados = localStorage.getItem('sesion_biomagnetismo');
  //   if (datosGuardados) {
  //     setSeleccionados(JSON.parse(datosGuardados));
  //   }
  // }, []);
  // 1. Efecto para cargar tanto la SESIÓN como la BASE DE DATOS personalizada
useEffect(() => {
  // Cargar pares seleccionados (el rastreo actual)
  const sesionGuardada = localStorage.getItem('sesion_biomagnetismo');
  if (sesionGuardada) setSeleccionados(JSON.parse(sesionGuardada));

  // Cargar base de datos personalizada (lo que subiste del Excel)
  const dbGuardada = localStorage.getItem('db_pares_custom');
  if (dbGuardada) {
    setDatosPares(JSON.parse(dbGuardada));
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
    if (confirm("¿Deseas borrar todos los pares del paciente actual?")) {
      setSeleccionados([]);
    }
  };

  // const paresFiltrados = PARES_DATA.filter(par => 
  //   par.puntoNorte.toLowerCase().includes(busqueda.toLowerCase()) ||
  //   par.patogeno.toLowerCase().includes(busqueda.toLowerCase())
  // );

  // Filtrado avanzado
  // const paresFiltrados = PARES_DATA.filter(par => {
  //   const cumpleBusqueda = par.puntoNorte.toLowerCase().includes(busqueda.toLowerCase()) ||
  //     par.patogeno.toLowerCase().includes(busqueda.toLowerCase());
  //   const cumpleCategoria = categoriaSeleccionada === 'Todos' || par.categoria === categoriaSeleccionada;

  //   return cumpleBusqueda && cumpleCategoria;
  // });
const paresFiltrados = datosPares.filter(par => {
  // Convertimos todo a minúsculas una sola vez para mejorar el rendimiento
  const query = busqueda.toLowerCase();
  
  // Verificamos si la búsqueda coincide en CUALQUIERA de estos campos:
  const enPuntoNorte = par.puntoNorte.toLowerCase().includes(query);
  const enPuntoSur = par.puntoSur.toLowerCase().includes(query);
  const enPatogeno = par.patogeno.toLowerCase().includes(query);
  const enSintomas = par.descripcion.toLowerCase().includes(query);
  const enGrupo = par.grupo?.toLowerCase().includes(query);

  const cumpleBusqueda = enPuntoNorte || enPuntoSur || enPatogeno || enSintomas || enGrupo;

  // Mantenemos el filtro de categoría (Virus, Bacteria, etc.)
  const cumpleCategoria = categoriaSeleccionada === 'Todos' || par.categoria === categoriaSeleccionada;

  return cumpleBusqueda && cumpleCategoria;
});

  // Función para generar el texto del reporte
  const generarTextoReporte = () => {
    if (seleccionados.length === 0) return "No hay pares seleccionados.";

    const fecha = new Date().toLocaleDateString();
    let texto = `REPORTE DE BIOMAGNETISMO - FECHA: ${fecha}\n`;
    texto += `==========================================\n\n`;

    seleccionados.forEach((par, index) => {
      texto += `${index + 1}. ${par.puntoNorte} - ${par.puntoSur}\n`;
      texto += `   Patógeno: ${par.patogeno}\n`;
      texto += `   Categoría: ${par.categoria}\n`;
      texto += `------------------------------------------\n`;
    });

    return texto;
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(generarTextoReporte());
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000); // Resetear icono tras 2 seg
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* <header className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
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
      </header> */}
            <header className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2 text-blue-700">
          <Magnet size={24} />
          <h1 className="text-xl font-bold">BioData Pro</h1>
        </div>
        
        <div className="flex items-center gap-2">
                    <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Database size={16} /> Base de Datos
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Gestión de Pares</DialogTitle>
                <DialogDescription>
                  Sube tu archivo CSV para expandir la lista de rastreo.
                </DialogDescription>
              </DialogHeader>
              
              {/* AQUÍ USAMOS LA FUNCIÓN Y EL COMPONENTE */}
              <ImportadorDatos onDataImported={manejarImportacion} />
               <Button 
        variant="destructive" 
        className="w-full gap-2" 
        onClick={restablecerBaseDeDatos}
      >
        <Trash2 size={16} /> Restablecer Base de Datos
      </Button>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-md text-xs text-blue-700">
                <strong>Nota:</strong> El archivo debe tener las columnas: Punto, Resonancia, Patógeno, Tipo, Sintomatología.
              </div>
            </DialogContent>
          </Dialog>
          {/* BOTÓN DE REPORTE (Solo se muestra si hay pares) */}
          {seleccionados.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100">
                  <FileText className="w-4 h-4 mr-2" /> Reporte
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Resumen del Rastreo</DialogTitle>
                  <DialogDescription>
                    Copia este resumen para tu expediente clínico.
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-slate-900 text-slate-100 p-4 rounded-md font-mono text-xs whitespace-pre-wrap max-h-[400px] overflow-y-auto">
                  {generarTextoReporte()}
                </div>
                <Button onClick={copiarAlPortapapeles} className="w-full">
                  {copiado ? <><Check className="mr-2 h-4 w-4" /> Copiado</> : <><Copy className="mr-2 h-4 w-4" /> Copiar al Portapapeles</>}
                </Button>
              </DialogContent>
            </Dialog>
          )}

<Badge variant="secondary" className="px-3 py-1 text-sm bg-blue-100 text-blue-800 border-blue-200">
  <ClipboardList className="w-4 h-4 mr-2" /> {/* <--- Aquí usamos el icono */}
  {seleccionados.length} Pares Detectados
</Badge>
          
          {seleccionados.length > 0 && (
  <Button 
    variant="ghost" 
    size="sm" 
    onClick={limpiarSesion} // <--- Aquí conectamos la función
    className="text-red-500 hover:text-red-700 hover:bg-red-50"
  >
    <Trash2 size={18} />
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
  <p className="mt-3 text-slate-500 text-sm italic">
  {busqueda.length > 0 
    ? `Encontrados ${paresFiltrados.length} pares relacionados con "${busqueda}"` 
    : `Explorando ${datosPares.length} pares totales`}
</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paresFiltrados.map(par => (
            // <Card key={par.id} className={`transition-all ${seleccionados.find(p => p.id === par.id) ? 'border-blue-500 bg-blue-50/50' : ''}`}>
            //   <CardHeader className="pb-2">
            //     <div className="flex justify-between items-center">
            //       <CardTitle className="text-lg">{par.puntoNorte} - {par.puntoSur}</CardTitle>
            //       <Badge variant={par.categoria === 'Virus' ? 'destructive' : 'default'}>{par.categoria}</Badge>
            //     </div>
            //   </CardHeader>
            //   <CardContent>
            //     <p className="text-sm font-semibold text-blue-600 mb-2">{par.patogeno}</p>
            //     <Button
            //       variant={seleccionados.find(p => p.id === par.id) ? "default" : "outline"}
            //       className="w-full"
            //       onClick={() => togglePar(par)}
            //     >
            //       {seleccionados.find(p => p.id === par.id) ? "Quitar del Rastreo" : "Añadir al Rastreo"}
            //     </Button>
            //   </CardContent>





            // </Card>

<Card key={par.id} className="hover:shadow-md transition-all border border-slate-200 overflow-hidden">
  {/* Franja superior sutil para el Grupo */}
  {par.grupo && (
    <div className="bg-slate-100 px-4 py-1 border-b border-slate-200">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{par.grupo}</span>
    </div>
  )}

  <CardHeader className="p-5 space-y-3">
    {/* Título y Categoría */}
    <div className="flex justify-between items-start gap-4">
      <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
        {par.puntoNorte} — {par.puntoSur}
      </CardTitle>
      <Badge className={`shrink-0 ${
        par.categoria === 'Virus' ? 'bg-red-500' : 
        par.categoria === 'Bacteria' ? 'bg-green-600' : 
        par.categoria === 'Hongo' ? 'bg-orange-700' : 'bg-blue-600'
      }`}>
        {par.categoria}
      </Badge>
    </div>

    {/* Patógeno (Resaltado en Azul como en tu diseño favorito) */}
    <p className="text-blue-600 font-semibold text-lg border-l-2 border-blue-600 pl-3">
      {par.patogeno}
    </p>

    {/* BLOQUE DE LOCALIZACIÓN (Datos del Excel) */}
    {(par.localizacion1 || par.localizacion2) && (
      <div className="space-y-1 bg-slate-50 p-3 rounded-md border border-slate-100">
        <p className="text-[11px] font-bold text-slate-400 uppercase">Ubicación Anatómica</p>
        {par.localizacion1 && (
          <div className="text-sm text-slate-700">
            <span className="font-bold text-red-600">N:</span> {par.localizacion1}
          </div>
        )}
        {par.localizacion2 && (
          <div className="text-sm text-slate-700">
            <span className="font-bold text-blue-600">S:</span> {par.localizacion2}
          </div>
        )}
      </div>
    )}

    {/* SINTOMATOLOGÍA (Texto completo) */}
<div className="mt-4 space-y-1">
  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sintomatología / Descripción</p>
  {par.descripcion ? (
    <p className="text-sm text-slate-600 leading-relaxed italic">
      {par.descripcion}
    </p>
  ) : (
    <p className="text-xs text-red-400 italic">No hay descripción disponible en el archivo</p>
  )}
</div>

    {/* Botón de Acción */}
    <Button 
      variant={seleccionados.find(p => p.id === par.id) ? "default" : "outline"}
      className="w-full mt-4"
      onClick={() => togglePar(par)}
    >
      {seleccionados.find(p => p.id === par.id) ? "Quitar del Rastreo" : "Añadir al Rastreo"}
    </Button>
  </CardHeader>
</Card>





          ))}
        </div>
      </main>
    </div>
  );
}

import { ClipboardList } from 'lucide-react';