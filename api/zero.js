export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { privateKey, bearer, count, rpcUrl } = req.body;

    // Validasi input
    if (!privateKey || !bearer || !rpcUrl) {
      return res.status(400).json({ success: false, error: "Missing parameters" });
    }

    // Dummy logic untuk testing
    const responses = [];
    for (let i = 1; i <= count; i++) {
      responses.push({
        signatureIndex: i,
        status: "ok"
      });
    }

    return res.status(200).json({
      success: true,
      sessionId: "test-session-" + Date.now(),
      rpcUsed: rpcUrl,
      responses,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error: " + err.message,
    });
  }
}
