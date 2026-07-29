import { supabase } from "../lib/supabase";

export async function getProducts(search = "") {
  let query = supabase
    .from("products")
    .select("*");

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}