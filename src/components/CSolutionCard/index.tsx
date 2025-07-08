import { cn } from '../../utils';
import { CircleCheck } from 'lucide-react';

import CWrapper from '../CWrapper';
import CContainer from '../CContainer';

interface SolutionToolCard {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl?: string;
  isReversed?: boolean;
}

const SolutionToolCard = ({
  title,
  subtitle,
  description,
  features,
  imageUrl,
  isReversed = false,
}: SolutionToolCard) => {
  return (
    <CWrapper className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-1"></div>
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-1"></div>
      <CContainer
        className={`flex flex-col md:flex-row items-center gap-12 py-16 px-6 md:px-0 relative ${
          isReversed ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2 text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground drop-shadow-md">
            {title}
          </h3>
          <p className="text-xl text-blue-300 mb-6">{subtitle}</p>
          <p className="text-foreground/90 text-lg mb-8">{description}</p>
          <ul className="list-none text-white/70 text-base space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-[#2563EE]/90 text-xl flex-shrink-0">
                  <CircleCheck />
                </span>
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div
            className={cn(
              'lg:absolute lg:top-[200px] rounded-xl p-2 shadow-2xl border-2 border-blue-700/60 w-full max-w-2xl  flex items-center justify-center text-white/50 text-center overflow-hidden',
              isReversed ? 'lg:-left-40' : 'lg:-right-40',
            )}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="rounded-lg object-cover w-full h-full"
              />
            ) : (
              <span className="text-lg">{title}</span>
            )}
          </div>
        </div>
      </CContainer>
    </CWrapper>
  );
};

export default SolutionToolCard;
