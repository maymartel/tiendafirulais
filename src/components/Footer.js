import React from "react";
import deposito from '../media/icons/deposito.png';
import mercadopago from '../media/icons/mercadopago.png';
import pagofacil from '../media/icons/pagofacil.png';
import rapipago from '../media/icons/rapipago.png';
import acordar from '../media/icons/acordar.png';
import { UilFacebook } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilWhatsapp } from '@iconscout/react-unicons';

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-container-item">
                    <p>Medios de pago</p>
                    <div className="footer-icons">
                        <img src={deposito} alt="mastercard" className="icon-footer" />
                        <img src={mercadopago} alt="mastercard" className="icon-footer" />
                        <img src={pagofacil} alt="mastercard" className="icon-footer" />
                        <img src={rapipago} alt="mastercard" className="icon-footer" />
                        <img src={acordar} alt="mastercard" className="icon-footer" />
                    </div>
                </div>
               
                <div className="footer-container-item">
                    <p>Nuestras redes</p>
                    <div className="footer-icons">
                        <a href="" target="_blank"><UilFacebook className="redes-icon" /></a>
                        <a href="" target="_blank"><UilInstagram className="redes-icon" /></a>
                        <a href="" target="_blank"><UilWhatsapp className="redes-icon" /></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;