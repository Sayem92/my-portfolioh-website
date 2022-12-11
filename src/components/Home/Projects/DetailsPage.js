import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const DetailsPage = () => {
    const { projectId } = useContext(AuthContext);
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const mainData = data?.filter(singleData => singleData.id === projectId)
                setDetails(mainData[0])
                setLoading(false)
            })
    }, [projectId])


    if (loading) {
        return <div className='text-yellow-400 flex justify-center text-3xl'>Loading...</div>
    }

    if (details === undefined) {
        return navigate('/')
    }

    return (
        <div>
            <section className="py-6 bg-gray-800 md:mx-28">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-2 ">

                        <img className="object-cover w-full  rounded-lg bg-gray-500 " src={details?.img1} alt='' />


                        <img className="object-cover w-full rounded-lg bg-gray-500" src={details?.img2} alt='' />

                        <img className="object-cover w-full rounded-lg bg-gray-500" src={details?.img3} alt='' />

                        <img className="object-cover w-full rounded-lg bg-gray-500" src={details?.img4} alt='' />

                    </div>

                    <h1 className="my-8 text-3xl font-semibold  text-green-400">{details?.name}</h1>


                    <p className="mt-2 capitalize text-gray-400">✅ {details?.d1}</p>
                    <p className="mt-2 capitalize text-gray-400">✅ {details?.d2}</p>
                    <p className="mt-2 capitalize text-gray-400">✅ {details?.d3}</p>
                    <p className="mt-2 capitalize text-gray-400">✅ {details?.d4}</p>
                    <p className="mt-2 capitalize text-gray-400">✅ Used Technology: {details?.d5}</p>



                    <div className="flex mt-7 gap-4">
                        <a href={details?.github}>
                            <button className='btn btn-success text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>Github</button>
                        </a>
                        <a href={details?.liveLink}>
                            <button className='btn btn-success text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>Live Demo</button>
                        </a>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default DetailsPage;