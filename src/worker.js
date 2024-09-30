/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// Export a default object containing event handlers
export default {
  async fetch(request, env, ctx) {

	  ctx.waitUntil(sinkToBetterstack(request.json(), env.BETTERSTACK_TOKEN));
  },
  async tail(events, env, ctx) {

    for (const event of events) {
      await sinkToBetterstack(event, env.BETTERSTACK_TOKEN)
    }

  }
};

async function sinkToBetterstack(event, token) {

  await fetch("https://in.logs.betterstack.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(event)
  })

}
