import { useState, createContext } from "react"
import buildingsResponse from "../data/buildingsData.json"

export const BuildingsContext = createContext([])

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

export const BuildingsProvider = ({ children }) => {
    const [buildings, setBuildings] = useState([])

    const fetchBuildings = async () => {
        await delay(500)
        setBuildings(buildingsResponse)
    }

    const addBuilding = (data) => {
        setBuildings([...buildings, data])
    }

    const editBuilding = (data) => {
        const elIndex = buildings.findIndex(el => el.id === data.id)
        buildings[elIndex] = data
        setBuildings([...buildings])
    }

    const deleteBuilding = (key) => {
        setBuildings(buildings.filter(el => el.id !== key))
    }

    return (
        <BuildingsContext.Provider value={{ buildings, fetchBuildings, addBuilding, editBuilding, deleteBuilding }}>
            {children}
        </BuildingsContext.Provider>
    )
}

