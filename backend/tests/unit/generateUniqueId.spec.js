const genetateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = genetateUniqueId();

        expect(id).toHaveLength(8);
    })
})