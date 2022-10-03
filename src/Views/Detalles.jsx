import { React, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../Context';
import PokemonCard from '../Components/PokemonCard';

const Detalles = () => {
  const { id } = useParams();
  const { pokemonSelected, setPokemonSelected} = useContext(Context);

  
   /*Función asíncrona para llamar a la api */
   const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
   const getInfoPoke = async(id) => {
       try {
             const res = await fetch(`${baseUrl}/${id}`);
             const data = await res.json();
             const dataFiltrada = {
              name: data.species.name,
              src: data.sprites.other.dream_world.front_default,
              type: data.types[0].type.name,
              id: data.id,
              stats: data.stats.map((st)=>({
                name: st.stat.name,
                base: st.base_stat
              }
              ))
             }
             setPokemonSelected(dataFiltrada)
   
            console.log(data);
            console.log(dataFiltrada);
           
          
       } catch (e) {
           alert("error")
       }
   }
   useEffect(()=>{
    getInfoPoke(id);
   }, [id]);


  return (
    <>
    <div className="section">
    <h3>Tu Pokemon seleccionado es</h3>

    
    <PokemonCard pokemonSelected={pokemonSelected} />
       
    </div>
    </>
  )
}

export default Detalles