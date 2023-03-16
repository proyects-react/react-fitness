import { useState, useEffect} from 'react'
import appFitness from '../../funciones'
import { Link } from 'react-router-dom'

const Abs = () => {

    const [exercises, setExercises] = useState([])
    useEffect(() =>{
        appFitness(setExercises)
    },[])
    
    const abs = exercises.filter(p => p.target === "abs");
    const [ currentPage, setCurrentPage ] = useState(0)
    const nextPage = () => {
        setCurrentPage( currentPage + 10)
    }
    const prevPage = () => {
        if( currentPage > 0)
        setCurrentPage( currentPage - 10)
    }



    return (
        <>
        <div className='back-container'>
            <Link to="/"><button>Volver</button></Link>
        </div>
        <div className='container'>
            <div className='row'>

            {exercises != null ? (abs.slice(currentPage, currentPage + 10).map(ej => (
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
        <footer className='footer-page'>
            <button 
            className='btn'
            onClick={prevPage}
            >
                Back
            </button>
            <button 
            className='btn'
            onClick={nextPage}
            >
                Next
            </button>
        </footer>
        </>
    )
}

export default Abs