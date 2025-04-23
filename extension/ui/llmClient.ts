export async function askClaude(imgB64: string, threadId?: string) {
  const body = {
    model: "claude-3-haiku-20240307-vision",
    max_tokens: 512,
    attachments: [{ type: "image/png", data: imgB64 }],
    messages: [{
      role: "user",
      content: `You are an n8n expert... return JSON with keys: cause, steps`
    }],
    ...(threadId ? { thread_id: threadId } : {})
  };
  const key = await chrome.storage.local.get('anthropicKey');
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key.anthropicKey,
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
} 