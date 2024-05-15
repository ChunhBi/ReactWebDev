import styled from "styled-components"

const StyledOutLink = styled.a`
    color: #61dafb;
`

export default function Link({ url, title }) {
    return (
        <StyledOutLink
            href={url}
            target='_blank'
            rel='noopener noreferrer'
        >
            {title}
        </StyledOutLink>
    );
}