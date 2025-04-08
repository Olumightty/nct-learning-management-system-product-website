import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '@/lib/constants'

const Features = () => {
  return (
    <section id='features' className='bg-(--greyish) px-20 py-20 grid grid-cols-3 gap-10'>
        {features.map((feature, index) => 
            <FeatureCard key={index} color={feature.color} heading={feature.featureName} icon={feature.icon}>
                {feature.description}
            </FeatureCard>
        )}
    </section>
  )
}

export default Features