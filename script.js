let currentPage = 1; // Track the current page
const productsPerPage = 10; // Number of products per page

const populateStore = () => {
    // Create 10 test products
    const products = [
        { id: 1, name: 'Product 1', price: 9.99, description: 'This is product 1' },
        { id: 2, name: 'Product 2', price: 19.99, description: 'This is product 2' },
        { id: 3, name: 'Product 3', price: 29.99, description: 'This is product 3' },
        { id: 4, name: 'Product 4', price: 39.99, description: 'This is product 4' },
        { id: 5, name: 'Product 5', price: 49.99, description: 'This is product 5' },
        { id: 6, name: 'Product 6', price: 59.99, description: 'This is product 6' },
        { id: 7, name: 'Product 7', price: 69.99, description: 'This is product 7' },
        { id: 8, name: 'Product 8', price: 79.99, description: 'This is product 8' },
        { id: 9, name: 'Product 9', price: 89.99, description: 'This is product 9' },
        { id: 10, name: 'Product 10', price: 99.99, description: 'This is product 10' },
        { id: 11, name: 'Product 11', price: 109.99, description: 'This is product 11' },
        { id: 12, name: 'Product 12', price: 119.99, description: 'This is product 12' },
        { id: 13, name: 'Product 13', price: 129.99, description: 'This is product 13' },
        { id: 14, name: 'Product 14', price: 139.99, description: 'This is product 14' },
        { id: 15, name: 'Product 15', price: 149.99, description: 'This is product 15' },
        { id: 16, name: 'Product 16', price: 159.99, description: 'This is product 16' },
        { id: 17, name: 'Product 17', price: 169.99, description: 'This is product 17' },
        { id: 18, name: 'Product 18', price: 179.99, description: 'This is product 18' },
        { id: 19, name: 'Product 19', price: 189.99, description: 'This is product 19' },
        { id: 20, name: 'Product 20', price: 199.99, description: 'This is product 20' }
    ];

    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    const productsSection = document.getElementById('products');
    productsSection.innerHTML = ''; // Clear previous products
    productsToDisplay.forEach(product => {
        const productHTML = `
        
            <div class="card text-center" style="border: 1px solid #000000; margin: 10px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: #000;">
                <h5 class="card-title" style="color: #fff; font-weight: bold;">${product.name}</h5>
                <p class="card-text" style="color: #fff;">${product.description}</p>
                <p class="card-text" style="color: #fff; font-weight: bold;">Price: $${product.price}</p>
            </div>
            
        `;
        productsSection.innerHTML += productHTML;
    });

    // Update pagination buttons
    updatePaginationButtons(totalPages);
}

const updatePaginationButtons = (totalPages) => {
    const paginationSection = document.getElementById('pagination');
    paginationSection.innerHTML = `
        <button onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
        <span>Page ${currentPage} of ${totalPages}</span>
        <button onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
    `;
}

const changePage = (direction) => {
    currentPage += direction;
    populateStore();
}

populateStore();




