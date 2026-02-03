import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div>
      <div className="p-8 flex flex-col justify-between absolute top-0 left-0 h-full w-full">
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold text-xl'>{props.id + 1}</h2>
        <div>
            <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sit voluptates voluptatum, ab blanditiis molestiae.</p>
            <div className='flex items-center justify-between'>
                <button style={{backgroundColor: props.color}} className='text-white font-medium px-7 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor: props.color}} className='text-white font-semibold px-3 py-2 rounded-full'><ArrowRight /></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent;
