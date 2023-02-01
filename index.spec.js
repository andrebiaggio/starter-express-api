const request = require("supertest");
const app = require("./src/server");

describe("Test my server", () => {
  it("should return users", async () => {
    const response = await request(app).get("/users?since=1000");
    expect(response.body).toHaveProperty("data");
    expect(response.statusCode).toEqual(200);
  });

  it("should return user details", async () => {
    const response = await request(app).get("/users/andrebiaggio/details");
    expect(response.body).toHaveProperty("data");
    expect(response.statusCode).toEqual(200);
  });

  it("should return user repos", async () => {
    const response = await request(app).get("/users/andrebiaggio/repos");
    expect(response.body).toHaveProperty("data");
    expect(response.statusCode).toEqual(200);
  });
});
