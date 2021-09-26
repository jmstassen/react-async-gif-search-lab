import React from 'react'

export default function GifList(props) {

  return (
    <div>
      <ul>
        {props.gifArr.map(gif => {
            return <li><img src={gif} alt="gif"></img></li>
        })}
      </ul>
    </div>
  )
}