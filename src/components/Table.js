import { useContext, useEffect } from "react"
import { BuildingsContext } from "../contexts/BuildingsContext"
import TableRow from "./TableRow"
import styles from "../styles/buildingsStyles"

const Table = () => {

    const { buildings, fetchBuildings } = useContext(BuildingsContext)
    console.log("asd", buildings);

    useEffect(() => {
        fetchBuildings()

    }, [fetchBuildings])
    // const data = [
    //     {
    //         id: 1,
    //         name: "Windsor",
    //         area: 200,
    //         location: "London",
    //         imageID: "london.jpg"
    //     }
    // ]
    return (
        <div className="table" style={styles.table}>
            <div className="headerRow" style={styles.headingRow}>
                <div style={styles.box}>
                    Id
                </div>
                <div style={styles.box}>
                    Name
                </div>
                <div style={styles.box}>
                    Area
                </div>
                <div style={styles.box}>
                    Location
                </div>
                <div style={styles.box}>
                    Image
                </div>
                <div style={styles.box}>
                    Actions
                </div>
            </div>
            {buildings && buildings.map(el => <TableRow
                key={el.id}
                id={el.id}
                name={el.name}
                area={el.area}
                location={el.location || "N/A"}
                imageID={el.imageID || null}
            />)}
        </div>
    )
}

export default Table
