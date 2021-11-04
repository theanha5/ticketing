import request from "supertest";
import { app } from "../../app";

const createTicket = async () => {
  return await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title: "asldkf",
      price: 20,
    });
};

it("can fetch a list of tickets", async () => {
  await Promise.all([createTicket(), createTicket(), createTicket()]);

  const response = await request(app).get("/api/tickets").send().expect(200);

  expect(response.body.length).toEqual(3);
});
