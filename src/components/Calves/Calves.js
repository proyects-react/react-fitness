import { useState, useEffect} from 'react'
import appFitness from '../../funciones'
import { Link } from 'react-router-dom'

const Calves = () => {

    const [exercises, setExercises] = useState([])
    useEffect(() =>{
        appFitness(setExercises)
    },[])
    
    const Calves = exercises.filter(p => p.target === "calves");


    return (
        <>
        <div className='back-container'>
            <Link to="/"><button>Volver</button></Link>
        </div>
        <div className='container'>
            <div className='row'>

            {exercises != null ? (Calves.map(ej => (
                <div className="col" key={ej.id}>
                    <div className='card'>
                        <h4 className="card-title">{ej.name}</h4>
                        <img src={ej.gifUrl} className="img-fluid" alt={ej.name}/>
                        <div className="card-body">
                            <Link to="/asdasd" className="btn btn-warning">Ver ejercicio</Link>
                        </div>
                    </div>
                    
                </div>
            ))) : <div>no hay ejercicios</div>}
            </div>
        </div>
        </>
    )
}

export default Calves