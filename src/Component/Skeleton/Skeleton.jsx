import React from 'react'

export default function Skeleton() {
  return (
    <div>
      <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-300 rounded w-3/4"></div> {/* Title bar */}
      <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Line 1 */}
      <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Line 2 */}
      <div className="h-4 bg-gray-300 rounded w-5/6"></div> {/* Line 3 */}
    </div>
    </div>
  )
}
