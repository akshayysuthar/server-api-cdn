
import { supabase } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { data, error } = await supabase.from("categories").insert([body]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("categories")
    .update(body)
    .eq("id", body.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  const { data, error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
