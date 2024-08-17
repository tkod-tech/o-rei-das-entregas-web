interface CardContainerProps {
  total: number;
  description: string;
}
export function CardContainer({ total, description }: CardContainerProps) {
  return (
    <div className="w-36 h-36 flex items-center justify-between">
      <div className="text-center mt-4">
        <div className="text-4xl font-bold">{total}</div>
        <div className="text-xl font-light">{description}</div>
      </div>
    </div>
  );
}
