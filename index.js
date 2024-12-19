const express = require('express');
const redirects = require('./redirects'); // Import file cấu hình

const app = express();
const PORT = 3000;

// Middleware xử lý redirect
redirects.forEach(route => {
    app.get(route.source, (req, res) => {
        res.redirect(301, route.target); // 301 là HTTP status code cho permanent redirect
    });
});

// Trang mặc định nếu không match route
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

// Lắng nghe trên cổng
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});