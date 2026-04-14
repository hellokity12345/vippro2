# Dự án Web Modern (New 1)

Bộ khung chuẩn công nghiệp sử dụng **Next.js 15**, **TypeScript**, **Tailwind CSS**, và **Framer Motion**.

## 🚀 Hướng dấn triển khai lên VPS

### 1. Chuẩn bị trên VPS
Cài đặt Node.js, Nginx và PM2:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx
sudo npm install pm2 -g
```

### 2. Triển khai code
Clone code từ GitHub vào VPS, sau đó:
```bash
npm install
npm run build
```

### 3. Vận hành với PM2
Sử dụng file cấu hình `ecosystem.config.js` đã được tạo sẵn:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 4. Cấu hình Nginx
Dùng luôn file `nginx.conf` trong chính dự án này để làm reverse proxy về cổng `3000`.

Ví dụ trên Ubuntu:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/new1-web
sudo ln -s /etc/nginx/sites-available/new1-web /etc/nginx/sites-enabled/new1-web
sudo nginx -t
sudo systemctl reload nginx
```

## 🛠 Cấu trúc thư mục
- `src/app`: Chứa các trang và layout.
- `src/components`: Các thành phần UI có thể tái sử dụng.
- `src/utils`: Các hàm tiện ích.
- `ecosystem.config.js`: Cấu hình chạy ngầm cho VPS.
