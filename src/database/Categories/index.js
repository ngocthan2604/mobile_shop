import { faMedal, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Images } from '~/assets/images';

const Categories = [
    {
        name: 'Computer',
        to: '/tablets',
        image: Images.category1,
    },
    {
        name: 'Mobile',
        to: '/mobile',
        image: Images.category2,
    },
    {
        name: 'Drones & Cameras',
        to: '/wearable',
        image: Images.category3,
    },
    {
        name: 'Sale',
        to: '/sale',
        image: false,
        Icon: <FontAwesomeIcon icon={faTags} />,
    },
    {
        name: 'Tablets',
        to: '/tablets',
        image: Images.category5,
    },
    {
        name: 'Best Sellers',
        to: '/sale',
        image: false,
        Icon: <FontAwesomeIcon icon={faMedal} />,
    },
    {
        name: 'TV & Home Cinema',
        to: '/tv',
        image: Images.category7,
    },
    {
        name: 'Wearable Tech',
        to: '/wearable',
        image: Images.category8,
    },
    {
        name: 'Speakers',
        to: '/audio',
        image: Images.category9,
    },
    {
        name: 'Headphone',
        to: '/audio',
        image: Images.category10,
    },
];

export default Categories;
