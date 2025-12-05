import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, Edit, Trash2, UserCheck, UserX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { waiterApi } from '@/db/api';
import type { Waiter } from '@/types/types';
import { useForm } from 'react-hook-form';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface WaiterFormData {
  name: string;
  phone: string;
  status: 'active' | 'inactive';
}

export default function WaiterManagement() {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { toast } = useToast();
  const [waiters, setWaiters] = useState<Waiter[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedWaiter, setSelectedWaiter] = useState<Waiter | null>(null);
  const [waiterToDelete, setWaiterToDelete] = useState<Waiter | null>(null);

  const addForm = useForm<WaiterFormData>({
    defaultValues: {
      name: '',
      phone: '',
      status: 'active',
    },
  });

  const editForm = useForm<WaiterFormData>({
    defaultValues: {
      name: '',
      phone: '',
      status: 'active',
    },
  });

  useEffect(() => {
    if (restaurantId) {
      loadWaiters();
    }
  }, [restaurantId]);

  const loadWaiters = async () => {
    if (!restaurantId) return;
    
    try {
      setLoading(true);
      const data = await waiterApi.getWaitersByRestaurant(restaurantId);
      setWaiters(data);
    } catch (error) {
      console.error('Error loading waiters:', error);
      toast({
        title: 'Error',
        description: 'Failed to load waiters',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddWaiter = async (data: WaiterFormData) => {
    if (!restaurantId) return;

    try {
      await waiterApi.createWaiter({
        restaurant_id: restaurantId,
        name: data.name,
        phone: data.phone || null,
        status: data.status,
      });

      toast({
        title: 'Success',
        description: 'Waiter added successfully',
      });

      setIsAddDialogOpen(false);
      addForm.reset();
      loadWaiters();
    } catch (error) {
      console.error('Error adding waiter:', error);
      toast({
        title: 'Error',
        description: 'Failed to add waiter',
        variant: 'destructive',
      });
    }
  };

  const handleEditWaiter = async (data: WaiterFormData) => {
    if (!selectedWaiter) return;

    try {
      await waiterApi.updateWaiter(selectedWaiter.id, {
        name: data.name,
        phone: data.phone || null,
        status: data.status,
      });

      toast({
        title: 'Success',
        description: 'Waiter updated successfully',
      });

      setIsEditDialogOpen(false);
      setSelectedWaiter(null);
      editForm.reset();
      loadWaiters();
    } catch (error) {
      console.error('Error updating waiter:', error);
      toast({
        title: 'Error',
        description: 'Failed to update waiter',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteWaiter = async () => {
    if (!waiterToDelete) return;

    try {
      await waiterApi.deleteWaiter(waiterToDelete.id);

      toast({
        title: 'Success',
        description: 'Waiter deleted successfully',
      });

      setWaiterToDelete(null);
      loadWaiters();
    } catch (error) {
      console.error('Error deleting waiter:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete waiter',
        variant: 'destructive',
      });
    }
  };

  const openEditDialog = (waiter: Waiter) => {
    setSelectedWaiter(waiter);
    editForm.reset({
      name: waiter.name,
      phone: waiter.phone || '',
      status: waiter.status,
    });
    setIsEditDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading waiters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground mt-1">Manage your restaurant waiters</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Waiter
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Waiter</DialogTitle>
            </DialogHeader>
            <Form {...addForm}>
              <form onSubmit={addForm.handleSubmit(handleAddWaiter)} className="space-y-4">
                <FormField
                  control={addForm.control}
                  name="name"
                  rules={{ required: 'Name is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter waiter name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Add Waiter</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {waiters.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <UserCheck className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Waiters Yet</h3>
            <p className="text-muted-foreground text-center mb-4">
              Add your first waiter to start managing staff assignments
            </p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Waiter
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {waiters.map((waiter) => (
            <Card key={waiter.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{waiter.name}</CardTitle>
                    {waiter.phone && (
                      <p className="text-sm text-muted-foreground mt-1">{waiter.phone}</p>
                    )}
                  </div>
                  <Badge variant={waiter.status === 'active' ? 'default' : 'secondary'}>
                    {waiter.status === 'active' ? (
                      <UserCheck className="w-3 h-3 mr-1" />
                    ) : (
                      <UserX className="w-3 h-3 mr-1" />
                    )}
                    {waiter.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => openEditDialog(waiter)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setWaiterToDelete(waiter)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Waiter</DialogTitle>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(handleEditWaiter)} className="space-y-4">
              <FormField
                control={editForm.control}
                name="name"
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter waiter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!waiterToDelete} onOpenChange={() => setWaiterToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will delete {waiterToDelete?.name}. Orders assigned to this waiter will remain, but the waiter assignment will be cleared.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteWaiter}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
