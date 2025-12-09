import React from "react";

export default function WhatsAppButton({
                                                    phone = "923015488577",
                                                    message = `📩 New Inquiry

Hello! I visited your website and would like to get in touch regarding your services. Please respond when available.`,
                                                    label = "WhatsApp Contact",
                                                }) {
    const href = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
        relative w-full px-6 py-4 rounded-xl font-bold tracking-widest uppercase text-sm md:text-base
        text-red-300 border border-red-500 bg-black/40
        shadow-[0_0_15px_rgba(255,0,0,0.25)]
        transition-all duration-300
        flex items-center justify-center gap-3
        hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(255,0,0,0.45)]
        before:absolute before:inset-0 before:rounded-xl
        before:bg-gradient-to-r before:from-red-500/15 before:to-red-400/10
        before:opacity-70 before:transition-all
        hover:before:opacity-100
        overflow-hidden
      "
        >
            {/* Top Cyber Edge */}
            <span className="absolute top-0 left-0 w-full h-[2px] bg-red-400/40"></span>

            {/* Right Neon Edge */}
            <span className="absolute top-0 right-0 h-full w-[2px] bg-red-400/30"></span>

            {/* Inner glow ring */}
            <span className="absolute inset-0 rounded-xl border border-red-500/20 blur-[2px]"></span>

            {/* Icon */}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                className='w-5 h-5 text-red-300'
            >
                <path
                    d='M21 11.5a8.38 8.38 0 01-1.5 4.9L21 21l-3.6-1.5A8.5 8.5 0 1119.5 3.5 8.38 8.38 0 0121 11.5z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M16.2 13.1c-.3-.1-1.7-.9-2-.9-.3 0-.5 0-.8.3s-.9.9-1 1.1c-.1.3-.1.6.2.8.3.1 1.2.6 1.6.7.4.1.7.1 1 .2.3.1.6.1.9-.1s1-.8 1.2-1.3c.2-.5.1-.7 0-.9-.1-.1-.2-.2-.3-.3z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>

            {label}
        </a>
    );
}
