import ProtectedRoute from '@/components/auth/ProtectedRoute/ProtectedRoute';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Welcome to the Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            This is a protected page. Only authenticated users can access it.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
