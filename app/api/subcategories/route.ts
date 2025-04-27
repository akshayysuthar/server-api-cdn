
import { supabase } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get("categoryId");

  if (!categoryId) {
    return NextResponse.json({ error: "Missing categoryId" }, { status: 400 });
  }


  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .eq("category_id", categoryId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
