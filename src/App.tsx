import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Comments from "./components/Comments";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Comments />
    </QueryClientProvider>
  );
};

export default App;

