import Form from "../../components/Form/Form";
import { Section, Container } from "./MainPageStyle";
import SideSection from "../../components/SideSection/SideSection";

const MainPage = () => {
  return (
    <Section>
      <Container>
        <SideSection />
        <Form />
      </Container>
    </Section>
  );
};

export default MainPage;
