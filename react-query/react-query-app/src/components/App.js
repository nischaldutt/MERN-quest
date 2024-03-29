import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./Home";
import List from "./List";
import Details from "./Details";
import Colors from "./Colors";
import Companies from "./Companies";
import Company from "./company";
import DependantQueries from "./DependantQueries";
import Paginated from "./Paginated";
import Mutations from "./Mutations";

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
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<Company />} />
          <Route path="/github" element={<DependantQueries />} />
          <Route path="/paginated" element={<Paginated />} />
          <Route path="/mutations" element={<Mutations />} />
        </Routes>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
