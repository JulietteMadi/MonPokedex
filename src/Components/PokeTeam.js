
const PokeTeam = (props) => {
    return (
        <>
        <div className='poketeamContainer'>
        {props.pokeTeam.map ((pokemon) => {
            if(Object.keys(pokemon).length === 0) {
            return (
                <div className="poketeamCell"/>
            );
            }
            const {name, sprites} = pokemon;
            return (
            <div className="poketeamCell">
                <img className="imgPokeTeam" src={sprites["front_default"]} />
                <p>{name}</p>
                <button className='pokeButton' onClick={() => props.removeFromPokeTeam(name)}>Enlever de la PokéTeam</button>
            </div>
            )
        })}
        </div>
        <button className='pokeButton' onClick={() => {props.setNbrPokemon(0); props.setPokeTeam([{}, {}, {}, {}, {}, {}])}}>Réinitaliser ma PokéTeam</button>   
        </>
    )
    }
    export default PokeTeam;