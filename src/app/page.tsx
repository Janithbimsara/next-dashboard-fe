import BarChart from "@/components/BarChart";
import CandlestickChart from "@/components/CandlestickChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <LineChart />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <BarChart />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <PieChart />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Candlestick Chart</h2>
          <CandlestickChart />
        </div>
      </div>
    </div>
  );
}
