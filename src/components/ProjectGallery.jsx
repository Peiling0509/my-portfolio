function ProjectGallery(
    {
        images
    }
) {

    return (

        <section>

            <h2>
                Project Gallery
            </h2>

            <div className="gallery">

                {
                    images.map(

                        (image) => (

                            <img

                                key={image}

                                src={image}

                                className="gallery-image"

                            />

                        )

                    )

                }

            </div>

        </section>

    )

}


export default ProjectGallery;