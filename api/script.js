export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';
    const secretKey = req.query.key;

    // 1. MẬT KHẨU CHÍNH CHỦ: Đổi 'matkhaubimat123' thành mật khẩu của bạn
    if (secretKey === 'matkhaubimat123') {
        res.setHeader('Content-Type', 'text/plain');
        return res.status(200).send(`-- CODE GỐC CỦA BẠN
print("Hello Owner! Ban dang xem code qua trình duyệt.")
-- Dat toan bo code Roblox Lua cua ban o day
`);
    }

    // 2. CHO PHÉP ROBLOX CLIENT: Trả về script chạy trong game
    if (userAgent.includes('Roblox')) {
        res.setHeader('Content-Type', 'text/plain');
        return res.status(200).send(`print("Script dang chay thanh cong trong Roblox!")`);
    }

    // 3. NGƯỜI LẠ BẤM VÀO LINK TRÊN TRÌNH DUYỆT -> CHẶN
    return res.status(403).send('Access Denied: Browser access is not permitted.');
}
