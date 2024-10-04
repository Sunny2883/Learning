import React from 'react';
import '../styles/Home.css'; // Import the CSS
import productsData from './productsData'; // Assume you have a products data file
import { useNavigate } from 'react-router-dom';
const Home = ({ addToCart }) => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleShopNowClick = () => {
        navigate('/products'); // Redirect to the ProductList page
    };
    return (
        <div className="home">
            <section className="banner">
                <h1>Welcome to Our Shopping Website!</h1>
                <p>Discover amazing products at unbeatable prices.</p>
                <button className="banner-button" onClick={handleShopNowClick}>Shop Now</button>
               
            </section>

            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {productsData.map((product) => (
                        <div className="product-item" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonials">
                <h2>Customer Testimonials</h2>
                <div className="testimonial-item">
                    <p>"Great products and fast shipping!"</p>
                    <cite>- Jane Doe</cite>
                </div>
                <div className="testimonial-item">
                    <p>"I love shopping here! The prices are amazing."</p>
                    <cite>- John Smith</cite>
                </div>
                <div className="testimonial-item">
                    <p>"Excellent customer service and a wide range of products."</p>
                    <cite>- Sarah Johnson</cite>
                </div>
            </section>

            <section className="blog">
                <h2>Latest Articles</h2>
                <div className="blog-post">
                    <h3>How to Choose the Right Products</h3>
                    <p>Finding the right products can be challenging. Here are some tips to help you make informed decisions...</p>
                </div>
                <div className="blog-post">
                    <h3>Top 10 Must-Have Items for Your Home</h3>
                    <p>Upgrade your living space with these essential items that combine functionality and style...</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
