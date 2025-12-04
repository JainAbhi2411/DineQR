import { useParams } from 'react-router-dom';
import OwnerLayout from '@/components/owner/OwnerLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, DollarSign, ShoppingBag, Users, Star } from 'lucide-react';

export default function Analytics() {
  const { restaurantId } = useParams();

  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,450',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Total Orders',
      value: '342',
      change: '+8.2%',
      icon: ShoppingBag,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Customers',
      value: '156',
      change: '+15.3%',
      icon: Users,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      title: 'Avg Rating',
      value: '4.8',
      change: '+0.3',
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  return (
    <OwnerLayout title="Analytics">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold gradient-text-primary mb-2">Analytics & Reports</h1>
          <p className="text-muted-foreground">Track your restaurant's performance and insights</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass border-2 border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold gradient-text-primary">{stat.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Revenue Overview
              </CardTitle>
              <CardDescription>Monthly revenue trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Revenue chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Orders Overview
              </CardTitle>
              <CardDescription>Daily order statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Orders chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Items */}
        <Card className="glass border-2 border-border">
          <CardHeader>
            <CardTitle>Popular Menu Items</CardTitle>
            <CardDescription>Top selling items this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Margherita Pizza', orders: 89, revenue: '$1,245' },
                { name: 'Caesar Salad', orders: 67, revenue: '$890' },
                { name: 'Grilled Chicken', orders: 54, revenue: '$1,080' },
                { name: 'Pasta Carbonara', orders: 48, revenue: '$720' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg gradient-text-primary">{item.revenue}</p>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </OwnerLayout>
  );
}
