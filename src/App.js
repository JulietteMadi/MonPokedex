import './Styles/App.css';
import './Styles/PokeTeam.css';
import './Styles/PokeResearchedSpace.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Components/NbrPokemon';
import PokemonSearched from './Components/PokemonSearched';
import PokeTeam from './Components/PokeTeam';
import InputSearchPokemon from './Components/InputSearchPokemon';

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState ([]);
  const [pokemonType, setPokemonType] = useState ("");
  const [nbrPokemon, setNbrPokemon] = useState(0);
  const [pokeTeam, setPokeTeam] = useState([{}, {}, {}, {}, {}, {}]);

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data)
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray)
    } 
    catch(e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  useEffect(() => {
    if(pokemonData.length !=0) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [pokemonData])
  
  const addToPokeTeam = (pokeToAdd) => {
    setPokeTeam([
      pokeToAdd,
      ...pokeTeam.slice(0, -1),
    ]);
    setNbrPokemon(nbrPokemon + 1);
  };

  const removeFromPokeTeam = (pokeNameToRemove) => {
    const index = pokeTeam.findIndex((pokeInTeam) => pokeInTeam.name === pokeNameToRemove);
     if(index === -1) {
      return;
    }
    
    setPokeTeam([
      ...pokeTeam.slice(0, index),
      ...pokeTeam.slice(index + 1),
      {},
    ]);
    setNbrPokemon(nbrPokemon - 1)
  };


  return (
    <div className='App'>
      <div className='divPokeTeam'>
        <Header nbrPokemon={nbrPokemon} />
        <PokeTeam
          pokeTeam={pokeTeam}
          removeFromPokeTeam={removeFromPokeTeam}
          setNbrPokemon={setNbrPokemon}
          setPokeTeam={setPokeTeam}
        />
      </div>
      <div className='divPokeResearchedSpace'>
      <InputSearchPokemon handleChange={handleChange} handleSubmit={handleSubmit} />
      <PokemonSearched id='searched-pokemon'
        pokemonData={pokemonData}
        nbrPokemon={nbrPokemon}
        pokemonType={pokemonType}
        addToPokeTeam={addToPokeTeam}
      />
      </div>
    </div>
  );
};

export default App;
