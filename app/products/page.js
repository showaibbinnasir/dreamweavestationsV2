import React from 'react'
import AffiliatedProgram from '../components/AffiliatedProgram/AffiliatedProgram'
import OurProducts from '../components/OurProducts/OurProducts'

export default function Products() {
    return (
        <div>
            <div>
                <div>
                    <OurProducts></OurProducts>
                </div>
            </div>
            <div>
                <AffiliatedProgram></AffiliatedProgram>
            </div>
        </div>
    )
}
