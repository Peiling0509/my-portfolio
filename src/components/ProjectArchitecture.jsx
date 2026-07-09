function ProjectArchitecture(
    {
        architecture
    }
) {

    return (

        <div className="architecture">


            <h2>
                System Architecture
            </h2>



            <div className="architecture-list">


                {
                    architecture.map(

                        (item) => (

                            <div
                                className="architecture-item"
                                key={item}
                            >

                                {item}

                            </div>

                        )

                    )
                }


            </div>


        </div>


    )


}


export default ProjectArchitecture;