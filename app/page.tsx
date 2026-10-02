import ProtectedRoute from '../components/auth/ProtectedRoute/ProtectedRoute';

const RootPage = () => {
  return (
    <ProtectedRoute>
      <h1 className="text-3xl">Welcome to the Root Page</h1>
      <p>This is the main entry point of the application.</p>
    </ProtectedRoute>
  );
};

export default RootPage;
