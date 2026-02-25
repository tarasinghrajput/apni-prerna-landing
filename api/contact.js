// Google Apps Script Web App URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxIHH8XcR9YcQ3GVlBaGUbfT4zJdRNIrJ0s9LzldL2dxGh4zhjcL5VnVMLsy0BNA6mnjA/exec';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, podName, students, message } = req.body;

    if (!name || !email || !phone || !podName || !students) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Forward to Google Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        podName,
        students,
        message: message || '',
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Failed to submit');
    }

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Form submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unable to submit form.';
    return res.status(500).json({ message: errorMessage });
  }
}
