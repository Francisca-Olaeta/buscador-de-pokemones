import { React, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Context from '../Context';

const PokemonCard = () => {
    const { pokemonSelected } = useContext(Context);
   

    if (pokemonSelected === undefined){
        return (
            <div>
                <p>Está cargando</p>
            </div>
        )
    }

    // const changeBgc = ({value})=>{
    //     if(value==='fire'){
    //         return 'fireClass';
    //     }
    //     else if(value==='grass'){
    //         return 'grassClass';
    //     }else {
    //         return '';
    //     }
    // }


  return (
    <>
    <div>
        <h2 className='pokeName my-2'>{pokemonSelected.name}</h2>
        {/* /*Card que retorna el Pokemon */ }
    
        <Card key={pokemonSelected.id} 
        value={pokemonSelected.type} 
        className='flex-row'

        // style=
        // {pokemonSelected.type==='fire' ? {backgroundColor: 'rgb(249, 209, 145)'} : null}
            >
            
            <Card.Img variant="top" src={pokemonSelected.src} />
         
            <Card.Body className='mx-4'>
                <Card.Title>#{pokemonSelected.id}</Card.Title>
                 
                <Card.Text>
                    {pokemonSelected.stats?.map((s, i)=>(
                        <li key={i}>
                        {s.name}:{s.base}
                        </li>
                    ))}
                </Card.Text>
                <Card.Text>
                    Type: {pokemonSelected.type}
                </Card.Text>
            
              
                
            </Card.Body>
        </Card>
       
 
    </div>

    </>
  )
}

export default PokemonCard