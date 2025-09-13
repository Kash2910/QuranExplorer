require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

let cachedToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken; // reuse valid token
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await axios.post(
    'https://prelive-oauth2.quran.foundation/oauth2/token',
    'grant_type=client_credentials&scope=content',
    {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  cachedToken = response.data.access_token;
  tokenExpiry = Date.now() + response.data.expires_in * 1000; // expires_in is in seconds

  return cachedToken;
}


app.get("/", (req, res) => {
  res.send("✅ Quran Explorer Backend is running!");
});

app.get('/api/chapters', async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      'https://apis-prelive.quran.foundation/content/api/v4/chapters',
      {
        headers: {
          'x-auth-token': token,
          'x-client-id': clientId,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching chapters:", error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
});

app.get('/api/verses/:id', async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      `https://apis-prelive.quran.foundation/content/api/v4/chapters/${req.params.id}/verses`,
      {
        headers: {
          'x-auth-token': token,
          'x-client-id': clientId,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching verses:", error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch verses' });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
