import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { MessageCircle, ThumbsUp, Eye } from "lucide-react"

const Community: React.FC = () => {
  const forumPosts = [
    {
      id: 1,
      title: "Tips for managing morning sickness?",
      author: "Sarah123",
      replies: 15,
      likes: 24,
      views: 102,
    },
    {
      id: 2,
      title: "Best pregnancy pillows for back pain",
      author: "PregnantMom22",
      replies: 8,
      likes: 19,
      views: 76,
    },
    {
      id: 3,
      title: "Healthy snack ideas for breastfeeding moms",
      author: "NewMommy",
      replies: 22,
      likes: 31,
      views: 145,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Community</h2>
        <Button>Create New Post</Button>
      </div>

      <div className="flex space-x-4">
        <Input placeholder="Search discussions..." className="flex-grow" />
        <Button variant="outline">Search</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Discussions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {forumPosts.map((post) => (
              <li key={post.id} className="border-b pb-4 last:border-b-0">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-4">By {post.author}</span>
                  <span className="flex items-center mr-4">
                    <MessageCircle className="w-4 h-4 mr-1" /> {post.replies}
                  </span>
                  <span className="flex items-center mr-4">
                    <ThumbsUp className="w-4 h-4 mr-1" /> {post.likes}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" /> {post.views}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default Community

