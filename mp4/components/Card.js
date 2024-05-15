import styled from 'styled-components';
import Image from "next/image";
import Link from "next/link";

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2%;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
  color: black;
`;

const Count = styled.span`
  color: darkGray;
`;
const StyledP = styled.p`
    color: black;
`
const StyledAttribute = styled.span`
    padding-left: 10px;
    color: black;
    font-weight: bold;
`

const StyledValue = styled.span`
    padding: 0 10px;
    color: black;
`
const StyledImage = styled.img`
    width: 100px;
    
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const Container = styled.div`
    flex-direction: row;
    display: flex;
    //flex-wrap: wrap;
`
const UserInfoContainer = styled.div`
    margin-left: 50px;
`

export default function Card({ title, views, answers, tags, owner_name, profile_image,  is_answered, score, link  }) {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Count>{`Views: ${views} | Answers: ${answers} | Answered: ${is_answered} | Score: ${score}`}</Count>
        </CardWrapper>
    );
}
export function CardDetail({ title, views, answers, tags, owner_name, profile_image,  is_answered, score, link  }) {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Container>
                <StyledImage src={profile_image} alt={"Image of the user who asked the question."}/>
                <UserInfoContainer>
                    <StyledP>
                        <StyledAttribute>{"Author:"}</StyledAttribute>
                        <StyledValue>{`${owner_name}`}</StyledValue>
                    </StyledP>
                    <StyledP>
                        <StyledAttribute>{"Score:"}</StyledAttribute>
                        <StyledValue>{score}</StyledValue>
                        <StyledAttribute>{"is_answered:"}</StyledAttribute>
                        <StyledValue>{`${is_answered}`}</StyledValue>
                    </StyledP>
                </UserInfoContainer>
            </Container>
            <StyledP>
                <StyledAttribute>{"Link: "}</StyledAttribute>
                <StyledLink href={`${link}`}>{`${link} `}</StyledLink>
            </StyledP>
            <StyledP>
                <StyledAttribute>{"Tags: "}</StyledAttribute>
                {`${tags} `}
            </StyledP>

            <Count>{`Views: ${views} | Answers: ${answers}`}</Count>
        </CardWrapper>
    );
}