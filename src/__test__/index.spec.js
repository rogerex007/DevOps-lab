import app from "../app";
import request from "supertest";


describe("GET /users", () => {
    it("should return an array of users", (done) => {
        request(app)
            .get("/users")
            .expect(200)
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: "John" }, { id: 2, name: "Jane" }]);
                done();
            });
    });
});