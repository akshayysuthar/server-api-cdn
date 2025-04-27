
import { supabase } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const email = request.headers.get("x-user-email");

  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("user_email", email);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { data, error } = await supabase.from("addresses").insert([body]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("addresses")
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
    .from("addresses")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
