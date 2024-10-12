"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Developing and maintaining responsive websites, handling deployment, hosting, and ensuring performance optimization.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing interfaces to enhance user experience, from concept to final implementation.',
    href: ""
  },
  {
    num: '03',
    title: 'Software Development',
    description: 'Creating scalable and efficient software solutions tailored to meet specific business requirements.',
    href: ""
  },
  {
    num: '04',
    title: 'Search Engine Optimization',
    description: 'Improving website visibility and search rankings through effective SEO strategies.',
    href: ""
  }
];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                { /* top */ }
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                { /* title */ }
                <h2>{service.title}</h2>
                { /* description */ }
                <p>{service.description}</p>
                { /* border */ }
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
    
  )
}

export default Services