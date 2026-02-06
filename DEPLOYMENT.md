# LoL-Matrix Pro - Deployment Instructions

## Vercel Deployment with Riot API

### Step 1: Deploy to Vercel

1. Push this code to a GitHub repository
2. Go to vercel.com and import the repository
3. Vercel will auto-detect it as a Vite project

### Step 2: Set Up Environment Variable (CRITICAL)

**In Vercel Dashboard:**
1. Go to your project settings
2. Click "Environment Variables"
3. Add the following:

| Name | Value |
|------|-------|
| `RIOT_API_KEY` | `RGAPI-794742c5-258c-42f4-86b7-833d1507f709` |

**IMPORTANT:** Select "Production", "Preview", and "Development" for the variable.

### Step 3: Redeploy

After adding the environment variable:
1. Go to Deployments tab
2. Click the three dots on your latest deployment
3. Click "Redeploy"

---

## API Endpoints Created

The following serverless functions are available at `/api/`:

### GET /api/summoner
Look up a player by Riot ID

**Query Parameters:**
- `gameName` (required): The player's game name (e.g., "Morpheus")
- `tagLine` (required): The player's tag (e.g., "NA1")
- `platform` (optional): Server region (default: "NA1")

**Example:**
```
/api/summoner?gameName=Morpheus&tagLine=NA1&platform=NA1
```

### GET /api/matches
Get match history for a player

**Query Parameters:**
- `puuid` (required): Player's PUUID (from summoner lookup)
- `platform` (optional): Server region (default: "NA1")
- `count` (optional): Number of matches (default: 10, max: 20)
- `queue` (optional): Queue type (default: 420 = Ranked Solo)

**Example:**
```
/api/matches?puuid=abc123...&platform=NA1&count=10
```

### POST /api/analyze
Analyze match data and generate improvement recommendations

**Body:**
```json
{
  "matches": [...], // Array of match data from /api/matches
  "playerRank": "gold" // Optional: player's rank for benchmarking
}
```

---

## Rate Limits

Riot API has rate limits:
- **Development Key:** 20 requests per second, 100 requests per 2 minutes
- **Production Key:** Higher limits (requires application approval)

The serverless functions include small delays to avoid hitting rate limits.

---

## Local Development

To run locally with API access:

1. Create a `.env.local` file:
```
RIOT_API_KEY=RGAPI-794742c5-258c-42f4-86b7-833d1507f709
```

2. Install Vercel CLI:
```bash
npm i -g vercel
```

3. Run with Vercel dev:
```bash
vercel dev
```

---

## API Key Expiration

**IMPORTANT:** Riot API development keys expire every 24 hours!

To get a new key:
1. Go to https://developer.riotgames.com/
2. Log in with your Riot account
3. Go to Dashboard
4. Generate a new Development API Key
5. Update the environment variable in Vercel

For a permanent key, apply for a Production API Key through Riot's application process.

---

## Troubleshooting

### "API key not configured" error
- Check that RIOT_API_KEY is set in Vercel environment variables
- Make sure you redeployed after adding the variable

### "Summoner not found" error
- Check the Riot ID spelling (case sensitive)
- Make sure to include the correct tag line (e.g., #NA1)
- Verify the region is correct

### "Rate limited" error
- Wait a minute and try again
- Riot API has strict rate limits for development keys

### Match data not loading
- The player needs to have played ranked games recently
- Some very old matches may not be available

---

## Files Structure

```
/api
  /summoner.js    - Player lookup endpoint
  /matches.js     - Match history endpoint
  /analyze.js     - Analysis engine endpoint
/src
  /utils
    /playerAnalysis.js - Client-side analysis utilities
vercel.json         - Vercel configuration
```
