import React from 'react'
import { Briefcase, Code, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className='py-24 px-24 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Java and Web Developer</h3>
            <p  className='text-muted-foreground'>
              With over 3 years of experience in Java and web development, I have honed my skills in creating robust applications and dynamic websites. My journey has been fueled by a passion for coding and a commitment to continuous learning.
            </p>
            <p className='text-muted-foreground'>
              I'm passionate about creating elegant solutions that not only meet client needs but also enhance user experience. My expertise includes Java, Spring Boot, React, and various web technologies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                Get in Touch
              </a>
              <a href="#contact" className=' px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                Download CV
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UI/UX Designs</h4>
                  <p className='text-muted-foreground'>Design intuitive user interfaces and seamless user experiences.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Open Source</h4>
                  <p className='text-muted-foreground'>Collaborated with web developer on open source projects.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection