import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import { NewSongForm } from './NewSongForm';

export const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Almost Home', id: '1' },
        { title: 'Memory Gospel', id: '2' },
        { title: 'This Wild Darkness', id: '3' }
    ])
    const [age, setAge] = useState(20)

    const addSong = (title: string) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    // useEffect run when data in songs has been changes
    useEffect(() => {
        console.log('useEffect hooks run', songs)
    }, [songs])

    // useEffect run when data in age has been changes
    useEffect(() => {
        console.log('useEffect hooks run', age)
    }, [age])

    return (
        <div className="song-list">
            <ul>
                { songs.map(song => (
                    <li key={song.id}> {song.title} </li>
                )) }
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to Age : {age}</button>
        </div>
    )
}
