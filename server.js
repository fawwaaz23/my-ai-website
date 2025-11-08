require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Endpoint to handle user questions
app.post('/api/ask', async (req, res) => {
    const { question } = req.body;
    if(!question) return res.status(400).json({ error: "Question is required" });

    try {
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText',
            {
                prompt: question,
                temperature: 0.7,
                candidateCount: 1,
                maxOutputTokens: 512
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const answer = response.data.candidates[0].output;
        res.json({ answer });

    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Failed to get AI response" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
