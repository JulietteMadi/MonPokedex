const Pokemon = (props: any) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.id}</div>
            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}></img>
        </div>
    )
}

export default Pokemon;