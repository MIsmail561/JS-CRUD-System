

var productsContainer;

if(localStorage.getItem("products") == null)
    {
        productsContainer = [];
    }
else
    {
        productsContainer =  JSON.parse( localStorage.getItem("products")  );
        displayProducts();
    }

var index = 0;
var btn = document.getElementById("myBtn");
var searchBtn = document.getElementById("searchBtn");
var searchInp = document.getElementById("searchInp");
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");




btn.onclick = function()
{
    
    if(btn.innerHTML == "add Product")
        {
                addProduct();
                displayProducts();
    
        }
    else
        {
            updateProduct();
        }
}


searchInp.onkeyup = function()
{
    searchProduct();
}


function searchProduct()
{
    var searchCols = "";
    var term = searchInp.value;
    
    for(var i= 0 ;i<productsContainer.length ; i++)
        {
            if(productsContainer[i].name.includes (term))
                {
                    searchCols +=`<diV class="col-md-4">
                            <div class="product">
                                <img src="images/p1.jpg" class="img-fluid"/>
                                <h3>`+productsContainer[i].name+`</h3>
                                <p class="text-muted">`+productsContainer[i].desc+`</p>
                                <p class="text-danger">`+productsContainer[i].price+`</p>
                                <p class="text-info">`+productsContainer[i].comp+`</p>

                            </div>


                        </diV>`
                }
            
        }
    document.getElementById("searchResult").innerHTML = searchCols;
}

function updateProduct()
{
            productsContainer[index].name = productNameInp.value;
            productsContainer[index].price = productPriceInp.value;
            productsContainer[index].desc = productDescInp.value;
            productsContainer[index].comp = productCompanyInp.value;
            localStorage.setItem("products" , JSON.stringify(productsContainer))    
            displayProducts();  
            clearForm();
            btn.innerHTML = "add Product";

}

function setForm(ind)
{
    index = ind;
    productNameInp.value = productsContainer[ind].name;
    productPriceInp.value = productsContainer[ind].price;
    productDescInp.value = productsContainer[ind].desc;
    productCompanyInp.value = productsContainer[ind].comp;
    
    btn.innerHTML = "update product";
}

function addProduct()
{
    
   
   
    if(productNameInp.value == "" || productPriceInp.value == "" ||  productCompanyInp.value == "" ||  productDescInp.value == "" )
        {
            alert("all fields are required");
        }
    else    
        {
        
                var product  =
                    {
                        name:productNameInp.value,
                        price:productPriceInp.value,
                        comp:productCompanyInp.value,
                        desc:productDescInp.value
                    }

                productsContainer.push(product);

            localStorage.setItem("products" , JSON.stringify(productsContainer))         
        }
    

}

function displayProducts()
{
    var cols = "";
    for(var i =0 ; i<productsContainer.length ;i++)
        {

            cols +=`  <diV class="col-md-4">
                            <div class="product">
                                <img src="images/p1.jpg" class="img-fluid"/>
                                <h3>`+productsContainer[i].name+`</h3>
                                <p class="text-muted">`+productsContainer[i].desc+`</p>
                                <p class="text-danger">`+productsContainer[i].price+`</p>
                                <p class="text-info">`+productsContainer[i].comp+`</p>

                        <button onclick="deleteProduct(`+i+`)" class="btn btn-danger mb-5">delete</button>
                        <button onclick="setForm(`+i+`)" class="btn btn-info mb-5">update</button>
                            </div>


                        </diV>`;
        }
    document.getElementById("productsRow").innerHTML = cols;
}




function deleteProduct(i)
{
    productsContainer.splice(i , 1);
    localStorage.setItem("products" , JSON.stringify(productsContainer))    
    displayProducts();   
}


function clearForm()
{
    productNameInp.value = "";   
    productDescInp.value = "";   
    productCompanyInp.value = "";   
    productPriceInp.value = "";   
}















    
    
    
    