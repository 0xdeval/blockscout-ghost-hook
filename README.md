# Ghost WebHook

Webhook to save users in Ghost service as a new member. Send a user's email and additional labels for him to store on Ghost.

## Requirements

1. Bun 1.2.17+
2. Vercel 43.3.0+

## Run WebHook

1. Install dependencies

```bash
bun install
```

2. To run a webhook:

```bash
bun run dev
```

## How to use

Send a request:

```bash
# Local development
curl -X POST http://localhost:3000/api/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "name": "John",
    "labels": ["newsletter", "premium"]
  }'

# Vercel deployment
curl -X POST https://your-app.vercel.app/api/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "name": "John",
    "labels": ["newsletter", "premium"]
  }'
```

Successful response:

```json
{
  "success": true,
  "member": {
    "id": "6880f3016529b0000196d82d",
    "uuid": "30cf7a11-803f-41c3-8970-c39beca205c3",
    "email": "greg@default.com",
    "name": null,
    "note": null,
    "geolocation": null,
    "subscribed": true,
    "created_at": "2025-05-23T14:34:41.000Z",
    "updated_at": "2025-05-23T14:34:41.000Z",
    "labels": [
      {
        "id": "6880f1216129b0000196d82e",
        "name": "webhook-auto-import",
        "slug": "webhook-auto-import",
        "created_at": "2025-05-23T14:34:41.000Z",
        "updated_at": "2025-05-23T14:34:41.000Z"
      }
    ],
    "subscriptions": [],
    "avatar_image": "https://www.gravatar.com/avatar/28bdcd0bdfedecca73883905b595a67c?s=250&r=g&d=blank",
    "comped": false,
    "email_count": 0,
    "email_opened_count": 0,
    "email_open_rate": null,
    "status": "free",
    "last_seen_at": null,
    "attribution": {
      "id": null,
      "type": null,
      "url": null,
      "title": null,
      "referrer_source": "",
      "referrer_medium": "",
      "referrer_url": null
    },
    "unsubscribe_url": "https://default.ghost.io/unsubscribe/?uuid=30cf7a5a-113f-41c3-8970-c39beca205c3&key=dbcd1eec86def7ciw820c2e82bfc4303bf2fa6abc07611bdf1605312ebd49b",
    "tiers": [],
    "email_suppression": {
      "suppressed": false,
      "info": null
    },
    "newsletters": [
      {
        "id": "68809d11e1cbca00082f3902",
        "name": "Greg",
        "description": null,
        "status": "active"
      }
    ]
  }
}
```
