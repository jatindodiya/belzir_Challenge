import React from 'react'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4"></div>
    </div>
  )
}

export default Loading