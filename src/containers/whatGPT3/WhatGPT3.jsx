import React from 'react'
import './whatgpt3.css'
import { Feature } from '../../components'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3"> 
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempora et placeat iste facere exercitationem assumenda vitae magni rem aliquam?"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
      </div>
    </div>
  )
}

export default WhatGPT3