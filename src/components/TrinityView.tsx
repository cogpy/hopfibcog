import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { trinityMappings } from '@/lib/hopf-data'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

export function TrinityView() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">The Trinity Architecture</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The Hopf fibration reveals a deep correspondence between computational paradigms,
          topological spaces, and philosophical categories of cognitive processing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {trinityMappings.map((mapping, idx) => {
          const colorMap = {
            total: 'var(--total-space)',
            fiber: 'var(--fiber-space)',
            base: 'var(--base-space)'
          }
          
          const color = colorMap[mapping.space]
          
          return (
            <motion.div
              key={mapping.paradigm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <Card className="h-full relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full h-1" 
                  style={{ backgroundColor: color }}
                />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                    <code className="text-xs text-muted-foreground uppercase tracking-wider">
                      {mapping.paradigm}
                    </code>
                  </div>
                  <CardTitle className="text-xl capitalize">{mapping.space} Space</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    S<sup>{mapping.space === 'total' ? 'n' : mapping.space === 'fiber' ? '¹' : '²'}</sup>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Property:</span>
                      <span className="font-semibold capitalize">{mapping.property}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Philosophical:</span>
                      <span className="font-semibold capitalize">{mapping.philosophical}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mapping.description}
                    </p>
                  </div>
                  
                  {idx < trinityMappings.length - 1 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-accent">
                      <ArrowRight size={24} weight="bold" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <Card className="bg-accent/5 border-accent/20">
        <CardHeader>
          <CardTitle className="text-lg">The Hopf Correspondence</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <div className="font-mono text-xs text-total-space">S³ Total Space</div>
              <div className="text-muted-foreground">Infinite logical possibilities constrained by Prolog rules</div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xs text-fiber-space">S¹ Fiber Space</div>
              <div className="text-muted-foreground">Circular paths of functional transformation and goal pursuit</div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xs text-base-space">S² Base Space</div>
              <div className="text-muted-foreground">Concrete concurrent execution manifesting causal effects</div>
            </div>
          </div>
          
          <div className="pt-3 border-t border-border/30 text-sm text-muted-foreground">
            <p>
              Just as the Hopf fibration projects the 3-sphere onto the 2-sphere with circular fibers,
              this trinity maps logical constraints through functional transformations to concurrent execution.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
