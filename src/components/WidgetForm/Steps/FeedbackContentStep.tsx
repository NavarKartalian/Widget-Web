import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackTypeProps, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshootButton } from "../ScreenshootButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackTypeProps;
  handleFeedback: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, handleFeedback, onFeedbackSent }: FeedbackContentStepProps) {
  const [ screenshoot, setScreenshot ] = useState<string | null>(null);
  const [ comment, setComment ] = useState('');

  const feedbackTypesInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      screenshoot,
      comment,
    });

    setComment('');
    setScreenshot(null);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button 
          type="button" 
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={() => handleFeedback()}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypesInfo.image.src} alt={feedbackTypesInfo.image.alt} className='w-6 h-6' />
          {feedbackTypesInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 
          border-zinc-600 bg-transparent rounded-md border focus:border-brand-500 focus:ring-brand-500
          focus:ring-1 outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent
          scrollbar-thin" 
          placeholder="Conte com detalhes o que está acontecendo..."
          value={comment}
          onChange={ (e) => setComment(e.target.value) }
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshootButton onScreenshot={setScreenshot} screenshot={screenshoot} />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center
            text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
            focus:ring-brand-500 transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment.trim()}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}