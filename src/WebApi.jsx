
const options = {
    mode: 'cors',
    type: 'GET',
    headers: {
        
    }
};
export async function getCategories() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', options);
    return await res.json();
}

export async function getIngredients() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list', options);
    return await res.json();
}
//

export async function getCountries() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list', options);
    return await res.json();
}

export async function getRandomReciepe() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', options);
    return await res.json();
}

export async function getReciepesFitleredBy(filter, filterBy) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${filterBy}=${filter}`, options);
    return await res.json();
}

export async function getById(id) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, options);
    return await res.json();
}