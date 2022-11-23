import { summary } from "./Array";
describe("expect array to return values", () => {
  it("should hav the desc", () => {
    expect(summary).toEqual(
      expect.objectContaining({
        heading: "My heading",
        user: expect.objectContaining({
          userhead: "head 1",
          userdetail: expect.arrayContaining([
            expect.objectContaining({ desc: "name", value: "hari" }),
            expect.objectContaining({ desc: "age", value: "22" }),
            expect.objectContaining({ desc: "id", value: "1" }),
            expect.objectContaining({ desc: "address", value: "100" }),
          ]),
        }),
      })
    );
  });

  //   it("should hav the userdetail", () => {
  //     expect(summary.user.userdetail).toEqual(
  //       expect.objectContaining({
  //         heading: "My heading",
  //       })
  //     );
  //   });
});
// userdetail: expect(userdetail).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({ desc: "name" }),
//       expect.objectContaining({ desc: "age" }),
//       expect.objectContaining({ desc: "id" }),
//       expect.objectContaining({ desc: "address" }),
//     ])
//   ),
// export const summary = {
//   heading: "My heading",
//   user: {
//     userhead: "head 1",
//     userdetail: [
//       { desc: "name", value: "hari" },
//       { desc: "age", value: "22" },
//       { desc: "id", value: "1" },
//       { desc: "address", value: "100" },
//     ],
//   },
// };
