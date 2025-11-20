import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, company, message } = body;

    // Validate required fields
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get tenant key from environment variable
    const tenantKey = process.env.TENANT_API_KEY;
    if (!tenantKey) {
      console.error('TENANT_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Build subject from service
    const serviceLabels: { [key: string]: string } = {
      website: 'Website Development',
      landing: 'Landing Page',
      webapp: 'Web Application',
      ecommerce: 'E-Commerce',
      seo: 'SEO & Performance',
      other: 'General Inquiry'
    };
    const subject = serviceLabels[service] || 'Contact Form Submission';

    // Build enhanced message with additional info
    let enhancedMessage = message;
    if (company) {
      enhancedMessage = `Company: ${company}\n\n${enhancedMessage}`;
    }
    if (budget) {
      enhancedMessage = `${enhancedMessage}\n\nBudget: ${budget}`;
    }

    // Prepare API payload
    const payload = {
      tenant_key: tenantKey,
      name,
      email,
      phone: phone || '',
      subject,
      message: enhancedMessage
    };

    // Send to external API
    const response = await fetch('http://portal.digitalssolutions.de/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('External API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, data: result });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
