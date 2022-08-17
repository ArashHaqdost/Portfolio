import React from "react";
//impoet components
import TestimonialSlider from "./TestimonilsSlider";


const Testimonials = ()=>{
    return (<section id="testimonails" className="section bg-secondary">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title before:content-testimonials relative before:absolute before:opcity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
                    What other pepole say
                </h2>
                <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.
                </p>
            </div>
            <TestimonialSlider />
        </div>
    </section>)

}

export default Testimonials;