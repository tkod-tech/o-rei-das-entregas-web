import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface CardContainerProps {
  total: number,
  description: string
}
export function CardContainer({total, description}: CardContainerProps) { 
  return (
    <Card className="w-36 h-36 flex items-center">
      <CardContent className="text-center mt-4">
        <div className="text-xl font-bold">{total}</div>
        <div>{description}</div>
      </CardContent>
    </Card>
  )
}


