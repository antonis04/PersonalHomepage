import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "../atributes/homepage/Header";
import { MainContainer as Container } from "../common/Container";
import { Section } from "../atributes/homepage/Skills";
import { Skills } from "../common/Skills";
import { skillsList } from "../assets/mySkills";
import { toLearnList } from "../assets/learnList";
import { Portfolio } from "../atributes/homepage/Portfolio";
import { Footer } from "../atributes/homepage/Footer";
import { ThemeLight, ThemeDark } from "./theme";
import { selectThemeDark } from "../atributes/homepageSlice";
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
