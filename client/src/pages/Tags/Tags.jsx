import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDocs: "For questions regarding programming in ECMAScript (JavaScript) and its various dialects/implementations "
    },{
        id: 2,
        tagName: "python",
        tagDocs: "Python is a multi-paradigm, dynamically typed multipurpose programming language developed"
    },{
        id: 3,
        tagName: "c#",
        tagDocs: "c# (pronounced 'see sharp') is a high lavel, statically typed, multi-paradigm programming language developed by Microsoft"
    },{
        id: 4,
        tagName: "java",
        tagDocs: "java is a high-lavel object oriented programming language. Use this tag when you're having problems using or understand the language itself."
    },{
        id: 5,
        tagName: "php",
        tagDocs: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development."
    },{
        id: 6,
        tagName: "html",
        tagDocs: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in web browser."
    },{
        id: 7,
        tagName: "android",
        tagDocs: "Android is Google mobile operating system, used for programming or developing degital devices (Smartphones, Tablet, Automobiles, TVs, Wear, Glass, IoT)."
    },{
        id: 8,
        tagName: "css",
        tagDocs: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"
    },{
        id: 9,
        tagName: "Reactjs",
        tagDocs: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDocs: "Node.js is an event-based, non-blocking, asynchronous I/0 runtime that uses Google's V8 JavaScript engine and libuv library."
    }]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p  className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags make it easier for others to find and answer your question.</p>
            <div className="tag-list-container">
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id} />
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Tags