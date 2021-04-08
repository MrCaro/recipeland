import React, { useState } from 'react'

import CategoriesData from '../data/Categories'
import CtaIcons from '../components/CtaIcons'
import Icons from '../img/icons/icons'

const Categories = () => {
    const [category, setCategory] = useState('All');
    const [active, setActive] = useState(0);

    const toggle = (category_name, index) => {
        setCategory(category_name);
        setActive(index);
    }

    return (
        <>
            <div className="carousel-category-wrapper">
                {CategoriesData.map((cat, i) => (
                    <div 
                        key={i} 
                        className={`capsule ${active == i ? 'capsule-active' : ''}`}
                        onClick={() => toggle(cat.name, i)}
                    >
                        <img 
                            src={cat.icon} 
                            alt={cat.name}
                        />
                        <p>{cat.name}</p>
                    </div>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="flex flex-row items-center">
                    <h2 className="mr-12">
                        {category}
                    </h2>
                    <img className="m-0" src={Icons[2].icon} alt=""/>
                </div>
                <div className="flex flex-row items-center lg:justify-end justify-between">
                    <p className="mr-12">view all</p>
                    <CtaIcons 
                        class="cta-icon-primary"
                        destination="/"
                        src={Icons[1].icon}
                        alt="view all"
                    />
                </div>
            </div>
        </>
    )
}

export default Categories
