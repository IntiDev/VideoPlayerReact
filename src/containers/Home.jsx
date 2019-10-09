import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState';
const API = 'https://raw.githubusercontent.com/IntiDev/VideoPlayerReact/master/initialState.json';
const Home = () => {
    const initialState = useInitialState(API);
    return (
        <div className='App'>
            <Header />
            <Search />

            {initialState.mylist && initialState.mylist.length > 0 &&
                <Categories title='Mi lista'>
                    <Carousel>
                    {initialState.mylist && initialState.mylist.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                    </Carousel>
                </Categories>
            }

            <Categories title='Favoritos'>
                <Carousel>
                    {initialState.originals && initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title='Tendencias'>
                <Carousel>
                    {initialState.trends && initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer/>
        </div>
    )
};

export default Home;