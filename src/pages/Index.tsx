
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, BookText, Lock, Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
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
                <Link to="/register">
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
      </div>
    </Layout>
  );
};

export default Index;
