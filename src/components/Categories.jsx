import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({children}) => ( //{} para llamar directamente en la asignación si el uso de props
    <div className='categories'>
        <h3 class="categories__title">Mi lista</h3>
        {children}
    </div>
);

export default Categories;
