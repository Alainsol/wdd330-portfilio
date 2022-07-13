

let carts = document.querySelectorAll('.add-to-car');
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data => {
        let products = data;
        displayFeaturedProducts(products);
        displayBestSellingProducts(products);
        for (let i =0; i< carts.length; i++){
            carts[i].addEventListener('click', () => {
                cartNumbers(products[i]);
                totalCost(products[i]);
            })
        }
    }));

function displayFeaturedProducts(products)
{
    let featuredProducts = document.getElementById('featured-products');
    for (let i =0; i< 12; i++) {
        let product = products[i];
        featuredProducts.innerHTML += `
        <div id="${product.id}">
     <img style="width: 150px;" src="${product.image}" alt="hoodie" >
     <h4>${product.title}</h4>
     <p class="price">$${product.price}</p>
     <p class="button"><button class="add-to-car" onclick="myFunction()" >Click to buy</button></p>
    </div>
        `;
    }
    
}

//aa-client-brand-slider slick-initialized slick-slider

function displayBestSellingProducts(products)
{
    let bestSellingProducts = document.getElementById('best-selling-products');
    for (let i =0; i< 10; i++) {
        let product = products[i];
        bestSellingProducts.innerHTML += `
        <li><div id="${product.id}">   
              <img style="width: 150px;" src="${product.image}" alt="hoodie" >
              <h4>${product.title}</h4>
              <p class="price">$${product.price}</p>
              <p class="button"><button class="add-to-car" onclick="myFunction()" >Click to buy</button></p>
             </div></li>
            <li>
        `;
    }
    initProductSlider();
}


function onCardLoadNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.aa-cartbox span').textContent =  productNumbers;

  }
}

function cartNumbers(product) {
   
    let productNumbers = localStorage.getItem('cartNumbers');
  
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1 );
        document.querySelector('.aa-cartbox span').textContent = productNumbers + 1;
    }else{
       localStorage.setItem('cartNumbers',1);
       document.querySelector('.aa-cartbox span').textContent = 1;
    }
    setItems(product);
}


function setItems(product) {
    let cartitems = localStorage.getItem("ProductsinCart");
    product.inCart = 1;
    cartitems = JSON.parse(cartitems);

    if(cartitems != null){
        if(cartitems[product.id] == undefined) {
            cartitems = {
                ...cartitems,
                [product.name] : product,
            }
        }
        cartitems[product.name].inCart += 1
    }else {
        cartitems = {
            [product.name] : product
        }
    }
    localStorage.setItem("ProductsinCart",JSON.stringify(cartitems));
    }

    function totalCost(product){
                let CartCost = localStorage.getItem("totalCost");
                  
        
                if(CartCost != null){
                    CartCost = parseInt(CartCost);
                    localStorage.setItem("totalCost", CartCost+product.price);
                }else{
                    localStorage.setItem("totalCost",product.price);
                }
        
            }


            function totalCost(product){
                        let CartCost = localStorage.getItem("totalCost");
                          
                
                        if(CartCost != null){
                            CartCost = parseInt(CartCost);
                            localStorage.setItem("totalCost", CartCost+product.price);
                        }else{
                            localStorage.setItem("totalCost",product.price);
                        }
                
                    }

            function displayCart(){
                        let cartItems = localStorage.getItem("ProductsinCart");
                      cartItems = JSON.parse(cartItems);
                      console.log(cartItems);
                      let ProductContainer = document.querySelector(".products");
                      let CartCost = localStorage.getItem("totalCost");


            if( cartItems &&  ProductContainer ){
                ProductContainer.innerHTML = ``;
                        Object.values(cartItems).map(items => {
                            ProductContainer.innerHTML += `
                
                            
                             <div class="product">
                             <i  id="icon" class="fas fa-times-circle"></i>
                             <img style="width:40px; padding-right:4px" src=${items.img} />
                             <p class="title">${items.name}</p>
                             <p class="price1">${items.price}<p>
                             <div class="q_div">
                             <i  id="iconPlus" class="fa-solid fa-circle-plus"></i> 
                             <p class="quantity">${items.inCart}</p>
                             <i  id="iconMinus" class="fa-solid fa-circle-minus"></i>
                             <div>
                             <div class="total">$${items.inCart * items.price}</div>
                           
                             </div>
                           
                            `; 
                        });
                        ProductContainer.innerHTML += `
                                <div class="btc">
                                  <div class="btt">
                                  <h3> Basket Total</h3>
                                  </div>
                                   <div class="bt">
                                  <h3>  $ ${CartCost}</h3>
                              </div>
                                </div>
                              `
                                console.log(CartCost);
                           
                               
                        

            }
        }

        

onCardLoadNumbers ()
displayCart()

// function onCardLoad(){
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if(productNumbers){
//         document.querySelector('.aa-cartbox span').textContent = productNumbers ;
//     }
// }

//  function cartNumbers(Products){
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);
//     localStorage.setItem('cartNumbers',1);

    // if(productNumbers){
    //     localStorage.setItem('cartNumbers',productNumbers + 1);
    //     document.querySelector('.aa-cartbox span').textContent =productNumbers + 1;
    // }else {
    //     localStorage.setItem('cartNumbers', 1);
    //     document.querySelector('.aa-cartbox span').textContent = 1;
    // }
// }
//     setItems(Products);
    

// }
//  onCardLoad();
// displayCart()

// function setItems(Products) {
//     let cartItems = localStorage.getItem("ProductsinCart");
//     Products.inCart = 1;
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null){
//         if(cartItems[Products.id] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [Products.name] : Products,
//             }
//         }
//         cartItems[Products.name].inCart += 1
//     }else {
//         cartItems = {
//             [Products.name] : Products
//         }
//     }
//     localStorage.setItem("ProductsinCart",JSON.stringify(cartItems));
//     }

//     function totalCost(Products){
//         let CartCost = localStorage.getItem("totalCost");
          

//         if(CartCost != null){
//             CartCost = parseInt(CartCost);
//             localStorage.setItem("totalCost", CartCost+Products.Price);
//         }else{
//             localStorage.setItem("totalCost",Products.Price);
//         }

//     }

//     function displayCart(){
//        let cartItems = localStorage.getItem("ProductsinCart");
//        cartItems = JSON.parse(cartItems);
//        let ProductContainer = document.querySelector(".products");
//        let CartCost = localStorage.getItem("totalCost");
       

    


//        if( cartItems &&  ProductContainer ){
//         ProductContainer.innerHTML = ``;
//         Object.values(cartItems).map(items => {
//             ProductContainer.innerHTML += `

            
//              <div class="product">
//              <i id="icon" class="fas fa-times-circle"></i>
//              <img src="coursework/assignment1resources/images/items/hoodies/${items.img}.jpg" />
//              <p class="title">${items.name}</p>
//              <p class="price1">${items.Price}<p>
//              <div class="q_div">
//              <i id="iconPlus" class="fal fa-plus-circle"></i>
//              <p class="quantity">${items.inCart}</p>
//              <i  id="iconMinus" class="far fa-minus-circle"></i>
//              <div>
//              <div class="total">£${items.inCart * items.Price}</div>
           
//              </div>
           
//             `; 
//         });
//         ProductContainer.innerHTML += `
//         <div class="btc">
//           <div class="btt">
//           <h5> Basket Total</h5>
//           </div>
//           <div class="bt">
//           <h5>  £${CartCost}</h5>
//           </div>
//         </div>
//        `
//        console.log(CartCost);
   
       
//        }
//     }

function initProductSlider(){
    jQuery('.aa-client-brand-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  }