import Pages from "./pages/Pages";
import {HashRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {

  return (
    <div className="App">
        <HashRouter>
            <Nav>
              <LogoContainer>
                <GiKnifeFork />
                <Logo to={'/'}>Delicious</Logo>
              </LogoContainer>
              <Search />
            </Nav>
          <Pages />
        </HashRouter>
    </div>
  );
}

const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  @media (max-width: 675px) {
    margin-left: 0;
    margin-right: 1rem;
  }
  @media (max-width: 400px) {
    margin: 0;
    width: 100%;
  } 
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Cormorant Garamond', serif;
  margin-left: 5px;
  color: black;
  @media (max-width: 590px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  svg {
    font-size: 2rem;
    fill: black;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-top: 1rem;
  }
`

export default App;
