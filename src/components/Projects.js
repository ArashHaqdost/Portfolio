import React, {useState, useEffect} from 'react';

//impoet porjects  Data

import { projectsData } from '../data';

//import projectsNav data
import { projectsNav } from '../data'; 

//impoet component
import Project from './Project';

const Projects = ()=>{
    const [item , setItem] = useState({name: 'all'});
    const [porjects, setProjects]  = useState([]);
    const [active , setActive] = useState(0);

    useEffect(()=>{
        //get items base on item
        if(item.name === 'all'){
            setProjects(projectsData);
        }else{
            const newProjects = projectsData.filter((project)=>{
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    },[item]);
    
    const handleClick = (e, index)=>{
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index);
    }
    return(
    <section >
        <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row  justify-evenly items-center text-while'>
                {projectsNav.map((item,index)=>{
                    return(
                        <li onClick={
                            (e)=>{handleClick(e,index);}
                        } key={index}
                        className={`${active === index ? 'active' : ''} cursor-pointer captalize m-4`}
                        >{item.name}</li>
                    )
                })}
            </ul>
        </nav>
        {/* projects grid */}
        <section className='grid lg:grid-cols-3 gap-12 lg:gap-y-8 lg:gap-x-8'>
                {porjects.map((item)=>{
                    return <Project  item={item} key={item.id} />;
                })}
        </section>

    </section>)
}

export default Projects;