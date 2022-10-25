import {useState, useEffect} from 'react'
import appFitness from '../funciones'

const Forearms = () => {

    const [exercises, setExercises] = useState([])
    useEffect(() =>{
        appFitness(setExercises)
    },[])

const forearms = exercises.filter(p => p.target === "forearms")

    return (
        <>
            {exercises != null ? (forearms.map(ej => (
                    <div key={ej.id}>
                        <p >{ej.name}</p>
                        <img  src={ej.gifUrl}/>
                    </div>
            ))) : <div>no hay ejercicios</div>}
        </>
    )
}

export default Forearms