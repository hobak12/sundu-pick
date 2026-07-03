import { supabase } from "../lib/supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("data:", data);
  console.log("error:", error);

  if (error) {
    return [];
  }

  return data;
}