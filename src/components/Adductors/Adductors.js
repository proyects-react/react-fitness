import { useState, useEffect} from 'react'
import appFitness from '../../funciones'
import { Link } from 'react-router-dom'

const Adductors = () => {

    const [exercises, setExercises] = useState([])
    useEffect(() =>{
        appFitness(setExercises)
    },[])
    //lats = dorsales
    //traps = trapecio
    //spine = columna
    //delts = deltoides
    const Adductors = exercises.filter(p => p.target === "adductors");


    return (
        <>
        <div className='back-container'>
            <Link to="/"><button>Volver</button></Link>
        </div>
        <div className='container'>
            <div className='row'>
                <select>
                    <option value="all">Todos</option>
                    <option value="traps">Trapecio</option>
                    <option value="lats">Dorsales</option>
                </select>
            {exercises != null ? (Adductors.map(ej => (
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

export default Adductors