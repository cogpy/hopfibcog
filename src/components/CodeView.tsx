import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HopfFibration } from '@/lib/hopf-data'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Code } from '@phosphor-icons/react'

interface CodeViewProps {
  fibration: HopfFibration
}

export function CodeView({ fibration }: CodeViewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--total-space)' }} />
            <CardTitle className="text-base">Prolog Constraints</CardTitle>
          </div>
          <CardDescription className="text-xs">Total Space - Logical Topos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Badge variant="outline" className="w-fit text-xs">Topical (Relevancy)</Badge>
            <ScrollArea className="h-24 w-full">
              <pre className="text-xs bg-muted/30 p-3 rounded-md overflow-x-auto">
                <code className="text-fiber-space">{fibration.prologConstraint}</code>
              </pre>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--fiber-space)' }} />
            <CardTitle className="text-base">Scheme Functions</CardTitle>
          </div>
          <CardDescription className="text-xs">Fiber Space - Virtual Telos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Badge variant="outline" className="w-fit text-xs">Telical (Entelechy)</Badge>
            <ScrollArea className="h-24 w-full">
              <pre className="text-xs bg-muted/30 p-3 rounded-md overflow-x-auto">
                <code className="text-fiber-space">{fibration.schemeFunction}</code>
              </pre>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--base-space)' }} />
            <CardTitle className="text-base">Go Routines</CardTitle>
          </div>
          <CardDescription className="text-xs">Base Space - Actual Types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Badge variant="outline" className="w-fit text-xs">Typical (Causality)</Badge>
            <ScrollArea className="h-24 w-full">
              <pre className="text-xs bg-muted/30 p-3 rounded-md overflow-x-auto">
                <code className="text-base-space">{fibration.goRoutine}</code>
              </pre>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
