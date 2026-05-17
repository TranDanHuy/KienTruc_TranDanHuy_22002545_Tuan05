# Bài Tập 5: Multi-tier Voting App

## Mục tiêu
Triển khai ứng dụng voting gồm 5 services.

## Yêu cầu
1. Frontend: vote (Python, port 5000)
2. Backend: result (Node.js, port 5001)
3. Redis (lưu tạm vote)
4. Worker (Java) xử lý vote từ Redis sang DB
5. Postgres (lưu kết quả)

## Chạy bài tập:
```bash
docker-compose up -d
```

## Truy cập:
- Vote app: http://localhost:5000
- Result app: http://localhost:5001

## Dừng:
```bash
docker-compose down -v
```

## Lưu ý:
Cần chuẩn bị mã nguồn cho vote, result, worker trong các thư mục tương ứng.
