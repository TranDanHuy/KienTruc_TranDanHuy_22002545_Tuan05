# Bài Tập 3: Load Balancing với Nginx + Flask

## Mục tiêu
Cân bằng tải giữa 2 instance Flask dùng Nginx.

## Yêu cầu
1. 2 service Flask (sử dụng app.py từ bài tập trước, port 5000)
2. 1 service Nginx (port 8080) cấu hình làm reverse proxy
3. Chuyển request / đến các Flask instance (round-robin)
4. Tạo custom network và Nginx config

## Chạy bài tập:
```bash
docker-compose up -d
```

## Kiểm tra Load Balancing:
```bash
curl http://localhost:8080/api/status
curl http://localhost:8080/api/status
```

Bạn sẽ thấy các responses từ flask1 và flask2 xoay phiên.

## Dừng:
```bash
docker-compose down
```
