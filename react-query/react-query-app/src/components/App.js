import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./Home";
import List from "./List";
import Details from "./Details";
import Colors from "./Colors";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superheroes" element={<List />} />
          <Route path="/superhero/:id" element={<Details />} />
          <Route path="/colors" element={<Colors />} />
        </Routes>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
