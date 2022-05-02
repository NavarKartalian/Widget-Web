import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { useState } from 'react';

export function Widget() {

  return (
    <Popover className='absolute bottom-5 right-5 text-white'>
      <Popover.Panel>Hello World</Popover.Panel>

      <Popover.Button 
        className='bg-brand-500 rounded-full px-3 h-12 flex items-center group'
        onClick={() => {}}
      >
        <ChatTeardropDots  className='w-6 h-6'/>

        <span 
          className='max-w-0 overflow-hidden group-hover:max-w-xs 
          transition-all duration-500 ease-in-out'
        >
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button >
    </Popover>
  );
}