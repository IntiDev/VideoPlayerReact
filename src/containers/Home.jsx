import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState';
// const API = 'https://raw.githubusercontent.com/IntiDev/VideoPlayerReact/master/initialState.json';
const Home = ({ myList, trends, originals }) => {
    return (
        <Fragment>
            <Search />

            {myList && myList.length > 0 &&
                <Categories title='Mi lista'>
                    <Carousel>
                    {myList && myList.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                    </Carousel>
                </Categories>
            }

            <Categories title='Favoritos'>
                <Carousel>
                    {originals && originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title='Tendencias'>
                <Carousel>
                    {trends && trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};
export default connect(mapStateToProps, null)(Home);// export default connect(props, actions)(Home);