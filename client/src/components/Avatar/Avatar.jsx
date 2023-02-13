import React from 'react'

const Avatar = ({ children, backgroundColor, color, px, py, borderRadius, fontSize, width }) => {
  const style = {
    backgroundColor,
    color,
    padding: `${py} ${px}`,
    borderRadius,
    cursor: 'cursor' || null,
    fontSize,
    textAlign: "center",
    width,
    textDecoration: "none",
  }
  return (
    <div style={style}>
            { children }
        </div>
  )
}

export default Avatar