import React from "react";
import ImageGallery from 'react-image-gallery';

function GalleryPage() {

    const images = [
        {
            original: "./images/portrait-alexandre-steinhauslin.jpg",
            thumbnail: "./images/portrait-alexandre-steinhauslin.jpg",
            description: 'This is me',
            originalAlt: `Photo of me`,
            originalHeight: '500px'
        },
        {
            original: "./images/programming-joke-new-error.jpg",
            thumbnail: "./images/programming-joke-new-error.jpg",
            description: 'I always love a good joke',
            originalAlt: `Programming Joke`,
            originalHeight: '500px'
        },
        {
            original: "./images/florence-city-duomo-river.jpg",
            thumbnail: "./images/florence-city-duomo-river.jpg",
            description: 'I was born in Florence',
            originalAlt: `Florence Italy`,
            originalHeight: '500px'
        },
        {
            original: "./images/statue-blind-lady-justice-themis.jpg",
            thumbnail: "./images/statue-blind-lady-justice-themis.jpg",
            description: 'My first degree was in law',
            originalAlt: "Lady Justice Themis",
            originalHeight: '500px'
        },
        {
            original: "./images/oregon-state-university.png",
            thumbnail: "./images/oregon-state-university.png",
            description: 'I am a student at Oregon State',
            originalAlt: "Oregon State Logo",
            originalHeight: '500px'
        },
        {
            original: "./images/code-image-ide.jpg",
            thumbnail: "./images/code-image-ide.jpg",
            description: 'I adore programming',
            originalAlt: "Monitor With Code",
            originalHeight: '500px'
        },
        {
            original: "./images/workspace-tinkering-electronics.jpg",
            thumbnail: "./images/workspace-tinkering-electronics.jpg",
            description: 'and tinkering with electronics',
            originalAlt: "Tinkering with Electronics",
            originalHeight: '500px'
        },
        {
            original: "./images/couple-cooking-kitchen-together.jpg",
            thumbnail: "./images/couple-cooking-kitchen-together.jpg",
            description: 'I really enjoy cooking with my wife',
            originalAlt: "A Couple Cooking Together",
            originalHeight: '500px'
        },
        {
            original: "./images/toddler-walking-outside.jpg",
            thumbnail: "./images/toddler-walking-outside.jpg",
            description: 'I have a 14 month old daughter who is my life',
            originalAlt: "A toddler Walking Outside",
            originalHeight: '500px'
        },
        {
            original: "./images/code-joke-cat-god.jpg",
            thumbnail: "./images/code-joke-cat-god.jpg",
            description: '...always love a good joke',
            originalAlt: "Another Programming Joke",
            originalHeight: '500px'
        }
    ]

    return (
        <>
            <h2>Gallery</h2>
            <p>
                Here is a little about me
            </p>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    )
}

export default GalleryPage