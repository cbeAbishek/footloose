"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BlogCategory, categoryLabels } from "./types"

interface BlogFiltersProps {
  selectedCategory: BlogCategory
  onCategoryChange: (category: BlogCategory) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  availableTags: string[]
  totalResults: number
}

export function BlogFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  selectedTags,
  onTagToggle,
  availableTags,
  totalResults,
}: BlogFiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <div className="mb-12 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search articles by title or keyword..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className={`h-12 border-2 bg-white pl-12 pr-12 text-black placeholder:text-gray-500 transition-all dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
            isSearchFocused
              ? "border-black dark:border-white"
              : "border-gray-300 dark:border-gray-700"
          }`}
        />
        {searchQuery && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Category Tabs */}
      <div>
        <Tabs value={selectedCategory} onValueChange={(value) => onCategoryChange(value as BlogCategory)}>
          <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent">
            {(Object.keys(categoryLabels) as BlogCategory[]).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full border-2 border-gray-300 bg-white px-6 py-2 text-sm font-bold text-black transition-all data-[state=active]:border-black data-[state=active]:bg-black data-[state=active]:text-white dark:border-gray-700 dark:bg-black dark:text-white dark:data-[state=active]:border-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                {categoryLabels[category]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Popular Tags */}
      {availableTags.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-bold text-gray-600 dark:text-gray-400">
            POPULAR TAGS
          </h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <Badge
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={`cursor-pointer border-2 px-4 py-1 transition-all ${
                  selectedTags.includes(tag)
                    ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                    : "border-gray-300 bg-transparent text-black hover:border-black dark:border-gray-700 dark:text-white dark:hover:border-white"
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-bold text-black dark:text-white">{totalResults}</span>{" "}
          {totalResults === 1 ? "article" : "articles"}
        </p>

        {/* Active Filters */}
        {(selectedCategory !== "all" || selectedTags.length > 0 || searchQuery) && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              onCategoryChange("all")
              onSearchChange("")
              selectedTags.forEach((tag) => onTagToggle(tag))
            }}
            className="text-sm text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  )
}
