import { useState, useEffect } from 'react';
import Link from '../components/Link';
import List from '../components/List';
import styled from "styled-components"
import {StyledProfileContainer} from "../styledTags.jsx";

const StyledAvatar = styled.img`
    width: 150px;
`
export default function Profile({ userName }) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    const items = [
        {
            field: 'Html URL',
            value: <Link url={profile.html_url} title={profile.html_url} />,
        },
        {
            field: 'Repository URL',
            value: <Link url={profile.repos_url} title={profile.repos_url} />,
        },
        { field: 'Name', value: profile.name },
        { field: 'Company', value: profile.company },
        { field: 'Location', value: profile.location },
        { field: 'Email', value: profile.email },
        { field: 'Bio', value: profile.bio },
    ];

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();

            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <StyledProfileContainer className='Profile-container' >
            <h2>About me</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <StyledAvatar
                        src={profile.avatar_url}
                        alt={profile.name}
                    />
                    <List items={items} />
                </div>
            )}
        </StyledProfileContainer>
    );
}