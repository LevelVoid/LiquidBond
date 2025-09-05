import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import Dashboard from "@/components/Dashboard/Dashboard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
