const fetchRecipes = async () => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=0c8f83cb34f64ecdaf9190e5be1d115f&includeNutrition=true`,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        console.log(res.json())
        return res.json();

    } catch (e) {
        console.log('Fail fetching recipes')
    }
}

export default fetchRecipes