
const header = {
    halfFlex: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '0 2rem',
    },

    inlineA: {
        display: 'flex',
        flexGrow: '0',
        padding: '0 2rem 0 0',
        transition: 'all .3s ease'
    },

    imageContainer: {
        display: 'flex',
        width: '5rem',
        height: '100%'
    },

    img: {
        width: "5rem",
        height: "5rem",
        objectFit: "contain"
    },


    header: {
        width: '100vw',
        height: '100px',
        borderBottom: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: '0',
        background: `rgba(255,255,255, 0.9)`,
        backdropFilter: 'blur(5px)'
    }
}


export default header;
