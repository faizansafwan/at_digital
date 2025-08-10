import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import FrontImageSection from "./frontImageSection";
import webDev from "../../assets/web-dev.png";
import digitalStrategy from "../../assets/digital-strategy.png";
import CustomButton from "../../components/customButton";
import { useState } from "react";


export default function Home() {

    // State to track which FAQ item is currently open (expanded).
    // null means no FAQ is open.
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle function to open/close an FAQ item by index.
    // If clicked question is already open, close it (set null).
    // Otherwise, open the clicked question.
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FAQ data: array of question/answer objects
    const faqs = [
        {
          question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
          answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
          answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
          answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
        },
      ];

  return (
    <div className="min-h-screen flex flex-col">
        
        {/* Header component at the top */}
        <Header />

        {/* Hero/front image section */}
        <FrontImageSection />

        {/* Section: Web & Mobile App Development */}
        <section className="max-w-7xl mx-auto my-12 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
                {/* Image on left (shrinks to fit) */}
                <div className="flex-shrink-0">
                    <img src={webDev} alt="Web & Mobile App Development" className="w-full max-w-sm rounded-md" />
                </div>

                {/* Content on right */}
                <div className="flex flex-col">
                    <h2 className="text-primary text-3xl font-bold mb-4">
                        Web & Mobile App Development
                    </h2>
                    <p className="text-body-text mb-6 max-w-lg">
                        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which 
                        tailor content and engagement methods to respond to different intents shown by your potential 
                        customers who interact with your business online.
                    </p>

                    {/* Reusable button component */}
                    <CustomButton className="uppercase max-w-max text-white">LEARN MORE</CustomButton>
                </div>
            </div>
        </section>

        {/* Section: Digital Strategy Consulting */}
        <section className="max-w-7xl mx-auto my-12 px-4">
            {/* Flex container with reversed column order on mobile to show image first */}
            <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-8">

                {/* Content */}
                <div className="flex flex-col">
                    <h2 className="text-primary text-3xl font-bold mb-4">
                        Digital Strategy Consulting
                    </h2>
                    <p className="text-body-text mb-6 max-w-lg">
                        Your digital strategy should complement the overall marketing strategy of the company. In online marketing,
                     each component will never work in isolation and every business needs a different mix. We provide a clear 
                     concept and strategic overview to find the most efficient model for your business.
                    </p>

                    {/* Reusable button component */}
                    <CustomButton className="uppercase max-w-max text-white">LEARN MORE</CustomButton>
                </div>


                {/* Image */}
                <div className="flex-shrink-0">
                    <img src={digitalStrategy} alt="Web & Mobile App Development" className="w-full max-w-sm rounded-md" />
                </div>
            </div>
        </section>

          {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 my-12">

             {/* Section heading */}
            <h2 className="text-primary text-3xl text-center font-bold mb-8">Frequently asked questions</h2>

             {/* List of FAQ items with spacing */}
            <div className="space-y-4"> {faqs.map(({ question, answer }, idx) => {
                const isOpen = openIndex === idx;
                return (
                    <div key={idx} className="bg-[#FAF8FF] rounded-sm overflow-hidden" >

                        {/* Question button */}
                        <button onClick={() => toggle(idx)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left text-primary font-semibold"
                            aria-expanded={isOpen}>
                            
                            {/* Question text: color changes if open */}
                            <span className={isOpen ? "text-primary" : "text-body-text"}>{question}</span>
                            
                             {/* Toggle sign: + when closed, − when open */}
                            <span className="text-2xl select-none">{isOpen ? "−" : "+"}</span>
                        </button>

                        <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`} style={{
                            maxHeight: isOpen ? "500px" : "0px",  color: "#6F6C90", }} >
                            <p className="pb-4">{answer}</p>
                        </div>
                    </div>
                );
                })}
            </div>
        </section>
      
        {/* Footer component at the bottom */}
        <Footer />
    </div>
  );
}
