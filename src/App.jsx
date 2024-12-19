import { Box, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme/theme";
import Navbar from "./Components/Navbar";
import BannerSection from "./Banner/BannerSection";
import Features from "./Banner/Features";
import Offers from "./Components/Offers";
import UserGuide from "./UserGuide/UserGuide";
import About from "./about/About";
import Footer from "./Components/Footer";
import SliderWithHighlight from "./Components/SlideWithHighlight";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <Navbar />
      <BannerSection />
      <Features />
      <Offers />
      <UserGuide />
      <About />
      <Footer />
      {/* <SliderWithHighlight /> */}
    </Box>
  );
}

export default App;
