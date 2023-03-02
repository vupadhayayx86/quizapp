import React, { Suspense,lazy } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Container,Box } from "@mui/system";
const Settings= lazy(()=>import('./pages/Settings'));
const FinalScreen= lazy(()=>import('./pages/FinalScreen'));
const Questions= lazy(()=>import('./pages/Questions'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>

      <Container maxWidth="sm">
        <Box textAlign={"center"} mt={5}>
        <Routes>
          <Route path="/" element={<Settings/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/score" element={<FinalScreen/>} />
        </Routes>
        </Box>
      </Container>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
