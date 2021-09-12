import { useContext, useEffect, useState } from "react"
import { BuildingsContext } from "../contexts/BuildingsContext"
import TableRow from "./TableRow"
import Modal from "./Modal"
import styles from "../styles/buildingsStyles"

const Table = () => {

    const { buildings, fetchBuildings, addBuilding } = useContext(BuildingsContext)
    console.log("asd", buildings);
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        fetchBuildings()

    }, [])

    return (
        <div className="table" style={styles.table}>
            {modalOpen && <Modal
                onClose={() => setModalOpen(false)}
                onAdd={addBuilding}
            />}
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
                    <img style={styles.icon} src={process.env.PUBLIC_URL + "add.png"} alt="add" onClick={() => setModalOpen(true)} />
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
