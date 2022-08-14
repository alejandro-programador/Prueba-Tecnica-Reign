import { API_DATA } from '../static/API_PETITION';

describe("Content tests", () => {

    jest.setTimeout(30000);

    test("Get API data", async () => {
        const data = await API_DATA().then(response => response.data.hits);
        expect(Array.isArray(await data)).toBe(true);
        expect((data.length > 0) ? true : false).toBe(true);
    })

    test("Get my faves data", async () => {
        const MY_FAVES = localStorage.getItem('faves_posts');

        if( MY_FAVES ){
            expect(typeof MY_FAVES).toBe('string');
        }else{
            expect(MY_FAVES).toBe(null);
        }

    })

})