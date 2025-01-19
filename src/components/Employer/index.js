import './employer.css'

const Employer = ({nome, imagem, cargo, color}) => {
    return (
        <div className='employer'>
            <div className='header' style={{backgroundColor: color}}>
            <img src={imagem || "default-image-url.jpg"} alt={nome} />

            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Employer