"use client"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Movie = {
  id: string
  title: string
  year?: string
  genre?: string
  notes?: string
  imageUrl?: string
  watched: boolean
  addedDate: string
}

type MovieListProps = {
  movies: Movie[]
}

export function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    // If no movies, show empty state with option to add a movie
    return <p>empty</p>
  }

  return (
    <div className="space-y-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

type MovieCardProps = {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className={`hover:shadow-lg transition-all ${movie.watched ? "bg-green-50 border-green-200" : ""}`}>
      <CardHeader>
        <CardTitle>
          {movie.title}
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-2">
            {movie.year && (
              <Badge variant="secondary" className="text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                {movie.year}
              </Badge>
            )}

            {movie.genre && (
              <Badge variant="secondary" className="text-xs">
                {movie.genre}
              </Badge>
            )}

            {movie.watched && (
              <Badge variant="default" className="text-xs bg-green-600">
                Watched
              </Badge>
            )}
          </div>
        </CardDescription>

        <CardAction>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { }}
              className={`${movie.watched
                ? "text-green-600 hover:text-green-700 hover:bg-green-50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
            >
              {movie.watched ? (
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current" />
                </div>
              ) : (
                <Star className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { }}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardAction>

      </CardHeader>
      <CardContent>
        {movie.notes && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{movie.notes}</p>}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500 mt-2">Added {movie.addedDate}</p>
      </CardFooter>
    </Card>
  )
}