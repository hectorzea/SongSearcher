import React, {Fragment} from 'react';

const Song = ({lyric}) => {
    if (!lyric) return null;
    return (
        <Fragment>
            <h2>Song lyric</h2>
            <p className="letra">{lyric}</p>
        </Fragment>
    )
};

export default Song;