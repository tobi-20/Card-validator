# Card Number Validation API

A simple REST API that validates card numbers using structural rules and the Luhn algorithm.

Built with Node.js, TypeScript, and Express.

---

## Tech Stack

- Node.js
- TypeScript (strict mode enabled)
- Express.js
- Zod (input validation)
- Jest (testing)

---

## Features

- Validates card number input
- Ensures input is numeric and within valid length (13–19 digits)
- Implements Luhn algorithm for card validation
- Returns clear, consistent API responses
- Handles invalid and missing input gracefully

---

## 📡 API Endpoint

### Validate Card Number

`POST /validate-card`

### Request Body

```json
{
  "cardNumber": "4242424242424242"
}
```

### Success Response

```json
{
  "ok": true,
  "cardNumber": "4242424242424242"
}
```

### Invalid Card Response

```json
{
  "ok": false,
  "reason": "Failed Luhn check"
}
```

### Missing Input Response

```json
{
  "ok": false,
  "error": "Invalid card number"
}
```

### Validation Logic

The card validation is done in 3 steps:

-Schema validation (Zod)
Ensures input is a string
Ensures length is between 13 and 19 characters
Ensures input is numeric

-Business logic validation
Applies the Luhn algorithm to verify card number correctness

-Final decision
Returns valid: true or valid: false with a reason

Note: The Luhn algorithm validates structure, not whether a card actually exists or is active.

### Running Tests

-npm install
-npm run test

-Tests cover:
Luhn algorithm correctness
Service-level validation logic
Schema validation rules

### Running the Project

-Install dependencies:
npm install
-Start server:
nodemon
Server runs on: http://localhost:3000

### Project Structure

src/
app.ts
handlers/
card.handler.ts
lib/
luhn.ts
schema/
schema.ts
services/
card.service.ts
tests/
card.test.ts
lib.test.ts
schema.test.ts
