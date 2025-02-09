
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, BookText, Lock, Users } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const { data: notes, refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;

    try {
      const { error } = await supabase
        .from("notes")
        .insert([
          {
            title,
            content,
            is_public: isPublic,
            user_id: user.id,
          },
        ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your note has been created.",
      });

      setTitle("");
      setContent("");
      setIsPublic(false);
      refetch();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create note. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        {!user ? (
          <>
            {/* Hero Section */}
            <section className="py-20 text-center animate-fade-down">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Your thoughts, organized beautifully
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  A minimalist note-taking experience designed for clarity and simplicity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link to="/auth">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/public-notes">View Public Notes</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass p-6 rounded-lg animate-slide-up-fade" style={{ animationDelay: "0ms" }}>
                  <BookText className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Rich Text Editor</h3>
                  <p className="text-gray-600">
                    Create beautiful notes with our intuitive rich text editor. Format your content exactly how you want it.
                  </p>
                </div>
                <div className="glass p-6 rounded-lg animate-slide-up-fade" style={{ animationDelay: "150ms" }}>
                  <Lock className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
                  <p className="text-gray-600">
                    Your notes are private by default. Choose what to share and what to keep personal.
                  </p>
                </div>
                <div className="glass p-6 rounded-lg animate-slide-up-fade" style={{ animationDelay: "300ms" }}>
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
                  <p className="text-gray-600">
                    Share your notes with the community. Learn and grow together.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="py-10">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-8">Create a New Note</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[200px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="public"
                    checked={isPublic}
                    onCheckedChange={setIsPublic}
                  />
                  <Label htmlFor="public">Make this note public</Label>
                </div>
                <Button type="submit" className="w-full">
                  Create Note
                </Button>
              </form>

              {notes && notes.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Your Notes</h2>
                  <div className="space-y-4">
                    {notes.map((note) => (
                      <div key={note.id} className="glass p-4 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{note.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {note.content?.substring(0, 100)}
                              {note.content && note.content.length > 100 ? "..." : ""}
                            </p>
                          </div>
                          {note.is_public && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              Public
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
