import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getPokemons } from "../redux/pokemonSlice"

export const HistorialBuscados = () => {
    const dispatch = useAppDispatch()
    const historial = useAppSelector(state => state.pokemon.historialBusquedas)

    return (
        <div>
            <h3>Pokemons buscados:</h3>

            {historial && historial.map((busqueda: string, i) => (
                <div onClick={() => dispatch(getPokemons(busqueda))}>
                    <strong>{busqueda}</strong>
                </div>
            ))}

        </div>
    )
}