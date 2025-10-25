
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { firstName, lastName, email, message, consent } = body;
    
    if (!firstName || !lastName || !email || !message || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // For now, just simulate saving (can be connected to database later)
    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      phone: body.phone,
      preferredContact: body.preferredContact,
      sessionType: body.sessionType,
      concerns: body.concerns,
      urgency: body.urgency,
      message,
      submittedAt: new Date().toISOString()
    });

    // Simulate database save success
    return NextResponse.json({ 
      success: true, 
      message: "Contact form submitted successfully",
      id: `mock_${Date.now()}`
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint" },
    { status: 200 }
  );
}
