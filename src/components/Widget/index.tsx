import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { useState } from 'react';
import { WidgetForm } from '../WidgetForm';

export function Widget() {

  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 text-white 
      flex flex-col items-end'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

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