import * as obj from '../scripts/data'
describe("Export", () => {
    it("Recipe data is exported in `scripts/data.js`", () => {
        expect(obj).not.toEqual({})
    });
});