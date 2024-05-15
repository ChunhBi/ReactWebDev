import styled from "styled-components"

const StyledUl = styled.ul`
    list-style: none;
    //padding: 0;
    //text-align: left;
`

const StyledLi = styled.li`
    //display: flex;
    //justify-content: space-between;
`

const StyledField = styled.p`
    //font-weight: 600;
    padding-right: 2%;
    right: 50%;
    position: absolute;
    display: inherit;
`
const StyledValue = styled.p`
    //font-weight: 600;
    margin-left: 2%;
    left: 50%;
    position: absolute;
`

export default function List({ items }) {
    return (
        <StyledUl>
            {items.map((item) => (
                <StyledLi key={item.field}>
                    <StyledField>{item.field}: </StyledField>
                    <StyledValue>{item.value} </StyledValue>
                    <br/>
                </StyledLi>
            ))}
        </StyledUl>
    );
}