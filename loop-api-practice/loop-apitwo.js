let url = "https://fakestoreapi.com/products";


async function fetchproducts() {
    const info = await fetch(url);
    const item = await info.json();


    for (let singleitem of item){
        console.log(`Product id is: ${singleitem.id}, \nProduct title: ${singleitem.title}\nProduct Price: ${singleitem.price} \nProduct Description: ${singleitem.description} \nProduct category: ${singleitem.category} \nProduct img: ${singleitem.image} \nProduct rating rate: ${singleitem.rating.rate} \nProduct rating count: ${singleitem.rating.count}` )
    }



}


fetchproducts()

