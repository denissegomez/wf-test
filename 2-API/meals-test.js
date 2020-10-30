const should = require('chai').should();
const axios = require('axios');

const categoriesURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
const filtersURL = "https://www.themealdb.com/api/json/v1/1/filter.php?";

function getCategoriesFromResponse(response){
    return response.data.categories;;
}

describe("Categories", function(){
    it("GET/ Should return 14 categories", function(done){
        axios.get(categoriesURL).then(function(response) {
            const categories = getCategoriesFromResponse(response);
            categories.length.should.equal(14);
            done();
        });
    });

    it("GET/ Category id 4 should be lamb", function(done){
        axios.get(categoriesURL).then(function(response){
            const categories = getCategoriesFromResponse(response);
            const foundCategory = categories.find(category => category.idCategory == "4");
            foundCategory.strCategory.should.equal("Lamb");
            done();
        });
    });

    it("GET/ Last category meals should return one meal", function(done){
        axios.get(categoriesURL).then(function(response){
            const categories = getCategoriesFromResponse(response);
            const goatCategory = categories[categories.length - 1];
            
            return axios.get(filtersURL + "c=" + goatCategory.strCategory).then(function(response){
                const meals = response.data.meals;
                meals.length.should.equal(1);
                done();
            });
        });
    });
})

describe("Filters", function(){
    it("GET/ By Spanish area should include Spanish Tortilla", function(done){
        axios.get(filtersURL + "a=Spanish").then(function(response){
            const meals = response.data.meals;
            const spanishTortilla = meals.filter(meal => meal.strMeal == "Spanish Tortilla");
            spanishTortilla.length.should.equal(1);
            done();
        });
    });

    it("GET/ By ingredients should return all results with thumbnails", function(done){
        axios.get(filtersURL + "i=milk").then(function(response){
            const meals = response.data.meals;
            const someWithoutThumbnail = meals.some(meal => meal.strMealThumb == "");
            someWithoutThumbnail.should.equal(false);
        })
    });
});