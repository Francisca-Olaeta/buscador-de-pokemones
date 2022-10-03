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

    //Función para cambiar el color de la tarjeta según tipo de pokemon
    const style = `${pokemonSelected.type}`


  return (
    <>
    <div>
        <h2 className='pokeName my-2'>{pokemonSelected.name}</h2>
        {/* /*Card que retorna el Pokemon */ }
    
        <Card key={pokemonSelected.id} className={`flex-row myCard ${style}`}> 
            
            <Card.Img variant="top" src={pokemonSelected.src} style={{width: '20rem'}} />
         
            <Card.Body className='ms-4'>
                <Card.Title>#{pokemonSelected.id}</Card.Title>
                 
                <Card.Text className='d-flex flex-column' style={{width: '11rem'}}>
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