import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/AlbumList';

AlbumBox.propTypes = {
    
};

function AlbumBox(props) {
    const AlbumL = [
        {
            id: 1,
            name: 'Nhac thinh hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/7/c/557c869768519d1d07667b1f4927c7ef.jpg',
        },
        {
            id: 2,
            name: 'Nhac Rap',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/b/9/4/fb94844bebd26a78cdcb9d4d72b1381b.jpg',
        },
        {
            id: 3,
            name: 'Nhac buon',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/5/6/3/e5631af387638197a80259f0b9be91ae.jpg',
        }
    ]
    return (
        <div>
            <h1>AlbumList</h1>
            <AlbumList albumList = {AlbumL} />
        </div>
    );
}

export default AlbumBox;