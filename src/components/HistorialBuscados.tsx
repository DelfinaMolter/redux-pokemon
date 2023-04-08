import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { actionBusqueda, getPokemons } from "../redux/pokemonSlice"

export const HistorialBuscados = () => {
    const dispatch = useAppDispatch()
    const historial = useAppSelector(state => state.pokemon.historialBusquedas)

    const onClick = (busqueda:string) =>{
        dispatch(getPokemons(busqueda))
        dispatch(actionBusqueda(busqueda))
    }

    return (
        <div>
            <h3>Pokemons buscados:</h3>

            {historial && historial.map((busqueda: string, i) => (
                <div onClick={() => onClick(busqueda)} key={i+1}>
                    <strong>{busqueda}</strong>
                </div>
            ))}

        </div>
    )
}