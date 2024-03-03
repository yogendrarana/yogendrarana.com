"use client";

const BackToTopButton = () => {
    return (
        <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="
                h-[3.5rem] w-[3.5rem] border rounded-full
                grid place-items-center cursor-pointer
                shadow-lg bg-white
                dark:bg-white dark:text-black
            "
        >
            <i className="fas fa-arrow-up"> </i>
        </button>
    )
}

export default BackToTopButton;