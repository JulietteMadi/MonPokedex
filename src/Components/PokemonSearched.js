const PokemonSearched = (props) => {
    console.log(props)
    
    return (
        <>
        {props.pokemonData.map((data) => {
            return (
            <div className='container'>
                <img src={data.sprites ["front_default"]} />
                <div className='divTable'>
                <div className='divTableBody'>
                <div className='divTableRow'>
                    <div className='divTableCell'>Name</div>
                    <div className='divTableCell'>{data.name}</div>
                </div>
                <div className='divTableRow'>
                    <div className='divTableCell'>Type</div>
                    <div className='divTableCell'>{props.pokemonType}</div>
                </div>
                <div className='divTableRow'>
                    <div className='divTableCell'>Height</div>
                    <div className='divTableCell'>{" "}{data.height * 10} cm</div>
                </div>
                <div className='divTableRow'>
                    <div className='divTableCell'>Weight</div>
                    <div className='divTableCell'>{" "}{data.weight / 10} kg</div>
                </div>
                { props.nbrPokemon < 6
                    ? <button onClick={() => {props.addToPokeTeam(data)}} className='pokeButton'>Ajouter ce Pokémon à ma PokéTeam</button>
                    : <p className='buttonPokeTeamIsFull'>Ta poketeam est déjà complète</p>
                }
                
                </div>
                </div>
            </div>
            
            )
        })}
      </>
    )
}

export default PokemonSearched;