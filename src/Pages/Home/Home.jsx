import { useLoaderData } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import OurCollections from './OurCollections/OurCollections';

const Home = () => {
    const datas = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <OurCollections datas={datas}></OurCollections>
            <AboutUs></AboutUs>
            <Feature></Feature>
        </div>
    );
};


export default Home;