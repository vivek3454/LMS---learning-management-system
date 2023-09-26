import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

const About = () => {
  return (
    <HomeLayout>
      <div className="pt-20 flex flex-col text-white">
        {/* creating the about page main section */}
        <div className="flex items-center flex-col lg:flex-row gap-5 mx-10">
          {/* out moto section */}
          <section className="w-full md:w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 text-center md:text-left font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their creativity, skills and knowledge to each
              other to empower and contribute in the growth and wellness of the
              mankind.
            </p>
          </section>

          {/* our moto image section */}
          <div className="w-full md:w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
              className="drop-shadow-2xl "
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        {/* top personalities quotes section */}
        <div className="carousel w-full md:w-1/2 m-auto my-16">
          {celebrities &&
            celebrities.map((celebrity) => (
              <CarouselSlide
                {...celebrity}
                key={celebrity.slideNumber}
                totalSlides={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default About;
