import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="perfil 1"/>
                <div>
                    <strong>Camila Fernandez</strong>
                    <span>Artes</span>
                </div>
            </header>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel lectus efficitur, 
            rutrum nibh in, posuere sem. Phasellus in bibendum nisi, quis dignissim nisl. Pellentesque sit 
            amet leo enim. Cras facilisis diam elit, ac sodales libero consequat nec. Vestibulum sed nulla ipsum.
                Curabitur id aliquet nibh. Phasellus turpis lectus, blandit sit amet eros sollicitudin, 
                mollis posuere augue.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00 </strong>
                </p>
                <button type='button'>
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato 
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;