import {BrowserRouter,Routes,Route} from "react-router-dom"
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";
import { Container,Box } from "@mui/system";
import { Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign={"center"} mt={5}>
        <Routes>
          <Route path="/" element={<Settings/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/score" element={<FinalScreen/>} />
        </Routes>
        </Box>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
