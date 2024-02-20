const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let history = [];

// Routes
app.get('/history', (req, res) => {
    res.json(history);
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operation, result, dateTime } = req.body;
    const calculation = { num1, num2, operation, result, dateTime };
    history.push(calculation);
    res.status(200).json({ message: 'Calculation saved to history.', calculation });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
