import Hero from './Hero';

const AboutView = () => {
    return (
        <>
            <Hero text="About Us" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at venenatis mi. Nullam bibendum nibh non ipsum commodo, rhoncus fermentum orci pellentesque.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutView;