import React from "react"
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Dropdown = ({ title, options, dropWidth, setInputs, input }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const ref = useRef(null)

    const toggling = () => {
        setIsOpen(!isOpen);
    }

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    useEffect(() => {
     
        setInputs(inputs => ({ ...inputs, [input]: selectedOption }))
        
    }, [selectedOption])

    return (
        <DropDownContainer ref={ref}>
            <DropDownHeader onClick={toggling}>
                {selectedOption ||  title }<Arrow />
            </DropDownHeader>
            <DropDownListContainer isOpen={isOpen} dropWidth={dropWidth}>
                <DropDownList isOpen={isOpen}>
                    <ListItem onClick={onOptionClicked(title)} color="grey">{title}</ListItem>
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
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 1rem;
    height: 1rem;
`

const DropDownListContainer = styled("div")`
    position:absolute;
    max-height: ${props => (props.isOpen ? "15rem" : "0rem")};
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;
    width: ${props=>props.dropWidth ? props.dropWidth : "19.2%"};
    @media(max-width: 451px){
        width: ${props=>props.dropWidth ? "90%" : "43%"};
    }
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid black;
  border-top: none;
  box-sizing: border-box;
  max-height: 15rem;
  overflow-x: hidden;
  overflow-y: auto;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  transform: translateY(${props => (props.isOpen ? "unset" : "-100%")});
  transition: transform 0.5s ease-in-out;
  &:first-child {
    padding-top: 0.2em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 0.4em;
  font-size: 16px;
  font-family: PitchRegular;
  color: ${props=>props.color ? "grey" : "black"};
  background: #ffffff;
  &:hover{
      background: black;
      color: white;
  }
`;