import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '@/lib/constants'
import Animation from './Animation'

const Features = () => {
  return (
    <>
    <Animation/>
    <section id='features' className='bg-(--greyish) px-10 lg:px-20 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {features.map((feature, index) => 
            <FeatureCard key={index} color={feature.color} heading={feature.featureName} icon={feature.icon}>
                {feature.description}
            </FeatureCard>
        )}
    </section>
    </>
  )
}

export default Features