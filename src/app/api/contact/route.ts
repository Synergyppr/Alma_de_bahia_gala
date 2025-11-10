import { NextRequest, NextResponse } from "next/server";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare the data object to be sent to external API
    const formDataObject = {
      firstName,
      lastName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    };

    // TODO: Replace this URL with the actual API endpoint provided by the user
    const externalApiUrl =
      "https://synergymwprod-hdbrdrhpawachjbx.eastus-01.azurewebsites.net/api/PaulsonPuertoRico/PaulsonPuertoRicoCreateAndSendForm";

    const externalResponse = await fetch(externalApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    if (!externalResponse.ok) {
      throw new Error("Failed to send data to external API");
    }

    // For now, just log the data (remove this when external API is configured)
    console.log("Contact form submission:", formDataObject);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: formDataObject,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
