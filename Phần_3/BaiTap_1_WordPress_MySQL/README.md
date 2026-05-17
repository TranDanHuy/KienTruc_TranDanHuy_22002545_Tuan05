# Bài Tập 1: Triển khai WordPress với MySQL

## Mục tiêu
Tạo stack WordPress kết nối với MySQL, sử dụng volumes để lưu trữ dữ liệu.

## Yêu cầu
1. Sử dụng image wordpress:latest (port 80)
2. Sử dụng image mysql:5.7 (port 3306)
3. Volume cho database (/var/lib/mysql)
4. Biến môi trường cho MySQL (MYSQL_ROOT_PASSWORD, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD)

## Chạy bài tập:
```bash
docker-compose up -d
```

## Truy cập:
- WordPress: http://localhost:80

## Dừng:
```bash
docker-compose down -v
```

## Ghi chú:
- WordPress phụ thuộc vào MySQL (depends_on)
- Sử dụng network tùy chỉnh để kết nối giữa 2 service
