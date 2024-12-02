# REST API
## 
curl -X GET http://localhost:3000/cards


## Adding new cards
curl -X POST http://localhost:3000/cards \
-H "Content-Type: application/json" \
-d '{"name": "Tarmogoyf", "price": "200"}'
