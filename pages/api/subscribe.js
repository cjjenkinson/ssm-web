const PRE_MEMBERSHIP_LIST_ID = '09abe89f-76ba-42a1-8e10-f03acc04e61b';
const SUBSCRIBER_LIST_ID  = '4e47c521-600f-4699-936e-5528e35f1f1c';
const TELEGRAM_BOT_TOKEN = 'bot1646480439:AAHMhGD5HoRIc5AQp3WM9Lv3ll3BDFvuF3M';

const getLocationFromIp = async () => {
  const response = await fetch(`http://ip-api.com/json`);

  const body = await response.json();

  if (body.status !== 'success') {
    return null;
  }

  return body
}

export default async (req, res) => {
  const { email, type } = req.body;

  const isMembershipType = type === 'MEMBERSHIP';

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const API_KEY = process.env.SENDGRID_API_KEY;

    const location = await getLocationFromIp();

    const contactListId = isMembershipType ? PRE_MEMBERSHIP_LIST_ID : SUBSCRIBER_LIST_ID 

    const response = await fetch(
      `https://api.sendgrid.com/v3/marketing/contacts`,
      {
        body: JSON.stringify({
          "list_ids": [
            ontactListId
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

    if (isMembershipType) {
      const text = encodeURI(`New Member Registration: ${email}`);

      await fetch(`https://api.telegram.org/${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=-582053397&text=${text}`, {
        method: 'POST',
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
