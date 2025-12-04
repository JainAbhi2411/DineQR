import { useState } from 'react';
import { useParams } from 'react-router-dom';
import OwnerLayout from '@/components/owner/OwnerLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, UserPlus, Mail, Phone, Shield } from 'lucide-react';

export default function StaffManagement() {
  const { restaurantId } = useParams();
  const [staff] = useState([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@restaurant.com',
      phone: '+1 234-567-8901',
      role: 'Manager',
      status: 'active',
      joinedDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@restaurant.com',
      phone: '+1 234-567-8902',
      role: 'Chef',
      status: 'active',
      joinedDate: '2024-02-20'
    },
    {
      id: '3',
      name: 'Mike Wilson',
      email: 'mike@restaurant.com',
      phone: '+1 234-567-8903',
      role: 'Waiter',
      status: 'active',
      joinedDate: '2024-03-10'
    }
  ]);

  return (
    <OwnerLayout title="Staff Management">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text-primary mb-2">Staff Management</h1>
            <p className="text-muted-foreground">Manage your restaurant staff and their roles</p>
          </div>
          <Button className="morph-button hover-glow-orange">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Staff Member
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Staff</p>
                  <p className="text-3xl font-bold gradient-text-primary">{staff.length}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active</p>
                  <p className="text-3xl font-bold text-green-500">{staff.filter(s => s.status === 'active').length}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Managers</p>
                  <p className="text-3xl font-bold gradient-text-secondary">{staff.filter(s => s.role === 'Manager').length}</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Staff</p>
                  <p className="text-3xl font-bold gradient-text-electric">{staff.filter(s => s.role !== 'Manager').length}</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staff List */}
        <Card className="glass border-2 border-border">
          <CardHeader>
            <CardTitle>Staff Members</CardTitle>
            <CardDescription>View and manage all staff members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staff.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:-translate-y-0.5 bg-muted/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {member.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {member.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-sm">
                      {member.role}
                    </Badge>
                    <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                      {member.status}
                    </Badge>
                    <Button variant="outline" size="sm" className="morph-button">
                      Edit
                    </Button>
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
