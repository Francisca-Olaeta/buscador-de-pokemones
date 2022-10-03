import { React, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import Context from '../Context';

const Pokemones = () => {
    /*Paso los estados a través de useContext */
    const {pokemon, setPokemon, id, setId} = useContext(Context);

    /*Hook useNavigate para cambiar la url según elemento seleccionado */
    const navigate = useNavigate();
   
    /*Función asíncrona para llamar a la api */
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';
    const getInfo = async() => {
        try {
              const res = await fetch(`${baseUrl}/${id}`);
              const data = await res.json();
              setPokemon(data.results);
            } catch (e) {
                alert("error")
            }
        }

      /*Función irAPokemon para ver detalles del pokemon seleccionado */
      const irAPokemon = () => {
        /*Si es que hay algo en el estado "id", ejecuta el useNavigate y agrega al final de la url el id*/
        if(id){
          navigate(`/pokemones/${id}`);
          setId('');
        }
        else alert ("Selecciona un pokemon")
    }
    
  /*Hook para poder trabajar con la api */
    useEffect(()=>{
        /*Callback */
      getInfo(id);
    }, []);
   

   
   
  return (
    <>
        <div className='section'>
            <h2 className='section__title'>Encuentra tu Pokemon</h2>
            
        {/* /*Renderizado dinámico del select */ }
            <Form.Select 
            className='section__select'
            value={id}
            onChange={({target}) => setId(target.value)}
            size='lg'>
                <option value="">Selecciona un Pokemon</option>
                {pokemon.map((e, i) => (
                    /*Acá le asigno como valor el nombre */
                    <option key={i} value={e.name}>{e.name}</option>
                ))}
                
            </Form.Select>
            <Button onClick={ irAPokemon }>Ver Detalle</Button>

        </div>
    
    </>
  )
}

export default Pokemones