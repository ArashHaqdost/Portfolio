import React from 'react';


const Project = ({item})=>{

    return <section key={item.id} className='flex flex-col items-center text-cener'>
        <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt='projects' />
        </div>
        <p className='captalize text-accent text-sm mb-3'>{item.category}</p>
        <h3 className='font-semibold  text-2xl '>{item.name}</h3>
    </section>
}

export default Project;