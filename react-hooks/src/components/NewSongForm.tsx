import React, { useState } from 'react'

interface Props {
    addSong: (title: string) => void
}

export const NewSongForm = ({ addSong } : Props) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(title)
        addSong(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Song Name : </label>
            <input 
                type="text" 
                name="title" 
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type="submit"> Add Song </button>
        </form>
    )
}
