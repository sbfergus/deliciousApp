import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';


function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch size={20}/>
            <input 
                type="text"
                placeholder='Something delicious is waiting...' 
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 400px) {
        padding: 1rem 0rem;
      }
    div {
        width: 100%;
        position: relative;
        margin: auto;
        margin-right: 3rem;
        @media (max-width: 675px) {
            margin-right: 0;
        } 
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.25rem;
        color: white;
        padding: .5rem 3.25rem;
        border: none;
        box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.57);
        border-radius: 1rem;
        outline: none;
        width: 100%;
        :: placeholder {
            color: white;
         }
        @media (max-width: 950px) {
            :: placeholder {
                font-size: .8rem;
            }
        }
       
        
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    
`

export default Search

// const FormStyle = styled.form`
// background: blue;
// width: 100%;
//     div {
//         width: 100%;
//         position: relative;
//         margin: auto;
//         margin-top: 2rem;
//         @media (max-width: 400px) {
//             width: 100%;
//         }
//     }
//     input {
//         border: none;
//         background: linear-gradient(35deg, #494949, #313131);
//         font-size: 1.5rem;
//         color: white;
//         padding: 1rem 3rem;
//         border: none;
//         border-radius: 1rem;
//         outline: none;
//         width: 100%;
//         @media (max-width: 400px) {
//             font-size: 1rem;
//             ::placeholder {
//                 font-size: 1rem;
//             }
//         }
//     }
//     svg {
//         position: absolute;
//         top: 50%;
//         left: 0%;
//         transform: translate(100%, -50%);
//         color: white;
//     }
    
// `