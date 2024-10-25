import { FidgetSpinner } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
    <FidgetSpinner
      height={80}
      width={80}
      color='#FFFFFF'
      wrapperStyle={{}}
      wrapperClass='fidget-spinner-wrapper'
      visible={true}
      ariaLabel='fidget-spinner-loading'
      secondaryColor='#000000'
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default LoadingSpinner;