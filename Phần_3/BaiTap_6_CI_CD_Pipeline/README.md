# Bài Tập 6: CI/CD Pipeline với Docker Compose

## Mục tiêu
Mô phỏng pipeline dev/test bằng Docker Compose.

## Yêu cầu
1. Service app (Python/Node.js) với code được mount từ host (development mode)
2. Service tests chạy unit tests khi code thay đổi
3. Service nginx (production mode) dùng image build sẵn từ app

## Chạy Development:
```bash
docker-compose -f docker-compose-dev.yml up -d
```

## Chạy Production:
```bash
docker-compose -f docker-compose-prod.yml up -d
```

## Dừng:
```bash
docker-compose -f docker-compose-dev.yml down
docker-compose -f docker-compose-prod.yml down
```

## Ghi chú:
- Sử dụng 2 file compose khác nhau
- Dev mode mount code từ host
- Production mode dùng pre-built image
