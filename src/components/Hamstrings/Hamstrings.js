import { useState, useEffect} from 'react'
import appFitness from '../../funciones'
import { Link } from 'react-router-dom'

const Hamstrings = () => {

    const [exercises, setExercises] = useState([])
    useEffect(() =>{
        appFitness(setExercises)
    },[])
    
    const Hamstrings = exercises.filter(p => p.target === "hamstrings");

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
        <Link to="/"><button  id="inicio">Volver</button></Link>
        </div>
        <div className='container'>
            <div className='row'>

            {exercises != null ? (Hamstrings.slice(currentPage, currentPage + 10).map(ej => (
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
            <a href="#inicio"><button 
            className='btn'
            onClick={prevPage}
            >
                Back
            </button></a>
            <a className="go-up" href="#inicio"><button 
            className='btn'
            onClick={nextPage}
            >
                Next
            </button></a>
        </footer>
        </>
    )
}

export default Hamstrings