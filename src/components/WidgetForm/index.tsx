import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugImageUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    }
  },
};

export type FeedbackTypeProps = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [ feedbackType, setFeedbackType ] = useState<FeedbackTypeProps | null>();
  const [ feedbackSent, setFeedbackSent ] = useState(false);

  const handleFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex 
      flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        { feedbackSent ? (
          <FeedbackSuccessStep handleFeedback={handleFeedback} />
        ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
            ) : (
              <FeedbackContentStep 
                feedbackType={feedbackType} 
                handleFeedback={handleFeedback} 
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
          </>
        )}

        <footer className="text-xs text-neutral-400">
          {'Feito com ♥ pela '}
          <a 
            href="https://www.rocketseat.com.br/" 
            className="underline underline-offset-2 hover:text-brand-300 
              focus:text-brand-300 transition-all ease-in-out duration-300"
            target={"_blank"}
          >
            Rocketseat
          </a>
        </footer>
    </div>
  );
}