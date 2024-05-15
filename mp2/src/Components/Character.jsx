import * as StyledTags from "../StyledTags.jsx";

export default function Character(character) {
    return(
        // <>
            <StyledTags.StyledDiv className={'game_list'}>
                <StyledTags.StyledImg
                    src={character.image}
                    alt={character.name}
                    className={'game_img'}
                />
                <div className={'game_info'}>
                    <h3 className={'game_name'}>{character.name}</h3>
                    <h3 className={'game_sale_price'}>{`Sale Price: $${character.salePrice}`}</h3>
                    <h3 className={'game_normal_price'}>{`Normal Price: $${character.normalPrice}`}</h3>
                    {/*<p>{`Origin: ${character.origin && character.origin.name}`}</p>*/}
                </div>
            </StyledTags.StyledDiv>
        // </>
    )
}