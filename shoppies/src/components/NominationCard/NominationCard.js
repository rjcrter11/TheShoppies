import React, { useContext } from 'react';
import { NominationsContext } from '../../contexts/NominationsContext';

const NominationCard = ({ Title, Poster, imdbID }) => {
    const { handleRemoveNomination, copyToClipBoard } = useContext(NominationsContext);

    return (
        <div className="nomination-card" >
            <div className='nomination-card_img-container' >
                <img className='nomination-card_img' src={Poster} alt={`Thumbnail for ${Title}`} />
            </div>
            <div className='nomination-card_info' >
                <p className='nomination-card_title' > {Title} </p>
            </div>
            <div className='btn-grp' >
                <button
                    className='nomination-card_link'
                    onClick={() => copyToClipBoard(imdbID)}>
                    <i className="fas fa-link"></i>
                </button>
                <button
                    onClick={() => handleRemoveNomination(imdbID)}
                    type='button'
                    className='nomination-card_delete'>
                    <i className='fas fa-trash' ></i>
                </button>
            </div>

        </div>
    )
};

export default NominationCard;
