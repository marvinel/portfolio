

function Pdf() {
    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }} >
            <object
                data={require('../assets/documento/Ecv.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
            > </object>
        </div>
    );
}

export default Pdf;