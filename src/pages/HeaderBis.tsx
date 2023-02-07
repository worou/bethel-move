import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const HeaderBis:React.FC = ({titre}:any) => {
    return (
        <section className="breadcrumb-main pb-0" style={{ backgroundImage: "url(assets/images/bg/bg8.jpg)" }}>
            <div className="breadcrumb-outer pt-10">
                <div className="container">
                    <div className="breadcrumb-content d-md-flex align-items-center pt-10">
                        <h2 className="mb-0">{ titre }</h2>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Accueil</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{ titre }</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="dot-overlay"></div>
        </section>
    )
}

export default HeaderBis