import { TrendingUp, Pickaxe } from 'lucide-react';
import { BorderBeam } from './border-beam';

export default function ChartBuilding() {

  return (
    <div className="relative text-gray-900 font-medium dark:text-white p-5 rounded-xl w-[500px] flex flex-col gap-10 items-center bg-zinc-900">
      <BorderBeam />
      <div>
        <h1 className="text-lg font-medium">Este gráfico ainda está em construção</h1>
        <p className="text-gray-500">Em breve esse componente será atualizado.</p>
      </div>

      <div className="text-center w-40 h-40 p-10 flex flex-col justify-center items-center">
      <Pickaxe size={80} className='text-blue-500'/>
      </div>

      <div className='flex items-center gap-3'>
        <p className='text-sm text-medium'>Novidades em breve</p>
      </div>
    </div>

  );
}