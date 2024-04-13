import { create } from "zustand";
import supabase from "./supabase";

interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  genre: string[];
}

interface BooksState {
  books: Book[];
  fetchBooks: () => Promise<void>;
  addBook: (newBook: Book) => Promise<void>;
  updateBook: (updatedBook: Book) => Promise<void>;
  deleteBook: (id: number) => Promise<void>;
}

const useBooks = create<BooksState>((set) => ({
  books: [],
  fetchBooks: async () => {
    try {
      const { data, error } = await supabase.from<Book>("books").select("*");
      if (error) {
        throw error;
      }
      set((prevState) => ({ ...prevState, books: data || [] }));
    } catch (error) {
      handleSupabaseError("fetching books", error);
    }
  },
  addBook: async (newBook: Book) => {
    try {
      const { data, error } = await supabase
        .from<Book>("books")
        .insert([newBook]);
      if (error) {
        throw error;
      }
      set((prevState) => ({
        ...prevState,
        books: [...prevState.books, data![0]],
      }));
    } catch (error) {
      handleSupabaseError("adding book", error);
    }
  },
  updateBook: async (updatedBook: Book) => {
    try {
      const { data, error } = await supabase
        .from<Book>("books")
        .update(updatedBook)
        .eq("id", updatedBook.id);
      if (error) {
        throw error;
      }
      set((prevState) => ({
        ...prevState,
        books: prevState.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book,
        ),
      }));
    } catch (error) {
      handleSupabaseError("updating book", error);
    }
  },
  deleteBook: async (id: number) => {
    try {
      const { error } = await supabase
        .from<Book>("books")
        .delete()
        .eq("id", id);
      if (error) {
        throw error;
      }
      set((prevState) => ({
        ...prevState,
        books: prevState.books.filter((book) => book.id !== id),
      }));
    } catch (error) {
      handleSupabaseError("deleting book", error);
    }
  },
}));

function handleSupabaseError(operation: string, error: Error) {
  console.error(`Error ${operation}:`, error.message);
}

export default useBooks;
