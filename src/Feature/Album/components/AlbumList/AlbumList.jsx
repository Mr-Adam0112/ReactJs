import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/Album';
import styled from 'styled-components';
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

// AlbumList.default ={
//     albumList: [],
// }

function AlbumList({albumList}) {
    return (
        <BoxUl>
        <ul>
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album ={album}/>
                </li>
            ))}
        </ul>
        </BoxUl>
    );
}
 const BoxUl = styled.div`
    ul{
        display: flex;
        justify-content: center;
        list-style: none;
    }
    li{
        padding: 0px 10px;
    }
 `
export default AlbumList;