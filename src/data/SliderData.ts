import House_1 from '../assets/images/house-img-1.jpg';
import House_2 from '../assets/images/house-img-2.jpg';
import House_3 from '../assets/images/house-img-3.jpg';
import House_4 from '../assets/images/house-img-4.jpg';



interface SliderProps {
    title: string;
    price: string;
    path: string;
    label: string;
    image: ImageData | string;
    alt: string;
}

export const SliderData: SliderProps[] = [
    {
        title: 'Luxury Villa in Bali, Indonésia',
        price: '$4,280,000',
        path: '/homes',
        label: 'View Home',
        image: House_1,
        alt: 'House'
    },
    {
        title: 'House in San Jose, Costa Rica',
        price: '$2,860,000',
        path: '/homes',
        label: 'View Home',
        image: House_2,
        alt: 'House'
    },
    {
        title: 'House in Calabasas, California',
        price: '$8,420,000',
        path: '/homes',
        label: 'View Home',
        image: House_3,
        alt: 'House'
    },
    {
        title: 'House in Houston, Texas',
        price: '$6,660,000',
        path: '/homes',
        label: 'View Home',
        image: House_4,
        alt: 'House'
    }
];