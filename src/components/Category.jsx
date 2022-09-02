import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Chinese"}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </SLink>
        
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    transition: 1s ease all;

    @media (max-width: 600px) {
        width: 4rem;
        height: 4rem;
        margin-right: 0;
    };

    h4 {
        color: white;
        font-size: 0.8rem;
        margin: 0;
        margin-bottom: .25rem;

        @media (max-width: 600px) {
            font-size: 0.55rem;
        };
    };

    svg {
        color: white;
        font-size: 1.5rem;
        margin: 0;
        margin-bottom: .25rem;
    };
    
    &.active {
        background: linear-gradient(to right, #f27121, #e94057)
    };

    &:hover {
        background: lightblue;
        transform: scale(.95);
        transition: 1s ease all;
        h4 {
            color: #494949; 
        };
        svg {
            color: #494949;
        };
    };

    svg {
        color: white;
    };
    h4 {
        color: white;
    };
`;



export default Category
