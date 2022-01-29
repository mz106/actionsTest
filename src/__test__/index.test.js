const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    describe("returns ok and status 200", () => {
        test("should respond status 200", async () => {
            const res = await request(app).get("/");
            expect(res.statusCode).toBe(200);
        });
    
    });
});

// describe("POST /users", () => {

//     describe("when passed a username and password", () => {
//       test("should respond with a 200 status code", async () => {
//         const response = await request(app).post("/users").send({ 
//           username: "username", 
//           password: "password" 
//         })
//         expect(response.statusCode).toBe(200)
//       })
//     })
  
//   })