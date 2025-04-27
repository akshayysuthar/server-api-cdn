
import { supabase } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") ?? "";


  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("title", `%${query}%`);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
