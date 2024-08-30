
import React, { useState } from 'react';
import './App.css';
import Cards from './components/cards';
import Popup from './components/Popup';

const products = [{
  key: 1,
  name: "Smartphone",
  category: "Electronics",
  price: 699.99,
  image: "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg",
},
{
  key: 2,
  name: "Laptop",
  category: "Electronics",
  price: 1199.99,
  image: "https://acom.pk/cdn/shop/articles/laptop_or_macbook.jpg?v=1670917158",
},
{
  key: 3,
  name: "Coffee Maker",
  category: "Appliances",
  price: 89.99,
  image: "https://plus.unsplash.com/premium_photo-1715593513351-b3ed7088a845?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  key: 4,
  name: "Desk Chair",
  category: "Furniture",
  price: 179.99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShrIJOdb79A5NxyJwabVemqmbNE8KZKeAVA&s",
},{
  key: 5,
  name: "Laptop",
  category: "Electronics",
  price: 1199.99,
  image: "https://www.cultbeauty.co.uk/images?url=https://static.thcdn.com/widgets/257-en/47/original-Coming_Soon_Old_Homepage_ElizabethArden%5B1%5D-145947.jpg&format=webp&auto=avif&width=342&height=456&fit=crop",
},{
  key: 6,
  name: "Laptop",
  category: "Electronics",
  price: 1199.99,
  image: "https://images.unsplash.com/photo-1675317132583-75301c0d0287?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpciUyMHBvZHN8ZW58MHx8MHx8fDA%3D",
},{
  key: 7,
  name: "Laptop",
  category: "Electronics",
  price: 1199.99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
},{
  key: 8,
  name: "Laptop",
  category: "Electronics",
  price: 1199.99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
},]

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleCardClick = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    <div>
      <h1 className='min h-1 text-3xl underline italic'>My Gallery.</h1>
    </div>
      <div className="container px-5 py-24 mx-auto  ">
        <div className="flex flex-wrap -m-4 ">
          {products.map((product) => (
            <Cards
              key={product.key}
              image={product.image}
              text={product.name}
              category={product.category}
              onPress={() => handleCardClick(product.image)}
            />
          ))}
        </div>
      </div>
      <Popup isOpen={isOpen} onClose={handleClose} image={selectedImage} />
    </>
  );
}

export default App;