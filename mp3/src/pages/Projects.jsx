import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import List from '../components/List';
import {StyledNavLink, StyledProfileContainer} from "../styledTags.jsx";

export default function Projects({ userName }) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.github.com/users/${userName}/repos`,
            );
            const result = await data.json();

            if (result) {
                setProjects(result);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <StyledProfileContainer>
            <h2>Projects</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <List
                        items={projects.map((project) => ({
                            field: project.name,
                            value: (
                                <StyledNavLink to={`/projects/${project.name}`}>
                                    Open project
                                </StyledNavLink>
                            ),
                        }))}
                    />
                </div>
            )}
        </StyledProfileContainer>
    );
}