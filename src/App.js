import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';
import { Header } from '../../attributes/homepage/Homepage/MainHeader';
import { MainContainer } from '../../common/Container/styled';
import { Section } from '../../attributes/homepage/Homepage/SkillsSection';
import { Skills } from '../../common/Skills';
import { skillsList } from '../../assets/skillsList';
import { toLearnList } from '../../assets/toLearnList';
import { Portfolio } from '../../attributes/homepage/Homepage/Portfolio';
import { Footer } from '../../attributes/homepage/Homepage/Footer';
import { ThemeLight, ThemeDark } from 'theme';
import { selectThemeDark } from '../../attributes/homepage/homepageSlice';
import { useSelector } from 'react-redux';
import { useRefreshDisable } from '../../useRefreshDisable';

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
    </ThemeProvider >
  );
}

export default App;