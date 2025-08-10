import React from 'react'

export default function CardSkeleton() {
  return (
    <div className="max-w-xs md:max-w-sm bg-gray-800 rounded-md shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-700 rounded-t-md"></div> {/* image placeholder */}

      <div className="h-64 bg-gray-700 p-4 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="h-8 bg-gray-600 rounded w-3/4"></div> {/* title */}
          <div className="h-5 bg-gray-600 rounded w-1/2"></div> {/* location */}
          <div className="h-5 bg-gray-600 rounded w-1/2"></div> {/* registration dates */}
        </div>

        <div>
          <div className="h-10 bg-gray-600 rounded w-full mt-4"></div> {/* button */}
        </div>
      </div>
    </div>
  )
}
