import { NextResponse } from "next/server";
import dictionary from "../../../resources/orienteering_dictionary.json";

export async function GET() {
  dictionary.sort((el, ell) => el.name.localeCompare(ell.name));

  return NextResponse.json({ dictionary });
}
