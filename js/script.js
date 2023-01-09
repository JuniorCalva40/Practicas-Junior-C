
const API = 'https://bookshelves.p.rapidapi.com/books';
 const options = {
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': 'dd0d3acf93msh61d4ac9c49b4beap104636jsn76d9475905db',
         'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com'
     }
 };
 // Call to API to Json to Data 
 const fetchData = async(urlApi) => {
     const response =await fetch (urlApi,options);
     const data = await response.json();
     return data;
 }
// Format numbers as currency strings (USD)
let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

 

//Funtion map to Books
 (async function getBooksMain ()  {
     const getBooks =await fetchData(API);
     const content = document.getElementById('content');
     let view = `
     ${getBooks.Books.map((j) => `
     
    
        <div class="box" >
            <div class="icons">
                 <a href="#" class="fas fa-eye"></a>
            </div>
                <img src="${j.imgUrl}" alt="">
                    <div class="content">
                         <h3>${j.title}</h3> 
                         <div class="price"> <span>${j.price.replace(/\u00A3/g, '$')}</span></div>
                         
                    </div>
             <a href="
             " class="btn">Comprar </a>
        </div>
       
         `
     ).splice(0,34).join('')}`;
     content.innerHTML = view;
 })(); 
 
getBooksMain()
 

 
