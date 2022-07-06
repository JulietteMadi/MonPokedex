const InputSearchPokemon = (props) => {
  return(
    <>
      <h4>Entrez le numéro de votre Pokémon préféré ou son nom anglais pour accéder à ses caractéristiques et l'ajouter à votre PokéTeam</h4>
      <form onSubmit={props.handleSubmit}>
      <label>
        <input type="text" onChange={props.handleChange} placeholder='Ex: `Pikachu` ou `25` ' id='espace-pokedex' />
      </label>
    </form>
    </>
    )
}

export default InputSearchPokemon;