import { useState, useEffect, useRef } from "react"
import styles from "../styles/buildingsStyles"

const Modal = ({ data, onClose, onAdd, onEdit }) => {

    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)
    const [newData, setNewData] = useState({})

    const nameRef = useRef(null)
    const areaRef = useRef(null)
    const locationRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }

    }, [image])

    return (
        <div style={styles.modal}>
            <div className="headerRow" style={styles.row}>
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
                    <img style={styles.icon} src={process.env.PUBLIC_URL + "close.png"} alt="add" onClick={() => { onClose() }} />
                </div>
            </div>
            <section style={styles.row}>
                <form className="asd" onSubmit={e => e.preventDefault()}>
                    <input type="text" id="name" name="name" style={styles.box} ref={nameRef} onChange={e =>
                        setNewData({ ...newData, name: e.target.value })} />

                    <input type="text" id="area" name="area" style={styles.box} ref={areaRef} onChange={e =>
                        setNewData({ ...newData, area: e.target.value })} />

                    <input type="text" id="location" name="location" style={styles.box} ref={locationRef} onChange={e =>
                        setNewData({ ...newData, location: e.target.value })} />

                    <input type="file" id="image" name="image" style={styles.box} ref={imageRef} onChange={(e) => {
                        setImage(e.target.files[0]);
                        setNewData({ ...newData, imageID: e.target.files[0].name })
                    }} />

                </form>

                <div style={styles.box}>
                    {preview && <img style={styles.img} src={preview} alt="preview" />}
                </div>

                <div>
                    <button onClick={() => {
                        if (onAdd) {
                            onAdd({ ...newData, id: 8 });
                        }

                        if (onEdit) {
                            onEdit({ ...newData, id: data.id })
                        }

                        onClose()
                    }}>Submit</button>
                </div>
            </section>
        </div>
    )
}

export default Modal
