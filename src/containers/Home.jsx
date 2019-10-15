import React, {Fragment} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState';
const API = 'https://raw.githubusercontent.com/IntiDev/VideoPlayerReact/master/initialState.json';
const Home = () => {
    const initialState = useInitialState(API);
    return (
        <Fragment>
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
        </Fragment>
    )
};

export default Home;