import React from 'react'

const WidgetTags = () => {

    const tags = ['c', 'c++', 'css', 'mongoose', 'nodejs', 'axios', 'HTML5', 'express', 'firebase', 'Python', 'Reactjs', 'Redux', 'JavaScript',]

  return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className="widget-tags-div">
            {
                tags.map((tag) =>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags