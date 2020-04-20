import React, { Component } from 'react'
import './Pokecard.css'

// const api =
// ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
// `
const api =
`  https://assets.pokemon.com/assets/cms2/img/pokedex/detail/
`
let convert=(num)=>(
    num <=99 ? `00${num}`.slice(-3): num
)

export default class Pokecard extends Component {
    render() {
        let imgSrc = `${api}${convert(this.props.id)}.png`
        return (
            <div className='Pokecard'>
               <h1 >{this.props.name} </h1> 
                <img src={imgSrc} alt='loading'/>
                <div > Type:{this.props.type}</div>
                <div > Experience :{this.props.exp}</div>
            </div>
        )
    }
}
// className='pokecard-title'