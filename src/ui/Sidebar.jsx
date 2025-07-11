import styled from "styled-components";
// import Uploader from "../data/Uploader";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyleSidebar>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </StyleSidebar>
  );
}

export default Sidebar;
