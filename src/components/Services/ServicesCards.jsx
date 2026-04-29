import { memo } from "react";
import Card from "./Card/Card";

const ServicesCards = ({ services }) => {
    return (
        <div>
            <div data-aos="zoom-in-up" className="grid md:grid-cols-2 gap-10 mt-10">
                {services?.features?.map((service) => (
                    <Card
                        key={service.id}
                        image={service.media}
                        title={service.title}
                        id={service.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default memo(ServicesCards)
