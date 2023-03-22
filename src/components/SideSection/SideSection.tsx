import MainIcon from "../../assets/MainIcon";
import { ArrowIcon } from "../../assets/ArrowIcon";
import { Container, SvgContainer } from "./SideSectionStyle";

const SideSection = () => {
  return (
    <Container>
      <h1>Add order</h1>
      <SvgContainer>
        <MainIcon />
      </SvgContainer>
      <ArrowIcon />
    </Container>
  );
};

export default SideSection;
