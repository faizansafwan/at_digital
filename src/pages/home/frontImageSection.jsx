import frontImg from "../../assets/front-img.jpg";
import CustomButton from "../../components/customButton";

export default function FrontImageSection() {
  return (
    <div className="relative w-full">
      {/* The front image */}
      <img src={frontImg} alt="Front" className="w-full block" />

      {/* Gradient overlay */}
      <div className={` absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#1CBDDD] via-[#39b59c] to-[#4DCA79] text-white
          px-4 py-6 text-center sm:rounded-none lg:max-w-md lg:left-8 lg:right-auto lg:bottom-8 lg:rounded-md lg:text-left 
          lg:px-5 lg:block`} >
        <p className="mb-4 text-3xl font-bold max-w-lg mx-auto lg:mx-0">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <CustomButton>
          Get free consultation
        </CustomButton>
      </div>
    </div>
  );
}
