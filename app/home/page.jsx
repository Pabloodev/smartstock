import Chart from "../ui/components/chart";
import Chartbar from "../ui/components/chartbar";
import ChartBuilding from "../ui/components/chartBuilding";

export default function Page() {
  return (
    <div>
      <h1 className="mb-10 text-3xl font-medium text-gray-600 dark:text-white">Dashboards <span className="text-blue-400">Gerais</span></h1>

      {/* Grid principal com 3 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">

        {/* Container para os 4 charts, ocupando 2 colunas */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Chart />
          <ChartBuilding />
          <ChartBuilding />
          <ChartBuilding />
        </div>
        {/* Container para o chartbar, ocupando 1 coluna */}
        <div className="md:col-span-1">
          <Chartbar />
        </div>

      </div>
    </div>
  );
}