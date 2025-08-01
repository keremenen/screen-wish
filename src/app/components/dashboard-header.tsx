"use client"

type DashboardHeaderProps = {
  movieCount: number
}

export function DashboardHeader({
  movieCount,
  // isAddDialogOpen,
  // onAddDialogOpenChange,
  // onAddMovie,
}: DashboardHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Watchlist</h2>
        <p className="text-gray-600 mt-1">
          {movieCount} {movieCount === 1 ? "movie" : "movies"} to watch
        </p>
      </div>

      {/* <AddMovieDialog isOpen={isAddDialogOpen} onOpenChange={onAddDialogOpenChange} onAddMovie={onAddMovie} /> */}
    </div>
  )
}
