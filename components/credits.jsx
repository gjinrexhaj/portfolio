import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600'>
                <div className='mb-4'>
                    <a>Email is the quickest way to get ahold of me, feel free to reach out with any inquiries!</a>
                    <br></br> <br></br>
                    This website was built using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Next.js</a> and 
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500"> Tailwind CSS.</a>
                </div>
            </div>
        </div>
    )
}

export default Credits