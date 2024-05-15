import styled from 'styled-components';
import Head from 'next/head';
import Link from "next/link";

const HeaderWrapper = styled.div`
  background-color: orange;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;
const StyledTitle = styled(Link)`
    text-decoration: none;
    color: white;
`

function Header() {
    return (
        <>
            <Head>
                <title>Stackoverflow Question Port</title>
                <meta
                    name='description'
                    content='This is a Stackoverflow Question Port project build with React. Stackoverflow API used.'
                />
            </Head>
            <HeaderWrapper>
                <StyledTitle href={"/"}> <Title>Question Port</Title> </StyledTitle>
            </HeaderWrapper>
        </>
    );
}

export default Header;