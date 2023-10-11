import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='flex justify-between'>
                <Link to={'/'} href="" className="logo"><span>Book</span><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M6.656 19.63l-3.304 3.295L.044 19.63zM11.49 12.108c-.69-.821-.656-1.264-.229-1.69.519-.52 1.047-.306 1.639.274zm7.08-8.993c.518-.519 1.046-.305 1.638.275l-1.41 1.41c-.692-.818-.659-1.258-.229-1.685zm4.271 1.44c-.643.962-1.742 2.52-2.929 1.343l2.97-2.97c-.266-.283-.47-.524-.611-.676-1.614-1.6-3.418-1.62-4.834-.214-.943.943-1.19 2.02-.915 3.051l-.916-1.065a1.935 1.935 0 0 0-.555 2.67l-1.065-.884-1.431 1.406 1.907 1.907c-1.474-1.168-3.051-1.055-4.34.217-1.363 1.361-1.269 3.012-.246 4.37l-.208-.205c-1.349-1.348-2.813-.872-3.54-.146-.561.561-.915 1.33-.762 1.867l-2.918-2.92-1.556 1.556 5.764 5.768h3.095l-2.078-2.09c-1.093-1.111-1.111-1.697-.58-2.225.53-.528 1.104-.192 2.151.851l2.054 2.05 1.562-1.543-1.95-1.947c1.404 1.062 3.088 1.12 4.577-.378l.028-.028a4.43 4.43 0 0 0 1.19-1.678l-1.169-.784c-.647.96-1.76 2.523-2.93 1.364l2.976-2.976 1.855 1.84 1.618-1.617-2.32-2.319c-1.083-1.083-.442-2.1 0-2.484a4.577 4.577 0 0 0 .916 1.27c1.501 1.504 3.439 1.806 5.145.106l.027-.027a4.434 4.434 0 0 0 1.19-1.678z" /></svg></Link>
                <div className='flex gap-4 border border-gray-300 rounded-2xl py-2 px-4 shadow-md shadow-gray-200'>
                    <div>Destination</div>
                    <div className='border-l border-gray-300'></div>
                    <div>Date</div>
                    <div className='border-l border-gray-300'></div>
                    <div>1 Guest</div>
                    <button className='bg-primary text-white p-2 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                </div>
                <Link to={'/login'} className='flex items-center gap-4 hover:bg-hover rounded-2xl py-2 px-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 opacity-60">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </Link>
            </header>
        </div>
    )
}

export default Header;