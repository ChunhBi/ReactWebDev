import {useEffect, useState} from "react";
import Character from "./Character.jsx";
import * as StyledTags from "../StyledTags.jsx";

export default function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true );

    useEffect(() => {
        async function fetchData() {
            const webData = await fetch("https://www.cheapshark.com/api/1.0/deals?upperPrice=15");
            // const catData = await fetch("https://www.colourlovers.com/api/colors/new?format=json");
            // console.log('data:', webData)
            const fetchResults = await webData.json();
            // console.log('result:', fetchResults)

            // remove repeated characters
            const uniqueCharacters = fetchResults.filter((character, index, self) =>
                index === self.findIndex(c => c.gameID === character.gameID)
            );
            setCharacters(uniqueCharacters);
            setLoading(false);
        }
        fetchData();
        }, [characters.length]
    );

    return (
        <div>
            <StyledTags.StyledTitle>Games</StyledTags.StyledTitle>
            <StyledTags.StyledContainer className={'row'}>
                {loading ? (
                    <div>Loading...</div>
                ) :(
                    characters.map((character)=>(
                        <Character
                            key={character.gameID}
                            name={character.title}
                            image={character.thumb}
                            salePrice={character.salePrice}
                            normalPrice={character.normalPrice}
                        />
                    ))
                )}
            </StyledTags.StyledContainer>
        </div>
    );
}