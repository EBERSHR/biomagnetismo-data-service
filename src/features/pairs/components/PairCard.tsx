// src/features/pairs/components/PairCard.tsx
import { Magnet } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

interface BiomagneticPair {
  point1: string;
  point2: string;
  pathogen: string;
}

export const PairCard = ({ pair }: { pair: BiomagneticPair }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-2 text-blue-600">
        <Magnet size={20} />
        <h3 className="font-bold">{pair.point1} - {pair.point2}</h3>
      </div>
      <p className="text-gray-600 text-sm italic">Patógeno: {pair.pathogen}</p>
      <Button className="mt-4 w-full bg-blue-700 hover:bg-blue-800">
        Ver Detalles Médicos
      </Button>
    </div>
  );
}