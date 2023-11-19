// import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";


const PopularMenu = () => {
    // Menu from Custom hook
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    // const [menu, setMenu] = useState([])
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)})
    // }, [])


    return (
        <section className="mb-12">
            <SectionTitle
                heading={'From our Menu'}
                subHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className=" flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;