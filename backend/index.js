const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    try {

        const { data } = req.body;

        const user_id = "syed_basheer_29102003"; 
        const email = "syed_basheer@srmap.edu.in";
        const roll_number = "AP21110011294";
        const numbers = [];
        const alphabets = [];
        
        let high_alpha = '';

        for (let i = 0; i < data.length; i++) {
            if (!isNaN(data[i])) {
                numbers.push(data[i]);
            } else {
                alphabets.push(data[i]);
                if (data[i].toLowerCase() > high_alpha.toLowerCase()) {
                    high_alpha = data[i];
                }
            }
        }

        const highest_alphabet = high_alpha ? [high_alpha] : [];

        res.json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        const user_id = "syed_basheer_29102003"; 
        const email = "syed_basheer@srmap.edu.in";
        const roll_number = "AP21110011294";
        const numbers = [];
        const alphabets = [];
        const highest_alphabet=[];
        res.status(500).json({
            is_success: false,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
    }
});

app.get('/bfhl', (req, res) => {
    try {
        res.json({ operation_code: 1 });
    } catch (error) {
        res.status(500).json({ is_success: false, error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
