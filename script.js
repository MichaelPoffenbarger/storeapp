$(document).ready(function() {
    const products = [
        {
            name: "Sleek Wireless Headphones",
            description: "Experience crystal-clear audio with our premium wireless headphones.",
            price: 199.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/headphones-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Powerful Gaming Laptop",
            description: "Unleash your gaming potential with our high-performance laptop.",
            price: 999.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/laptop-gaming-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Smart Fitness Watch",
            description: "Track your fitness goals with our advanced smartwatch.",
            price: 149.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/watch-fitness-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "High-Speed Router",
            description: "Experience fast and reliable internet connectivity with our high-speed router.",
            price: 79.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/router-speed-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Wireless Charging Pad",
            description: "Conveniently charge your devices wirelessly with our sleek charging pad.",
            price: 29.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/pad-charging-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Portable Power Bank",
            description: "Stay powered on-the-go with our compact power bank.",
            price: 49.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/bank-power-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Noise-Cancelling Earbuds",
            description: "Immerse yourself in pure sound with our noise-cancelling earbuds.",
            price: 99.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/earbuds-noise-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Gaming Mouse",
            description: "Elevate your gaming experience with our precision gaming mouse.",
            price: 69.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/mouse-gaming-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "4K Smart TV",
            description: "Experience cinematic quality at home with our 4K smart TV.",
            price: 499.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/tv-smart-4k-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "High-Tech Smartphone",
            description: "Stay connected with our cutting-edge smartphone technology.",
            price: 599.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/phone-tech-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Advanced DSLR Camera",
            description: "Capture life's moments with our professional-grade DSLR camera.",
            price: 899.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/camera-dslr-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Premium Soundbar",
            description: "Enhance your home theater experience with our premium soundbar.",
            price: 299.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/soundbar-premium-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Gaming Keyboard",
            description: "Dominate your opponents with our customizable gaming keyboard.",
            price: 129.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/keyboard-gaming-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Virtual Reality Headset",
            description: "Step into new worlds with our immersive virtual reality headset.",
            price: 399.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/headset-vr-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Smart Speaker",
            description: "Control your home with our intelligent smart speaker.",
            price: 99.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/speaker-smart-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "High-Speed SSD",
            description: "Boost your computer's performance with our high-speed SSD.",
            price: 149.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/ssd-speed-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Wireless Speaker",
            description: "Enjoy music anywhere with our portable wireless speaker.",
            price: 79.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/speaker-wireless-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Gaming Chair",
            description: "Immerse yourself in comfort with our ergonomic gaming chair.",
            price: 249.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/chair-gaming-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Smart Home Security System",
            description: "Protect your home with our advanced smart security system.",
            price: 299.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/system-security-smart-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "4K Action Camera",
            description: "Capture life's adventures with our rugged 4K action camera.",
            price: 199.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/camera-action-4k-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Smart Thermostat",
            description: "Control your home's temperature with our smart thermostat.",
            price: 129.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/thermostat-smart-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "High-End Graphics Card",
            description: "Unleash your computer's graphics potential with our high-end graphics card.",
            price: 499.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/card-graphics-end-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Portable SSD",
            description: "Store and transfer data quickly with our portable SSD.",
            price: 99.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/ssd-portable-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        },
        {
            name: "Gaming Monitor",
            description: "Experience fast and smooth gaming with our high-performance monitor.",
            price: 399.99,
            image: "https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/monitor-gaming-2XWPB1a0ZzCVBvvxbxwGnRLtQGwLLt.jpg"
        }
    ];

    const itemsPerPage = 10; // Number of items per page
    let currentPage = 1; // Current page number
    let filteredProducts = products; // Array to hold filtered products

    // Function to display products
    function displayProducts() {
        const start = (currentPage - 1) * itemsPerPage; // Calculate start index
        const end = start + itemsPerPage; // Calculate end index
        const paginatedProducts = filteredProducts.slice(start, end); // Get products for the current page

        $('#product-container').empty(); // Clear previous products

        paginatedProducts.forEach((product, index) => { // Loop through paginated products
            const productCard = $('<div>').addClass('product-card');
            const productImage = $('<div>').addClass('product-image').css('background-image', `url(${product.image})`);
            const productOverlay = $('<div>').addClass('product-overlay');
            const viewDetailsButton = $('<a>').addClass('view-details').text('View Details').attr('href', `#product-${start + index}`); // Adjusted index for correct href
            const productInfo = $('<div>').addClass('product-info');
            const productName = $('<h2>').addClass('product-name').text(product.name);
            const productDescription = $('<p>').addClass('product-description').text(product.description);
            const productPrice = $('<p>').addClass('product-price').text(`$${product.price.toFixed(2)}`);

            productOverlay.append(viewDetailsButton);
            productImage.append(productOverlay);
            productInfo.append(productName, productDescription, productPrice);
            productCard.append(productImage, productInfo);

            $('#product-container').append(productCard); // Append product card to container
        });
    }

    // Function to update pagination
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // Calculate total pages
        let pagination = '';

        for (let i = 1; i <= totalPages; i++) {
            pagination += `<button class="pagination-button" data-page="${i}">${i}</button>`; // Create pagination buttons with data attributes
        }

        $('#pagination').html(pagination); // Update pagination HTML

        // Attach click event to pagination buttons
        $('.pagination-button').on('click', function() {
            currentPage = $(this).data('page'); // Get the page number from the button's data attribute
            displayProducts(); // Refresh the displayed products
        });
    }

    // Function to filter products based on search input
    function searchProducts() {
        const searchQuery = $('#search-input').val().toLowerCase(); // Get the search query
        filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchQuery) || // Search by name
                   product.description.toLowerCase().includes(searchQuery); // Search by description
        });
        currentPage = 1; // Reset to the first page
        displayProducts(); // Display filtered products
        updatePagination(); // Update pagination based on filtered products
    }

    // Event listener for search input
    $('#search-input').on('input', searchProducts); // Call searchProducts on input change

    displayProducts(); // Initial display of products
    updatePagination(); // Initial update of pagination
});