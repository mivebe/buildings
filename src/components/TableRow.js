import styles from "../styles/buildingsStyles"

const TableRow = ({ id, name, area, location, imageID }) => {
    return (
        <div className="row" style={styles.row}>

            <div style={styles.box}>
                {id}
            </div>

            <div style={styles.box}>
                {name}
            </div>

            <div style={styles.box}>
                {area}
            </div>

            <div style={styles.box}>
                {location ? location : <span style={{ color: 'gray' }}>no specified location</span>}
            </div>

            <div style={styles.box}>
                {imageID ?
                    <img src={process.env.PUBLIC_URL + imageID} alt='uploaded' style={styles.img} />
                    :
                    <img src={process.env.PUBLIC_URL + 'placeholderImage.jpg'} alt='placeholder' style={styles.img} />
                }
            </div>

            <div style={styles.box}>
                Edit
                Delete
            </div>
        </div>
    )
}

export default TableRow
