# Bài 2: Chạy MySQL với Docker Compose

## Yêu cầu:
- Tạo một container chạy MySQL phiên bản 8.0
- Đặt username là user, password là password và database là mydb

## Thông tin kết nối:
- Host: localhost:3306
- User: user
- Password: password
- Database: mydb

## Chạy bài tập:
```bash
docker-compose up -d
```

## Kiểm tra:
```bash
docker-compose logs mysql
```

## Dừng:
```bash
docker-compose down -v
```
