const request = require("supertest");
const app = require("../../index");

describe('/user', () => {
    describe('POST /user ', () => {
        test("return 400 username missing as json", async() => {
            const payload = {password: "password"};
            const res = await request(app).post("/user").send(payload);
            expect(res.statusCode).toBe(400);
            expect(res.header["content-type"]).toContain("application/json");
        });
        test("return 400 password missing as json", async() => {
            const payload = {username: "username"};
            const res = await request(app).post("/user").send(payload);
            expect(res.statusCode).toBe(400);
            expect(res.header["content-type"]).toContain("application/json");
        });
        test("returns 201 when passed username and password", async () => {
            const res = await request(app).post("/user").send({
                username: "username",
                password: "password"
            });

            expect(res.statusCode).toBe(201);
        });
        test("should specify json as the content in the http header", async () => {
            const payload = {username: "username", password: "password"};
            const res = await request(app).post("/user").send(payload).set('Accept', 'application/json');
            expect(res.header["content-type"]).toContain('json');
        });
    });
    describe('POST /user/login', () => {
        test("return 400 username missing as json", async() => {
            const payload = {password: "password"};
            const res = await request(app).post("/user/login").send(payload);
            expect(res.statusCode).toBe(400);
            expect(res.header["content-type"]).toContain("application/json");
        });
        test('returns 201 when passed username and password', async () => {
            const res = await request(app).post("/user/login").send({
                username: "username",
                password: "password"
            });

            expect(res.statusCode).toBe(201); 
        });
    });
});



