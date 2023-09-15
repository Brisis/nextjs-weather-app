import Image from 'next/image'
import loaderImage from '@/../public/loader.gif'

const LoaderComponent = () => {
    return(
        <div className='relative flex max-w-[300px] justify-center w-full m-auto pt-10 z-10'>
            <div className='bg-black/50 relative p-4 rounded-md justify-center'>
                <Image 
                    src={loaderImage} 
                    alt='loading...' 
                    className='w-[50px] m-auto block'
                />
            </div>
        </div>
    )
}

export default LoaderComponent;