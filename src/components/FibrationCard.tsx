import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { HopfFibration, formatFibration } from '@/lib/hopf-data'
import { PrimeFactorization } from './PrimeFactorization'
import { GitBranch, Cube } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface FibrationCardProps {
  fibration: HopfFibration
  isSelected: boolean
  onClick: () => void
}

export function FibrationCard({ fibration, isSelected, onClick }: FibrationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className={`cursor-pointer transition-all duration-300 ${
          isSelected 
            ? 'ring-2 ring-accent shadow-lg shadow-accent/20' 
            : 'hover:shadow-md'
        }`}
        onClick={onClick}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitBranch size={20} className="text-accent" weight="bold" />
              <CardTitle className="text-lg">{fibration.name}</CardTitle>
            </div>
            <Badge variant="secondary" className="font-mono">
              Level {fibration.level}
            </Badge>
          </div>
          <CardDescription className="font-mono text-sm mt-2">
            {formatFibration(fibration)}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {fibration.description}
          </p>
          
          <Separator />
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Cube size={16} weight="duotone" />
              <span>Prime Factorizations</span>
            </div>
            
            <PrimeFactorization 
              number={fibration.totalSpace}
              label="S³ Total"
              color="var(--total-space)"
            />
            
            <PrimeFactorization 
              number={fibration.baseSpace}
              label="S² Base"
              color="var(--base-space)"
            />
            
            <PrimeFactorization 
              number={fibration.fiberSpace}
              label="S¹ Fiber"
              color="var(--fiber-space)"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
