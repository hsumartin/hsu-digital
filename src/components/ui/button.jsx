import React from 'react'

export function Button({ className = '', asChild = false, children, ...props }) {
  const classes = `inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-accent/40 ${className}`
  if (asChild) {
    return React.cloneElement(children, { className: `${classes} ${children.props.className || ''}` })
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
