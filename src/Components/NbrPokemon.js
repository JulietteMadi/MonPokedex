const Header = (props) => {
    return(
        <>
        <h2>Bienvenue sur votre Pokédex !</h2>
            {props.nbrPokemon == 0 
                ? <h4>Votre Pokéteam est vide</h4>
                : <h4>Vous pouvez encore ajouter {6 - props.nbrPokemon} Pokémons.</h4>
            } 
            {props.nbrPokemon < 6 
                ? <h4>Rendez-vous sur
                    <span className="textURL" onClick={() => {
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: 'smooth'
                        })
                    }}> l'espace de recherche Pokémon</span> pour trouver vos futurs compagnons !</h4>
                :<h4>Votre PokéTeam est complète. Vous êtes prêt.e à combattre ! 💪</h4>
                }            
        </>
    )
}

export default Header;

