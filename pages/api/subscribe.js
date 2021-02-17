const PRE_MEMBERSHIP_LIST_ID = '09abe89f-76ba-42a1-8e10-f03acc04e61b';

const getLocationFromIp = async () => {
  const response = await fetch(`http://ip-api.com/json`);

  const body = await response.json();

  if (body.status !== 'success') {
    return null;
  }

  return body
}

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const API_KEY = process.env.SENDGRID_API_KEY;

    const location = await getLocationFromIp();

    const response = await fetch(
      `https://api.sendgrid.com/v3/marketing/contacts`,
      {
        body: JSON.stringify({
          "list_ids": [
            PRE_MEMBERSHIP_LIST_ID
          ],
          "contacts": [
            {
              "email": email,
              "city": location?.city,
              "country": location?.country,
              "postal_code": location?.zip,
              "state_province_region": location?.regionName,
            }
          ]
        }),
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: text
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
