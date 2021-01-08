import React, { useContext } from 'react';
import { NominationsContext } from '../../contexts/NominationsContext';

const NominationCard = (props) => {
    const { handleRemoveNomination } = useContext(NominationsContext)
    return (
        <div className="nomination-card" >
            <div className='nomination-card_img-container' >
                <img className='nomination-card_img' src={props.Poster} alt={`Thumbnail for ${props.Title}`} />
            </div>
            <div className='nomination-card_info' >
                <p className='nomination-card_title' > {props.Title} </p>
            </div>
            <button
                onClick={() => handleRemoveNomination(props.imdbID)}
                type='button'
                className='nomination-card_btn'>
                <i className='fas fa-trash' ></i>
            </button>
        </div>
    )
};

export default NominationCard;
