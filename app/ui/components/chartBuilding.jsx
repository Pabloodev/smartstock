import { TrendingUp, Pickaxe } from 'lucide-react';

export default function ChartBuilding() {

  return (
    <div className="bg-white dark:bg-slate-800 text-black dark:text-white p-5 rounded-xl w-[500px] flex flex-col gap-10 items-center border-2 border-blue-500">
      <div>
        <h1 className="text-lg font-medium">Este gráfico ainda está em construção</h1>
        <p className="text-gray-500">Em breve esse componente será atualizado.</p>
      </div>

      <div className="text-center w-40 h-40 p-10 flex flex-col justify-center items-center">
      <Pickaxe size={80} className='text-blue-500'/>
      </div>

      <div className='flex items-center gap-3'>
        <p className='text-sm'>Novidades em breve</p>
      </div>
    </div>
  );
}