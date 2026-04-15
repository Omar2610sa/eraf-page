import Card from "./Card/Card";

const ServicesCards = ({ services }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {services?.features?.map((service) => (
                    <Card
                        key={service.id}
                        image={service.media}
                        title={service.title}
                    />


                ))
                }
            </div>
        </div>
    )
}

export default ServicesCards