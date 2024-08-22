import { BiSolidDrink } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaBottleWater } from "react-icons/fa6";
import { GiCakeSlice, GiCoffeeCup, GiSodaCan } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { TbBrandCakephp, TbMilkshake } from "react-icons/tb";

export const categories = [
    {
        id: 1,
        name: 'Hot Beverages',
        icon: <GiCoffeeCup />
    },
    {
        id: 2,
        name: 'Cold Beverages',
        icon: <RiDrinks2Fill />
    },
    {
        id: 3,
        name: 'Fresh Juice',
        icon: <BiSolidDrink />

    },
    // {
    //   id: 4,
    //   name: 'smoothie',
    //   icon: <CiCoffeeCup />
    // },
    {
        id: 5,
        name: 'milkshake',
        icon: <TbMilkshake />

    },
    {
        id: 6,
        name: 'Waffle',
        icon: <TbBrandCakephp/>

    },
    {
        id: 7,
        name: 'Desserts',
        icon: <GiCakeSlice />

    },
    {
        id: 8,
        name: 'special coffee',
        icon: <SiBuymeacoffee />

    },
    {
        id: 9,
        name: 'Soda',
        icon: <GiSodaCan/>

    },
    {
        id: 10,
        name: 'Soft drinks',
        icon: <FaBottleWater />

    },
    {
        id: 11,
        name: 'Extra',
        icon: <BsPlusSquareFill />

    },]