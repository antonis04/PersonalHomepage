import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "../features/mainPage/Header";
import { MainContainer as Container } from "../common/Container";
import { Section } from "../features/mainPage/TechnicalSkills";
import { Skills } from "../common/Skills";
import { skillsList } from "../assets/mySkills";
import { toLearnList } from "../assets/learnList";
import { Portfolio } from "../features/mainPage/Portfolio";
import { Footer } from "../features/mainPage/Footer";
import { ThemeLight, ThemeDark } from "./theme";
import { selectThemeDark } from "../features/homepageSlice";
import { useSelector } from "react-redux";
import { useRefreshDisable } from "../RefreshDisable";

function App() {
  const darkThemeSelected = useSelector(selectThemeDark);
  const refreshDisabled = useRefreshDisable();

  return (
    <ThemeProvider theme={darkThemeSelected ? ThemeDark : ThemeLight}>
      <GlobalStyle refreshDisabled={refreshDisabled} />
      <Container>
        <Header />
        <Section
          headerContent={"My skillset includes 🛠️"}
          sectionContent={<Skills list={skillsList} />}
        />
        <Section
          headerContent={"What I want to learn next 🚀"}
          sectionContent={<Skills list={toLearnList} />}
        />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
