
import Table from "../components/Table"

import { BuildingsProvider } from "../contexts/BuildingsContext";

const Buildings = () => {
    return (
        <section>
            <BuildingsProvider>
                <Table />
            </BuildingsProvider>
        </section>
    )
}

export default Buildings
