import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { hopfFibrations, HopfFibration } from '@/lib/hopf-data'
import { FibrationCard } from '@/components/FibrationCard'
import { CodeView } from '@/components/CodeView'
import { TrinityView } from '@/components/TrinityView'
import { HopfVisualization } from '@/components/HopfVisualization'
import { CognitiveVisualizer } from '@/components/CognitiveVisualizer'
import { ArrowUp, ArrowDown, Cube, Note, GitBranch, Brain } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast, Toaster } from 'sonner'

function App() {
  const [selectedLevel, setSelectedLevel] = useKV<number>('selected-level', 1)
  const [notes, setNotes] = useKV<Record<string, string>>('user-notes', {})
  const [currentNote, setCurrentNote] = useState('')
  const [activeTab, setActiveTab] = useState('explorer')

  const selectedFibration = hopfFibrations.find(f => f.level === (selectedLevel ?? 1)) || hopfFibrations[1]

  const handleLevelChange = (direction: 'up' | 'down') => {
    const currentLevel = selectedLevel ?? 1
    const newLevel = direction === 'up' 
      ? Math.min(currentLevel + 1, hopfFibrations.length - 1)
      : Math.max(currentLevel - 1, 0)
    
    setSelectedLevel(newLevel)
    toast.success(`Navigated to ${hopfFibrations[newLevel].name}`, {
      description: `Level ${newLevel}`
    })
  }

  const handleSaveNote = () => {
    if (!currentNote.trim()) return
    
    setNotes(prev => ({
      ...(prev || {}),
      [selectedFibration.id]: currentNote
    }))
    
    toast.success('Note saved', {
      description: 'Your annotation has been saved'
    })
  }

  const handleLoadNote = () => {
    const savedNote = (notes && notes[selectedFibration.id]) || ''
    setCurrentNote(savedNote)
  }

  useState(() => {
    handleLoadNote()
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" theme="dark" />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="flex items-center justify-center gap-3">
            <Cube size={40} weight="duotone" className="text-accent" />
            <h1 className="text-4xl font-bold tracking-tight">
              Hopf Fibration Cognitive Grammar
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring the trinity of logical constraints, functional transformations, and concurrent execution
            through the lens of nested Hopf fibrations across prime-factorized dimensional spaces.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="cognitive" className="gap-2">
              <Brain size={16} weight="duotone" />
              Cognitive
            </TabsTrigger>
            <TabsTrigger value="explorer" className="gap-2">
              <GitBranch size={16} weight="bold" />
              Explorer
            </TabsTrigger>
            <TabsTrigger value="trinity" className="gap-2">
              <Cube size={16} weight="duotone" />
              Trinity
            </TabsTrigger>
            <TabsTrigger value="visualizer" className="gap-2">
              <Cube size={16} weight="bold" />
              3D View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cognitive">
            <CognitiveVisualizer level={selectedLevel ?? 1} />
          </TabsContent>

          <TabsContent value="explorer" className="space-y-8">
            <Card className="bg-card/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Fibration Level Navigator</CardTitle>
                    <CardDescription className="mt-2">
                      Navigate through nested Hopf fibrations where each level's fibers become the next level's constraints
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleLevelChange('down')}
                      disabled={(selectedLevel ?? 1) === 0}
                      className="gap-2"
                    >
                      <ArrowDown size={16} weight="bold" />
                      Descend
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleLevelChange('up')}
                      disabled={(selectedLevel ?? 1) === hopfFibrations.length - 1}
                      className="gap-2"
                    >
                      <ArrowUp size={16} weight="bold" />
                      Ascend
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {hopfFibrations.map(fibration => (
                      <FibrationCard
                        key={fibration.id}
                        fibration={fibration}
                        isSelected={fibration.level === (selectedLevel ?? 1)}
                        onClick={() => {
                          setSelectedLevel(fibration.level)
                          handleLoadNote()
                        }}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFibration.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Cube size={24} weight="duotone" className="text-accent" />
                      {selectedFibration.name} - Level {selectedFibration.level}
                    </CardTitle>
                    <CardDescription className="font-mono text-base mt-2">
                      S^{selectedFibration.totalSpace} → S^{selectedFibration.baseSpace} × S^{selectedFibration.fiberSpace}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{selectedFibration.description}</p>
                  </CardContent>
                </Card>

                <CodeView fibration={selectedFibration} />

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Note size={20} weight="duotone" className="text-accent" />
                        <CardTitle className="text-lg">Annotations</CardTitle>
                      </div>
                      <Button size="sm" onClick={handleSaveNote} className="gap-2">
                        <Note size={16} weight="fill" />
                        Save Note
                      </Button>
                    </div>
                    <CardDescription>
                      Add your insights and observations about this fibration level
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      id="annotation-text"
                      placeholder="Enter your notes about this Hopf fibration level..."
                      value={currentNote}
                      onChange={(e) => setCurrentNote(e.target.value)}
                      className="min-h-[120px] font-mono text-sm"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="trinity">
            <TrinityView />
          </TabsContent>

          <TabsContent value="visualizer" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">3D Hopf Fibration Visualization</CardTitle>
                <CardDescription>
                  Interactive visualization of {selectedFibration.name} showing the total space (outer sphere),
                  base space (inner wireframe), and fiber space (circular paths)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full opacity-30" style={{ backgroundColor: 'var(--total-space)' }} />
                    <span className="text-muted-foreground">Total Space S^{selectedFibration.totalSpace}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--fiber-space)' }} />
                    <span className="text-muted-foreground">Fiber Space S^{selectedFibration.fiberSpace}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: 'var(--base-space)' }} />
                    <span className="text-muted-foreground">Base Space S^{selectedFibration.baseSpace}</span>
                  </div>
                </div>
                <Separator />
                <HopfVisualization
                  totalSpace={selectedFibration.totalSpace}
                  baseSpace={selectedFibration.baseSpace}
                  fiberSpace={selectedFibration.fiberSpace}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          <Separator className="mb-6" />
          <p>
            The trinity of Prolog constraints, Scheme functions, and Go routines mapped through the Hopf fibration
          </p>
          <p className="mt-2 text-xs">
            S³ (Topical · Relevancy) → S¹ (Telical · Entelechy) × S² (Typical · Causality)
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

export default App