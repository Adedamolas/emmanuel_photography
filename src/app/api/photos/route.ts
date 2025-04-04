import cloudinary from "@/app/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limit = parseInt(searchParams.get("limit") || "12");
  const cursor = searchParams.get("cursor");

  try {
    // Build the search query
    let searchQuery = cloudinary.search
      .expression(`folder:${category}`)
      .sort_by("created_at", "desc")
      .max_results(limit);

    // Only add next_cursor if provided
    if (cursor) {
      searchQuery = searchQuery.next_cursor(cursor);
    }

    const result = await searchQuery.execute();

    return NextResponse.json({
      photos: result.resources.map(
        (resource: {
          public_id: any;
          secure_url: any;
          width: any;
          height: any;
        }) => ({
          id: resource.public_id,
          url: resource.secure_url,
          width: resource.width,
          height: resource.height,
        })
      ),
      hasMore: result.next_cursor !== undefined,
      nextCursor: result.next_cursor,
    });
  } catch (error) {
    console.error("Cloudinary search error:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
