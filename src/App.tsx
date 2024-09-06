import AppRoutes from "routes/AppRoutes";
import { BasketProvider } from "context/BasketContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketProvider>
        <AppRoutes />
      </BasketProvider>
    </QueryClientProvider>
  );
}

export default App;
