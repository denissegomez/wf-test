const should = require('chai').should();
const axios = require('axios');

const categoriesURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

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
})