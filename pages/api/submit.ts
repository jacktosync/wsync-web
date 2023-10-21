// pages/api/submit.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID; // Replace with your spreadsheet ID
const RANGE = 'A1:F1'; // Replace with the desired range

// Load your credentials
const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const body = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const values = [[
      body.network,
      body.publicKey,
      body.privateKey,
      body.creator,
      body.ubalance,
      body.dbalance,
    ]];

    const request = {
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    };

    const response = await sheets.spreadsheets.values.append(request);

    return res.status(201).json({ data: response.data });
  } catch (error: any) {
    console.error('Error:', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}