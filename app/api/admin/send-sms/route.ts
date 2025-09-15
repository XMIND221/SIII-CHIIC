// 🚧 Supabase désactivé temporairement pour déploiement sans variables
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Envoi de SMS désactivé (aucune base Supabase configurée)."
  });
}
