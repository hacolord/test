module.exports = (req, res) => {
    const userAgent = req.headers['user-agent'] || '';
    const secretKey = req.query.key;

    // 1. CHO CHÍNH CHỦ XEM CODE (Có mật khẩu ?key=matkhaubimat123)
    if (secretKey === 'matkhaubimat123') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.status(200).send(`-- CODE GỐC CỦA CHÍNH CHỦ
print("Hello Owner! Bạn đang xem code qua trình duyệt.")

-- Dán code Lua của bạn vào đây:
print("Script đã load thành công!")
`);
    }

    // 2. CHO PHÉP GAME ROBLOX CHẠY
    if (userAgent.includes('Roblox')) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.status(200).send(`print("Script đang chạy trong Roblox!")`);
    }

    // 3. NGƯỜI LẠ BẤM VÀO LINK TRÊN TRÌNH DUYỆT -> CHẶN
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(403).send('Access Denied: Browser access is not permitted.');
};
