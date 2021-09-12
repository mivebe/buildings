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

    return (
        <BuildingsContext.Provider value={{ buildings, fetchBuildings }}>
            {children}
        </BuildingsContext.Provider>
    )
}

