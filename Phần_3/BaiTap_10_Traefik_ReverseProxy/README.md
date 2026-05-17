# Bài Tập 10: Traefik as Reverse Proxy

## Mục tiêu
Dùng Traefik để định tuyến request đến các service (Flask, WordPress, etc.).

## Yêu cầu
1. Cấu hình Traefik với Docker provider
2. Đặt labels cho services để Traefik nhận diện

## Chạy bài tập:
```bash
docker-compose up -d
```

## Truy cập:
- Traefik Dashboard: http://localhost:8080
- Flask1: http://flask1.localhost
- Flask2: http://flask2.localhost
- WordPress: http://wordpress.localhost

## Dừng:
```bash
docker-compose down -v
```

## Ghi chú:
- Sử dụng Docker provider để tự động phát hiện services
- Labels trên services cho phép Traefik cấu hình routing
- Mỗi service được định tuyến dựa trên hostname
