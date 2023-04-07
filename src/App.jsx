import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Page404 from "./pages/Page404";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country/:id" element={<Single />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
