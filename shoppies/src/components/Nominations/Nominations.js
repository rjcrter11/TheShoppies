import React, { useContext } from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { NominationsContext } from '../../contexts/NominationsContext';
import NominationCard from '../NominationCard/NominationCard';

const Nominations = () => {
    const { nominations } = useContext(NominationsContext);

    const wrapper = React.createRef()
    return (
        <TransitionGroup
            className='nominations'
        >
            { nominations.map(movie => (
                <CSSTransition
                    in={nominations.length >= 5}
                    mountOnEnter
                    unmountOnExit
                    classNames='noms'
                    appear={true}
                    nodeRef={wrapper}
                    timeout={1000}
                    key={movie.imdbID}
                >
                    <NominationCard   {...movie} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
};

export default Nominations;
