import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";

const theme = {
  fontFamily: {
    ppObjectSans: "PPObjectSans-Regular",
    robotoMono: "Roboto Mono",
  },

  colors: {
    primaryColor: "#f1e9db",
    secondaryColor: "#333333",
    blackColor: "#0a0a0a",
    whiteColor: "#ffffff",
  },

  screens: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1250px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
