import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Brain, Lightning, Network, Sparkle, Play, ArrowClockwise } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CognitiveSystem, 
  createAtomNode, 
  createAtomLink,
  type SensoryGnomon,
  type CognitiveGestalt,
  type AtomNode
} from '@/lib/cognitive-architecture'
import { 
  NeuralSymbolicBridge,
  CognitiveGrammar,
  type PrologConstraint,
  type SchemeFunction,
  type GoRoutine
} from '@/lib/neural-symbolic-bridge'

interface CognitiveVisualizerProps {
  level?: number
}

export function CognitiveVisualizer({ level = 1 }: CognitiveVisualizerProps) {
  const [cognitiveSystem] = useState(() => new CognitiveSystem())
  const [bridge] = useState(() => new NeuralSymbolicBridge())
  const [grammar] = useState(() => new CognitiveGrammar())
  const [gestalt, setGestalt] = useState<CognitiveGestalt | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState(0)

  // Initialize the cognitive system with example data
  useEffect(() => {
    initializeCognitiveSystem()
  }, [level])

  const initializeCognitiveSystem = () => {
    cognitiveSystem.reset()

    // Create example atoms based on Hopf fibration level
    const concepts = [
      'qubit', 'entanglement', 'superposition', 'measurement',
      'coherence', 'decoherence', 'quantum-state', 'classical-bit'
    ]

    const nodes: AtomNode[] = []
    
    for (const concept of concepts) {
      const node = createAtomNode(concept, 'concept')
      cognitiveSystem.addNode(node)
      nodes.push(node)
    }

    // Create links between related concepts
    cognitiveSystem.addLink(createAtomLink(nodes[0].id, nodes[1].id, 'similarity', 0.8))
    cognitiveSystem.addLink(createAtomLink(nodes[0].id, nodes[2].id, 'similarity', 0.7))
    cognitiveSystem.addLink(createAtomLink(nodes[2].id, nodes[3].id, 'implication', 0.6))
    cognitiveSystem.addLink(createAtomLink(nodes[4].id, nodes[5].id, 'similarity', 0.9))
    cognitiveSystem.addLink(createAtomLink(nodes[0].id, nodes[6].id, 'member', 0.8))

    // Initialize grammar
    const prologConstraint: PrologConstraint = {
      head: 'qubit(Alpha, Beta)',
      body: ['complex(Alpha)', 'complex(Beta)', 'norm_squared(Alpha, Beta, 1)'],
      totalSpaceMapping: 3
    }
    
    const schemeFunc: SchemeFunction = {
      name: 'qubit-rotate',
      parameters: ['theta'],
      body: '(lambda (q) (rotate-sphere q theta))',
      fiberMapping: 1
    }
    
    const goRoutine: GoRoutine = {
      name: 'qubitRotate',
      signature: 'func(q Qubit, theta float64) Qubit',
      implementation: 'return rotateSphere(q, theta)',
      baseSpaceMapping: 2
    }

    grammar.addPrologConstraint(prologConstraint)
    grammar.addSchemeFunction(schemeFunc)
    grammar.addGoRoutine(goRoutine)
  }

  const processSensoryInput = async () => {
    setIsProcessing(true)
    setProcessingStep(0)

    const gnomon: SensoryGnomon = {
      id: 'input-' + Date.now(),
      type: 'query',
      content: { query: 'quantum entanglement', context: 'qubit' },
      intensity: 0.8,
      timestamp: Date.now()
    }

    // Animate through processing steps
    const steps = [
      'Sensory Gnomon: Creating potential gradient',
      'Attentional Resonance: Finding harmonic convergence',
      'Spreading Activation: Exploratory tide flowing',
      'Directed Attention: Focused current amplifying',
      'Pattern Detection: Identifying cognitive gestalts',
      'Pattern Transformation: Seeking stable configuration'
    ]

    for (let i = 0; i < steps.length; i++) {
      setProcessingStep(i)
      await new Promise(resolve => setTimeout(resolve, 800))
    }

    // Process the input
    const result = cognitiveSystem.process(gnomon)
    
    // Apply neural-symbolic bridge
    const atomSpace = cognitiveSystem.getAtomSpace()
    bridge.symbolToNeural(atomSpace)
    bridge.neuralSpreadingActivation(5)
    bridge.neuralToSymbol(atomSpace)

    setGestalt(result)
    setIsProcessing(false)
    setProcessingStep(0)
  }

  const resetSystem = () => {
    initializeCognitiveSystem()
    setGestalt(null)
  }

  const atomSpace = cognitiveSystem.getAtomSpace()
  const focusedNodes = Array.from(atomSpace.attentionalFocus)
    .map(id => atomSpace.nodes.get(id))
    .filter((n): n is AtomNode => n !== undefined)

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain size={32} weight="duotone" className="text-accent" />
              <div>
                <CardTitle className="text-2xl">Cognitive Architecture</CardTitle>
                <CardDescription className="mt-1">
                  The Genesis of Inference through Attentional Resonance
                </CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={processSensoryInput} 
                disabled={isProcessing}
                className="gap-2"
              >
                {isProcessing ? (
                  <>
                    <Lightning size={16} weight="fill" className="animate-pulse" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play size={16} weight="fill" />
                    Process Input
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                onClick={resetSystem}
                className="gap-2"
              >
                <ArrowClockwise size={16} weight="bold" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-accent/5 rounded-lg border border-accent/20"
            >
              <div className="flex items-center gap-3">
                <Sparkle size={20} weight="fill" className="text-accent animate-pulse" />
                <div className="text-sm">
                  <div className="font-medium">
                    Step {processingStep + 1}/6
                  </div>
                  <div className="text-muted-foreground">
                    {[
                      'Sensory Gnomon: Creating potential gradient',
                      'Attentional Resonance: Finding harmonic convergence',
                      'Spreading Activation: Exploratory tide flowing',
                      'Directed Attention: Focused current amplifying',
                      'Pattern Detection: Identifying cognitive gestalts',
                      'Pattern Transformation: Seeking stable configuration'
                    ][processingStep]}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <Tabs defaultValue="overview" className="mt-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="atomspace">AtomSpace</TabsTrigger>
              <TabsTrigger value="neural">Neural Substrate</TabsTrigger>
              <TabsTrigger value="trinity">Trinity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Network size={16} weight="bold" />
                      Nodes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{atomSpace.nodes.size}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Concepts in hypergraph
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Lightning size={16} weight="fill" />
                      Attentional Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{focusedNodes.length}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Highly activated atoms
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Sparkle size={16} weight="fill" />
                      Patterns
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{gestalt?.patterns.length || 0}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Detected gestalts
                    </p>
                  </CardContent>
                </Card>
              </div>

              {gestalt && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card className="border-accent/20 bg-accent/5">
                      <CardHeader>
                        <CardTitle className="text-lg">Cognitive Gestalt</CardTitle>
                        <CardDescription>
                          The emergent pattern from inference hypercycles
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Confidence:</span>
                            <Badge className="ml-2" variant="secondary">
                              {(gestalt.confidence * 100).toFixed(1)}%
                            </Badge>
                          </div>
                          {gestalt.primaryPattern && (
                            <div className="text-sm">
                              <span className="text-muted-foreground">Primary Pattern:</span>
                              <Badge className="ml-2" variant="default">
                                {gestalt.primaryPattern.atoms.length} atoms
                              </Badge>
                            </div>
                          )}
                        </div>
                        <Separator />
                        <div className="text-sm text-muted-foreground">
                          The system has settled into a new coherent configuration through
                          the harmonic convergence of symbolic and sub-symbolic processes.
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              )}
            </TabsContent>

            <TabsContent value="atomspace" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hypergraph State</CardTitle>
                  <CardDescription>
                    Current activation levels in the cognitive substrate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-2">
                      {Array.from(atomSpace.nodes.values()).map(node => (
                        <div 
                          key={node.id}
                          className="p-3 rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-mono text-sm font-medium">{node.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {node.type} · STI: {node.attentionValue.sti.toFixed(0)}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <div className="text-xs text-muted-foreground">Activation</div>
                                <div className="font-mono text-sm">
                                  {(node.activation * 100).toFixed(1)}%
                                </div>
                              </div>
                              <div 
                                className="w-2 h-8 rounded-full bg-accent"
                                style={{ opacity: node.activation }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="neural" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Neural Substrate</CardTitle>
                  <CardDescription>
                    Sub-symbolic tensor representation (ggml-inspired)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Embedding Dimension:</span>
                      <span>{bridge.getNeuralSubstrate().dimensionality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Activation Tensor:</span>
                      <span>Float32[{bridge.getNeuralSubstrate().activationTensor.length}]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Adjacency Matrix:</span>
                      <span>Float32[{Math.sqrt(bridge.getNeuralSubstrate().adjacencyMatrix.length).toFixed(0)}²]</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    The neural substrate provides the "physics" of cognition - tensor operations
                    that represent activation flow, semantic embeddings, and the raw computational
                    substrate for symbolic reasoning to emerge from.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trinity" className="mt-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Prolog Constraints (Total Space)</CardTitle>
                    <CardDescription>Logical Topos - Topical Relevancy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {grammar.getTrinity().prologConstraints.map((c, idx) => (
                      <div key={idx} className="font-mono text-sm p-3 bg-total-space/10 rounded border border-total-space/20">
                        <div className="font-semibold">{c.head}</div>
                        <div className="text-muted-foreground ml-4">
                          :- {c.body.join(', ')}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Scheme Functions (Fiber Space)</CardTitle>
                    <CardDescription>Virtual Telos - Telical Entelechy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {grammar.getTrinity().schemeFunctions.map((f, idx) => (
                      <div key={idx} className="font-mono text-sm p-3 bg-fiber-space/10 rounded border border-fiber-space/20">
                        <div className="font-semibold">(define ({f.name} {f.parameters.join(' ')})</div>
                        <div className="text-muted-foreground ml-4">{f.body})</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Go Routines (Base Space)</CardTitle>
                    <CardDescription>Actual Types - Typical Causality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {grammar.getTrinity().goRoutines.map((r, idx) => (
                      <div key={idx} className="font-mono text-sm p-3 bg-base-space/10 rounded border border-base-space/20">
                        <div className="font-semibold">{r.signature} {'{'}</div>
                        <div className="text-muted-foreground ml-4">{r.implementation}</div>
                        <div>{'}'}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
