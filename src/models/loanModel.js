import { supabase } from "../config/supabaseClient.js";

export const LoanModel = {
  // GET all (dengan dukungan filter query ?status=...)
  async getAll(status) {
    let query = supabase.from("loans").select("*");
    if (status) {
      query = query.eq("status", status);
    }
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  // GET by ID
  async getById(id) {
    const { data, error } = await supabase
      .from("loans")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  // CREATE (POST)
  async create(payload) {
    const { data, error } = await supabase
      .from("loans")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // UPDATE (PUT)
  async update(id, payload) {
    const { data, error } = await supabase
      .from("loans")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // DELETE
  async remove(id) {
    const { error } = await supabase.from("loans").delete().eq("id", id);
    if (error) throw error;
    return { message: "Data peminjaman berhasil dihapus" };
  },
};