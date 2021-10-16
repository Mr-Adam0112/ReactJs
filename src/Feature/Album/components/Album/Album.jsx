import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.array.isRequired,
};

function Album({album}) {
    return (
        <div>
            <p>{album.name}</p>
            <img src={album.thumbnailUrl} alt={album.name} />
        </div>
    );
}

export default Album;