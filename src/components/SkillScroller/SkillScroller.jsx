import React, { useEffect, useState } from 'react';
import './SkillScroller.css';

export default function Scroller() {
    const [skills, setSkill] = useState([]);
    useEffect(() => {
        fetch('./skillScroller.json')
            .then(skillScroller => {
                if (!skillScroller.ok) {
                    throw new console.error("Failed to fetch SkillSCroller")
                }
                return skillScroller.json();
            }).then(data => {setSkill(data.scroller)})
            .catch(error => {
                console.log("there is a problem: ", error);
            })
    }, []);

    const totalItems = skills.length;

    // set the total no of items in css
    useEffect(() => {
        document.documentElement.style.setProperty('--total-items', totalItems)
    }, [totalItems]);

    return (
        <div className='skill-scroller'>
            {
                skills.map((skill_name, index) => (
                    <div
                        key={index}
                        className='skill-item'
                        style={{
                            animationDelay: `calc(var(--animation-duration) / var(--total-items) * (var(--total-items) - ${index + 1}) * -1)`,
                        }}
                    >
                        <span id={`Skill ${index + 1}`}>{skill_name}</span>
                    </div>
                ))
            }
        </div>
    );
}


const IconScroller = () => {
    const skills = [


    ]

    return (
        <div>
            <div class="flex flex-wrap items-center justify-center max-w-5xl mx-auto overflow-x-auto scale-75 gap-y-8 gap-x-14">
                <a href="/platforms/html-contact-form"><img title="HTML" alt="HTML" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/html.7c2ef4a7.svg" data-darkreader-inline-color="" /> </a>
                <a href="/platforms/javascript-contact-form"><img title="Javascript" alt="Javascript" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/javascript.2369702c.svg" data-darkreader-inline-color="" /> </a>
                <a href="/platforms/bootstrap-contact-form"><img title="Bootstrap" alt="Bootstrap" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/bootstrap.f6377d14.svg" data-darkreader-inline-color="" /> </a>
                <a href="/platforms/tailwindcss-contact-form"><img title="Tailwind CSS" alt="Tailwind CSS" loading="lazy" width="54" height="33" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/tailwindcss.cc59a337.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/react-contact-form"><img title="React" alt="React" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/react.584ee5c3.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/nextjs-contact-form"><img title="Next.js" alt="Next.js" loading="lazy" width="105" height="65" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/nextjs.8e03c09e.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/astro-contact-form"><img title="Astro" alt="Astro" loading="lazy" width="85" height="107" decoding="async" data-nimg="1" class="w-8" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/astro.bc0209d3.svg" data-darkreader-inline-color="" /> </a>
                <a href="/platforms/gatsby-contact-form"><img title="Gatsby" alt="Gatsby" loading="lazy" width="151" height="40" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/gatsby.3cd98233.svg" data-darkreader-inline-color="" /> </a>
                <a href="/platforms/vue-contact-form"><img title="Vue.js" alt="Vue.js" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/vue.41dac46b.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/nuxt-contact-form"><img title="Nuxt.js" alt="Nuxt.js" loading="lazy" width="159" height="28" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/nuxtjs.ff117e92.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/framer-contact-form"><img title="Framer" alt="Framer" loading="lazy" width="40" height="50" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/framer.9d70d7fd.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/alpinejs-contact-form"><img title="Alpine.js" alt="Alpine.js" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/alpine.c7f73696.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/hugo-contact-form"><img title="Hugo" alt="Hugo" loading="lazy" width="154" height="41" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/hugo.734c91ed.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/svelte-contact-form"><img title="Svelte" alt="Svelte" loading="lazy" width="50" height="60" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/svelte.8bbfd60a.svg" data-darkreader-inline-color="" /></a>
                <a href="/platforms/webflow-contact-form"><img title="Webflow" alt="Webflow" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style="color: transparent; --darkreader-inline-color: transparent;" src="/_next/static/media/webflow.4cae496c.svg" data-darkreader-inline-color="" /></a></div>
        </div>
    )
}