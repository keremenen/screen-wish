'use client'

import { Button } from "@/components/ui/button"
import { Film, LogOut } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Film className="h-8 w-8 text-purple-600 mr-3" />
            <h1 className="text-xl font-semibold text-gray-900">ScreenWish</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, example@gmail.com!</span>
            <Button variant="ghost" size="sm" onClick={() => { }}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
