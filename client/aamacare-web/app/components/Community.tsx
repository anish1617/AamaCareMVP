import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Community = () => {
  const posts = [
    { id: 1, author: "Sarah123", content: "Any tips for managing morning sickness?", replies: 3 },
    { id: 2, author: "MomOf2", content: "How often should I feel my baby move at 28 weeks?", replies: 5 },
    { id: 3, author: "FirstTimeMom", content: "Recommended prenatal vitamins?", replies: 7 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Discussions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.id} className="bg-card p-4 rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{post.author}</span>
                  </div>
                  <p className="text-card-foreground mb-2">{post.content}</p>
                  <div className="text-sm text-muted-foreground">{post.replies} replies</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Start a New Discussion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input placeholder="Title" />
              <textarea
                className="w-full p-2 border rounded-md bg-background text-foreground"
                rows={4}
                placeholder="What's on your mind?"
              ></textarea>
              <Button>Post</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Community Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Members:</span>
                <span className="font-semibold">1,234</span>
              </li>
              <li className="flex justify-between">
                <span>Posts:</span>
                <span className="font-semibold">5,678</span>
              </li>
              <li className="flex justify-between">
                <span>Active Discussions:</span>
                <span className="font-semibold">42</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["pregnancy", "nutrition", "exercise", "baby-care", "health", "sleep"].map((tag) => (
                <span key={tag} className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Community

