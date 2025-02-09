
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";

const PublicNotes = () => {
  const { data: publicNotes, isLoading } = useQuery({
    queryKey: ["public-notes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("is_public", true)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Publiczne Notatki</h1>
        
        {isLoading ? (
          <div className="text-center">Ładowanie...</div>
        ) : publicNotes && publicNotes.length > 0 ? (
          <div className="grid gap-6">
            {publicNotes.map((note) => (
              <div key={note.id} className="glass p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                <p className="text-gray-600">{note.content}</p>
                <div className="text-sm text-gray-500 mt-4">
                  {new Date(note.created_at).toLocaleDateString("pl-PL")}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            Nie znaleziono żadnych publicznych notatek.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PublicNotes;
