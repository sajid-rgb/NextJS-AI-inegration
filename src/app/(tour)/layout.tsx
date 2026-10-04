import Navbar from '@/components/ui/Navbar/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
