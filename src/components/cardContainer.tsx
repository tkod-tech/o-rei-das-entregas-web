interface CardContainerProps {
  total: number;
  description: string;
}

export function CardContainer({ total, description }: CardContainerProps) {
  return (
    <div className="w-full flex justify-center items-center space-x-4 text-center">
      <div className="bg-white dark:bg-black  p-4 ">
        <div className="text-4xl font-bold">{total}</div>
        <div className="text-xl font-light">{description}</div>
      </div>
    
    </div>
  );
}
