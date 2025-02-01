import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { MessageCircle, ThumbsUp, Search } from "lucide-react"

interface Post {
  id: number
  title: string
  author: string
  content: string
  replies: number
  likes: number
}

const Community: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Tips for managing morning sickness?",
      author: "Sarah123",
      content: "I'm struggling with morning sickness. Any tips?",
      replies: 5,
      likes: 10,
    },
    {
      id: 2,
      title: "Best pregnancy pillows",
      author: "ExpectingMom22",
      content: "Looking for recommendations on pregnancy pillows. Any favorites?",
      replies: 8,
      likes: 15,
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Implement search functionality here
  }

  const handleNewPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newPost: Post = {
      id: posts.length + 1,
      title: formData.get("title") as string,
      author: "CurrentUser", // In a real app, this would be the logged-in user
      content: formData.get("content") as string,
      replies: 0,
      likes: 0,
    }
    setPosts([newPost, ...posts])
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Community</h1>

      <Card>
        <CardHeader>
          <CardTitle>Search Discussions</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex space-x-2">
            <Input
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewPost} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" required />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" name="content" required />
            </div>
            <Button type="submit">Create Post</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Discussions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 bg-muted rounded-lg">
                <h3 className="font-bold text-lg">{post.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <span>{post.author}</span>
                </div>
                <p className="mt-2">{post.content}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {post.replies} replies
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {post.likes} likes
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Community

