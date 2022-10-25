import { useState, useEffect} from 'react'
import appFitness from '../funciones'
import styled from 'styled-components'

const Biceps = () => {

    const [exercises, setExercises] = useState([])
    useEffect(() =>{
        appFitness(setExercises)
    },[])
    
    const biceps = exercises.filter(p => p.target === "biceps");


    return (
        <>
            {exercises != null ? (biceps.map(ej => (
                <BicepsMaster key={ej.id}>
                    <div >
                        <p >{ej.name}</p>
                        <img  src={ej.gifUrl}/>
                    </div>
                    
                </BicepsMaster>
            ))) : <div>no hay ejercicios</div>}
        </>
    )
}

export default Biceps

const BicepsMaster = styled.div`
border: 1px solid black;
width:300px;
img{
    height: 200px;
    width: 200px;
}
`