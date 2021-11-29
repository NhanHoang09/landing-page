import Header from "./components/Header/index";
import { OuterLayout } from "./styles/Layout";
import styled from "styled-components";
import CardSection from "./components/CardSection/index";
import ChartSection from "./components/ChartSection";
import MessageSection from "./components/MessageSection";
import PaymentSection from "./components/PaymentSection/index";
import FAQsSection from "./components/FAQsSection/index";
import Footer from "./components/Footer/index";
import { Fade } from "react-reveal";

const MainStyled = styled.main``;

function App() {
  return (
    <div>
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>
          <Fade right>
            <ChartSection />
          </Fade>
          <Fade left>
            <MessageSection />
          </Fade>
          <Fade right>
            <PaymentSection />
          </Fade>
          <FAQsSection />
        </MainStyled>
      </OuterLayout>
      <Footer />
    </div>
  );
}

export default App;
