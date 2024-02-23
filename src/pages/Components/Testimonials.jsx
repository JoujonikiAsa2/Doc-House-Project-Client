import SectionTitle from "../../sharedComponents/SectionTitle/SectionTitle";
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../assets/Ellipse 2.png'
import image2 from '../../assets/Ellipse 2 (1).png'
import quote from '../../assets/Group 17.png'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {

    const settings = {
        infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <div className="lg:mx-[10vw] mx-[4vw] 2xl:mx-[20vw] space-y-4 lg:mt-20 p-4">
            <SectionTitle heading="What Our Patients Says" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></SectionTitle>
            <Slider {...settings} className="md:hidden lg:flex hidden">
                {
                    [1, 2, 3, 4, 5, 6].slice(0, 4).map(card => <div className="card border p-8 space-y-4 lg:w-[30vw] w-[80vw] md:w-[35vw]">
                        <div className="flex justify-between">
                            <div className="flex lg:flex-row md:flex-row flex-col items-center gap-4">
                                <img src={image1} alt="" className="w-16 h-16" />
                                <div>
                                    <h4>Awlad Hossain</h4>
                                    <small>Product Designer</small>
                                </div>
                            </div>
                            <div>
                                < img src={quote} className="text-6xl" />
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam eum assumenda tempore quae accusantium voluptatem, mollitia aliquam ad sed impedit?</p>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Testimonials;