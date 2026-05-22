export async function GET() {

  const PLACE_ID = "ChIJGcPYj867wjsR32tKo-Ox094";

  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

  try {

    const response = await fetch(url, {

      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
        "X-Goog-FieldMask":
          "displayName,rating,reviews"
      }

    });

    const data = await response.json();

    console.log(data);

    return Response.json(data.reviews || []);

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error: 'Failed to fetch reviews',
        details: error.message
      },
      { status: 500 }
    );
  }
}