import { CloseButton } from "../../CloseButton";

import successUrl from '../../../assets/Success.svg';


interface FeedbackSuccessProps {
  handleFeedback: () => void;
}

export function FeedbackSuccessStep({ handleFeedback }: FeedbackSuccessProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
       <img src={successUrl} alt={'Sucesso!'} />

       <span className="text-xl mt-2">
        Agradecemos o feedback!
       </span>

       <button
        className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6
        hover:bg-zinc-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        onClick={handleFeedback}
       >
         Quero enviar outro
       </button>
      </div>
    </>
  );
}