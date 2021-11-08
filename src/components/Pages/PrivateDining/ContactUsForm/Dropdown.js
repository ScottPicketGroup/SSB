import React from "react"
import { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ title, options, dropWidth }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption ||  title }<Arrow />
            </DropDownHeader>
            <DropDownListContainer isOpen={isOpen} dropWidth={dropWidth}>
                <DropDownList isOpen={isOpen}>
                    {options.map(option => {
                        return(<ListItem onClick={onOptionClicked(option)}>
                            {option}
                        </ListItem>)
                    })}
                </DropDownList>
            </DropDownListContainer>
        </DropDownContainer>
    )
}

export default Dropdown



const DropDownContainer = styled("div")`
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.2rem;
  height: 1.75rem;
  padding: 1.5rem 0.5em 2rem 0;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: PitchRegular;
  color: black;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 1rem;
    height: 1rem;
`

const DropDownListContainer = styled("div")`
    position:absolute;
    height: 15rem;
    overflow-y: ${props => (props.isOpen ? "scroll" : "hidden")};
    width: ${props=>props.dropWidth ? props.dropWidth : "19%"};
    @media(max-width: 451px){
        width: ${props=>props.dropWidth ? "90%" : "43%"};
    }
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  transform: translateY(${props => (props.isOpen ? "unset" : "-100%")});
  transition: transform 0.5s ease-in-out;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  font-size: 16px;
  font-family: PitchRegular;
  color: black;
  background: #ffffff;
  &:hover{
      background: black;
      color: white;
  }
`;