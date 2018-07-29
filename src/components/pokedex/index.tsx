import axios from 'axios'
import React from 'react'

interface PokemonType {
  name: string
  url: string
}

interface TypesResult {
  count: number
  previous: any
  results: PokemonType[]
  next: any
}

export class Pokedex extends React.Component {
  pokemonTypes: PokemonType[] = []

  constructor(props: PokemonType[]) {
    super(props)

    this.getPokemonTypes()
  }  

  render() {
    return (
      <div className="pokedex">
        <h1>Welcome to the World of Pokemon!</h1>
        <ul id="pokemonTypes">
          {this.pokemonTypes.map((t:PokemonType) => <li>{t.name}</li>)}
        </ul>
      </div>
    );
  }

  getPokemonTypes() {
    axios.get('https://pokeapi.co/api/v2/type/').then( response => {
      let typesResult = response.data as TypesResult
      this.pokemonTypes = typesResult.results
      this.setState(typesResult.results)
    })
  }
}
