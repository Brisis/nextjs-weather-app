
const ErrorMessageComponent = ({message}: {message: string}) => {
    return(
    <div className='relative flex max-w-[600px] justify-center w-full m-auto pt-10 px-4 text-orange-300 z-10'>
        <div className='bg-black/50 relative p-4 rounded-md justify-center'>
          <h3>{message}</h3>
        </div>
      </div>
    );
}

export default ErrorMessageComponent;