import { useEffect, useState } from "react"
import appFitness from '../funciones'


const Inicio = () => {

const [exercises, setExercises] = useState([])
useEffect(() =>{
    appFitness(setExercises)
},[])

const pectorals = exercises.filter(p => p.target === "triceps");


    return (
        <>
            {exercises != null ? (pectorals.map(ej => (
                <div>
                    <p>{ej.name}</p>
                    <img key={ej.id} src={ej.gifUrl}/>
                </div>
            ))) : <div>no hay ejercicios</div>}
        </>
    )
}

export default Inicio