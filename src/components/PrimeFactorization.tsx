import { Badge } from '@/components/ui/badge'
import { getPrimeFactorization } from '@/lib/hopf-data'
import { motion } from 'framer-motion'

interface PrimeFactorizationProps {
  number: number
  label: string
  color?: string
}

export function PrimeFactorization({ number, label, color = 'oklch(0.55 0.25 300)' }: PrimeFactorizationProps) {
  const primes = getPrimeFactorization(number)
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground font-mono">{label}</span>
        <Badge variant="outline" className="font-mono" style={{ borderColor: color }}>
          {number}
        </Badge>
      </div>
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="text-xs text-muted-foreground">=</span>
        {primes.map((prime, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Badge 
              className="font-mono text-xs"
              style={{ 
                backgroundColor: color,
                color: 'oklch(0.98 0.01 270)'
              }}
            >
              {prime}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
