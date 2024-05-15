import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {StyledProfileContainer} from "../styledTags.jsx";
import List from "../components/List.jsx";
import Link from "../components/Link.jsx";

export default function Project({ userName }) {
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.github.com/repos/${userName}/${name}`,
            );
            const result = await data.json();

            if (result) {
                setProject(result);
                setLoading(false);
            }
        }

        if (userName && name) {
            fetchData();
        }
    }, [userName, name]);

    const items = [
        { field: 'Description', value: project.description },
        { field: 'Language', value: project.language },
        {
            field: 'Html URL',
            value: <Link url={project.html_url} title={project.html_url} />,
        },
    ];

    return (
        <StyledProfileContainer>
            <h2>{project.name}</h2>
            {loading ? <span>Loading...</span> : (
                <div>
                <List items={items}/>
                </div>
            )}
        </StyledProfileContainer>
    );
}
