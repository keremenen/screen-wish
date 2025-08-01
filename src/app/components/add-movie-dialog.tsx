import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

type AddMovieDialogProps = {
  isOpen: boolean
  // onOpenChange: (open: boolean) => void
  // onAddMovie: (formData: FormData) => void
}

export function AddMovieDialog({ isOpen }: AddMovieDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => { }}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Movie
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Movie</DialogTitle>
          <DialogDescription>Add a movie to your watchlist that you want to watch later.</DialogDescription>
        </DialogHeader>
        <form action={() => { }} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Movie Title *</Label>
            <Input id="title" name="title" placeholder="Enter movie title" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input id="year" name="year" placeholder="2024" type="number" min="1900" max="2030" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="genre">Genre</Label>
              <Input id="genre" name="genre" placeholder="Action, Drama, etc." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Movie Poster URL</Label>
            <Input id="imageUrl" name="imageUrl" type="url" placeholder="https://example.com/movie-poster.jpg" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" name="notes" placeholder="Why do you want to watch this movie?" rows={3} />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => { }}>
              Cancel
            </Button>
            <Button type="submit">Add Movie</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
