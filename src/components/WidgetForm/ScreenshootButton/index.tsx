import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../../Loading";

interface ScreenshootButtonProps {
  onScreenshot: (screenshot: string | null) => void;
  screenshot: string | null;
  isSending: boolean;
}

export function ScreenshootButton({ onScreenshot, screenshot, isSending }: ScreenshootButtonProps) {
  const [ isTakingScreenshot, setIsTakingScreenshot ] = useState(false);

  const handleTakescreenshoot = async () => {
    if(screenshot) {
      onScreenshot(null);
      return;
    }

    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshot(base64image);
    
    setIsTakingScreenshot(false);
  }

  return (
    <>
      {screenshot ? (
        <button
          type="button"
          className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100
          transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:hover:text-zinc-400'
          style={{ backgroundImage: `url(${screenshot})`, backgroundSize: 180, backgroundPosition: 'right bottom' }}
          onClick={handleTakescreenshoot}
          disabled={isSending}
        >
          <Trash weight="fill" />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleTakescreenshoot}
          className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors ease-in-out
          duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
          disabled:opacity-50 disabled:hover:bg-zinc-800"
          disabled={isSending}
        >
          {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>
      )}    
    </>
  );
}