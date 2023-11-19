import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle
                heading={'Check it out'}
                subHeading={'Featured Item'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center  bg-slate-500  bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20 2024</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi tempore eos commodi aspernatur. Vitae non vel rerum neque consequuntur unde perferendis nemo tempora voluptatum illum eos, facere velit consequatur? Delectus vel nisi veniam recusandae accusamus quasi amet. Reiciendis pariatur autem assumenda beatae in laudantium dicta impedit nesciunt. Repellat, tempora ratione.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;