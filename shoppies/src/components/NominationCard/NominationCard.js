import React, { useContext } from 'react';
import { NominationsContext } from '../../contexts/NominationsContext';

const NominationCard = (props) => {
    const { handleRemoveNomination } = useContext(NominationsContext);

    const copyToClipBoard = (id) => {
        const copyText = `https://www.imdb.com/title/${id}`;
        navigator.clipboard.writeText(copyText).then(
            () => {
                console.log("copy Success");
            },
            err => {
                console.log(err);
            }
        )
    }

    return (
        <div className="nomination-card" >
            <div className='nomination-card_img-container' >
                <img className='nomination-card_img' src={props.Poster} alt={`Thumbnail for ${props.Title}`} />
            </div>
            <div className='nomination-card_info' >
                <p className='nomination-card_title' > {props.Title} </p>
            </div>
            <div className='btn-grp' >
                <button
                    className='nomination-card_link'
                    onClick={() => copyToClipBoard(props.imdbID)}>
                    <i className="fas fa-link"></i>
                </button>
                <button
                    onClick={() => handleRemoveNomination(props.imdbID)}
                    type='button'
                    className='nomination-card_delete'>
                    <i className='fas fa-trash' ></i>
                </button>
            </div>

        </div>
    )
};

export default NominationCard;
