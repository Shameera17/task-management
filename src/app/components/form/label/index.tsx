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
