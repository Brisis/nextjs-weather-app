import Image from 'next/image'
import loaderImage from '@/../public/loader.gif'

const LoaderComponent = () => {
    return(
        <div>
            <Image 
                src={loaderImage} 
                alt='loading...' 
                className='w-[200px] m-auto block'
            />
        </div>
    )
}

export default LoaderComponent