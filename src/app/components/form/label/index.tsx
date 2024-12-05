import { formatDate, isExpired } from "@/lib/dateUtils";

interface LabelProps {
  className?: string; // Allow additional styling overrides
  text: string;
}

export const Label1: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[20px] font-semibold leading-[24.2px] text-left 
        } ${className}`}
    >
      {text}
    </p>
  );
};

export const Label2: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[16px] font-normal leading-[19.36px] text-left ${className}`}
    >
      {text}
    </p>
  );
};

export const Label3: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[13px] font-medium leading-[15.73px] text-left  ${className}`}
    >
      {text}
    </p>
  );
};

export const Label4: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[16px] font-semibold leading-[19.36px] text-left  ${className}`}
    >
      {text}
    </p>
  );
};

export const DateLabel: React.FC<LabelProps> = ({ text, className = "" }) => {
  const flag = isExpired(text);
  return (
    <div
      className={`${
        flag ? "bg-[#FCF4F4]" : "bg-[#F2F6FD]"
      } rounded ${className}`}
    >
      <p
        className={`${
          flag ? "text-[#CB2E27]" : "text-[#0359E0]"
        } py-1 px-2  font-inter text-[13px] font-medium leading-[15.73px] text-left  `}
      >
        {formatDate(text)}
      </p>
    </div>
  );
};
