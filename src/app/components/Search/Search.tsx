import { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

interface InputProps {
    value: string | number
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: FormEventHandler<HTMLFormElement>
}

const SearchComponent: FC<InputProps> = ({
    value,
    placeholder,
    onChange,
    onSubmit
  }) => {    
    return(
        <div className='relative flex justify-between items-center max-w-[600px] w-full m-auto pt-4 px-4 text-white z-10'>
            <form onSubmit={onSubmit} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
            <div>
                <input 
                    name='searchInput'
                    value={value}
                    onChange={onChange}
                    type='text' 
                    placeholder={placeholder}
                    className='bg-transparent border-none text-white placeholder:text-white focus:outline-none sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl' />
            </div>
            <button data-testid="submit-button"
                type='submit'
                disabled= {value ? false : true}
            >
                <BsSearch size={20} />
            </button>
            </form>
        </div>
    )
}

export default SearchComponent;