import React from 'react'
import { DashboardHeader } from '../components/dashboard-header'
import { exampleMovies as movies } from '../../data/exampleMovies'
import { MovieList } from '../components/movie-list'

export default function DashboardPage() {

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DashboardHeader
        movieCount={6}
      />
      <MovieList
        movies={movies}
      />
    </main>
  )
}
