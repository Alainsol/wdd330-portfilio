

let carts = document.querySelectorAll('.add-to-car');

let products = [
    {
        id: 1,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        tag:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        inCart:0,
        img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        
        },
    { 
        id: 2,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        tag:"Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        inCart:0,
        img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        id: 3,
        name: "Mens Cotton Jacket",
        tag:"Mens Cotton Jacket",
        price: 55.99,
        inCart:0,
        img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
        id: 4,
        name: "Mens Casual Slim Fit",
        tag:"Mens Casual Slim Fit",
        price: 15.99,
       inCart:0,
        img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

    },
    {
        id: 5,
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        tag:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
       inCart:0,
        img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
        id: 6,
        name: "Solid Gold Petite Micropave ",
        tag:"Solid Gold Petite Micropave ",
        price: 168,
        inCart:0,
        img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        id: 7,
        name: "White Gold Plated Princess",
        tag:"White Gold Plated Princess",
        price: 9.99,
        inCart:0,
        img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",

    },
    {
        id: 8,
        name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        tag:"Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        inCart:0,
        img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        

    },
    {
        id: 9,
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
     inCart:0,   
     img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        
        },
        {
        id: 10,
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
    inCart:0,   
     img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        
        },
        {
        id: 11,
        name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
    inCart:0,   
     img: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        
        },
        {
        id: 12,
        name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
    inCart:0,   
     img: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        
        },
        {
        id: 13,
        name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
    
    inCart:0,  
      img: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        
        },
        {
        id: 14,
        name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
       inCart:0,   
     img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        
        },
        {
        id: 15,
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        inCart:0,
        img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        
        },
        {
        id: 16,
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        inCart:0,
        img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        
        },
        {
        id: 17,
        name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        inCart:0,
        img: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        
        },
        {
        id: 18,
        name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        inCart:0,
        img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        
        },
        {
        id: 19,
        name: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        inCart:0,
        img: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        
        },
        {
        id: 20,
        name: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        inCart:0,
        img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        
        }
] 

for (let i =0; i< carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
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

    