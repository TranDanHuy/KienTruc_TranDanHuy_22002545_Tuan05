# Bài 11: Chạy dịch vụ Postgres với Adminer

## Yêu cầu:
- Chạy PostgreSQL và Adminer (công cụ quản lý database) bằng Docker Compose
- PostgreSQL phải có database tên mydb, user là user, password là password
- Adminer chạy trên cổng 8083

## Truy cập:
- Adminer: http://localhost:8083

## Đăng nhập:
- System: PostgreSQL
- Server: postgres
- Username: user
- Password: password
- Database: mydb

## Chạy bài tập:
```bash
docker-compose up -d
```

## Dừng:
```bash
docker-compose down -v
```
