import { useState } from 'react';
import { useParams } from 'react-router-dom';
import OwnerLayout from '@/components/owner/OwnerLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare, ThumbsUp, Reply } from 'lucide-react';

export default function Reviews() {
  const { restaurantId } = useParams();
  const [reviews] = useState([
    {
      id: '1',
      customerName: 'Alice Johnson',
      rating: 5,
      comment: 'Amazing food and excellent service! The pizza was perfectly cooked and the staff was very friendly.',
      date: '2024-03-15',
      replied: false
    },
    {
      id: '2',
      customerName: 'Bob Smith',
      rating: 4,
      comment: 'Great atmosphere and delicious food. Would definitely recommend to friends and family.',
      date: '2024-03-14',
      replied: true,
      reply: 'Thank you for your kind words! We look forward to serving you again.'
    },
    {
      id: '3',
      customerName: 'Carol White',
      rating: 5,
      comment: 'Best restaurant in town! The pasta was incredible and the dessert was divine.',
      date: '2024-03-13',
      replied: false
    },
    {
      id: '4',
      customerName: 'David Brown',
      rating: 3,
      comment: 'Good food but service was a bit slow. Overall decent experience.',
      date: '2024-03-12',
      replied: true,
      reply: 'We apologize for the delay. We are working on improving our service speed.'
    }
  ]);

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <OwnerLayout title="Customer Reviews">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold gradient-text-primary mb-2">Customer Reviews</h1>
          <p className="text-muted-foreground">Manage and respond to customer feedback</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Rating</p>
                  <p className="text-3xl font-bold gradient-text-primary">{averageRating}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Reviews</p>
                  <p className="text-3xl font-bold gradient-text-secondary">{reviews.length}</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">5 Star Reviews</p>
                  <p className="text-3xl font-bold text-green-500">{reviews.filter(r => r.rating === 5).length}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Replies</p>
                  <p className="text-3xl font-bold gradient-text-electric">{reviews.filter(r => !r.replied).length}</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Reply className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews List */}
        <Card className="glass border-2 border-border">
          <CardHeader>
            <CardTitle>All Reviews</CardTitle>
            <CardDescription>View and respond to customer reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all bg-muted/30"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {review.customerName[0]}
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.customerName}</h4>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <Badge variant={review.replied ? 'default' : 'secondary'}>
                        {review.replied ? 'Replied' : 'Pending'}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{review.comment}</p>

                  {review.replied && review.reply && (
                    <div className="ml-6 pl-4 border-l-2 border-primary/50 bg-primary/5 p-4 rounded-r-lg mb-4">
                      <p className="text-sm font-medium mb-1">Your Reply:</p>
                      <p className="text-sm text-muted-foreground">{review.reply}</p>
                    </div>
                  )}

                  {!review.replied && (
                    <Button variant="outline" size="sm" className="morph-button">
                      <Reply className="w-4 h-4 mr-2" />
                      Reply to Review
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </OwnerLayout>
  );
}
