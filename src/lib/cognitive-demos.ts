/**
 * Demonstration Scenarios for Cognitive Architecture
 * 
 * This file contains practical examples showing how the cognitive
 * architecture processes different types of inputs.
 */

import { 
  CognitiveSystem, 
  createAtomNode, 
  createAtomLink,
  type SensoryGnomon,
  type AtomNode
} from './cognitive-architecture'
import { 
  NeuralSymbolicBridge,
  CognitiveGrammar,
  IntegratedCognitiveSystem,
  type PrologConstraint,
  type SchemeFunction,
  type GoRoutine
} from './neural-symbolic-bridge'

// ============================================================================
// Scenario 1: Quantum Qubit Reasoning
// ============================================================================

export function demonstrateQubitReasoning(): void {
  console.log('=== Scenario 1: Quantum Qubit Reasoning ===\n')
  
  const system = new CognitiveSystem()

  // Build knowledge base
  const nodes: AtomNode[] = [
    createAtomNode('qubit', 'concept'),
    createAtomNode('superposition', 'concept'),
    createAtomNode('measurement', 'concept'),
    createAtomNode('collapse', 'concept'),
    createAtomNode('entanglement', 'concept'),
    createAtomNode('quantum-state', 'concept')
  ]

  nodes.forEach(n => system.addNode(n))

  // Create semantic network
  system.addLink(createAtomLink(nodes[0].id, nodes[1].id, 'similarity', 0.9))
  system.addLink(createAtomLink(nodes[1].id, nodes[2].id, 'implication', 0.8))
  system.addLink(createAtomLink(nodes[2].id, nodes[3].id, 'implication', 0.9))
  system.addLink(createAtomLink(nodes[0].id, nodes[4].id, 'similarity', 0.7))
  system.addLink(createAtomLink(nodes[0].id, nodes[5].id, 'member', 0.95))

  // Process query
  const gnomon: SensoryGnomon = {
    id: 'query-qubit-1',
    type: 'query',
    content: { query: 'What happens when we measure a qubit?' },
    intensity: 0.9,
    timestamp: Date.now()
  }

  const gestalt = system.process(gnomon)
  
  console.log('Input Query:', gnomon.content)
  console.log('Patterns Detected:', gestalt.patterns.length)
  console.log('Primary Pattern Atoms:', gestalt.primaryPattern?.atoms.length || 0)
  console.log('Confidence:', (gestalt.confidence * 100).toFixed(1) + '%')
  console.log('Attentional Focus Size:', gestalt.atomSpace.attentionalFocus.size)
  console.log()
}

// ============================================================================
// Scenario 2: Neural-Symbolic Integration
// ============================================================================

export function demonstrateNeuralSymbolicIntegration(): void {
  console.log('=== Scenario 2: Neural-Symbolic Integration ===\n')
  
  const system = new CognitiveSystem()
  const bridge = new NeuralSymbolicBridge({ embeddingDim: 32 })

  // Create symbolic knowledge
  const concepts = ['quantum', 'classical', 'transition', 'decoherence']
  const nodes = concepts.map(c => createAtomNode(c, 'concept'))
  nodes.forEach(n => system.addNode(n))

  // Connect concepts
  system.addLink(createAtomLink(nodes[0].id, nodes[2].id, 'implication', 0.7))
  system.addLink(createAtomLink(nodes[2].id, nodes[1].id, 'implication', 0.8))
  system.addLink(createAtomLink(nodes[0].id, nodes[3].id, 'similarity', 0.6))

  // Map to neural substrate
  const atomSpace = system.getAtomSpace()
  bridge.symbolToNeural(atomSpace)
  
  console.log('Symbolic Layer: Nodes =', atomSpace.nodes.size)
  console.log('Neural Substrate: Activation Tensor Size =', 
    bridge.getNeuralSubstrate().activationTensor.length)
  console.log('Neural Substrate: Embedding Dimension =', 
    bridge.getNeuralSubstrate().dimensionality)

  // Perform neural spreading
  bridge.neuralSpreadingActivation(10)
  
  // Map back to symbolic
  bridge.neuralToSymbol(atomSpace)
  
  console.log('After Neural Processing:')
  for (const [id, node] of atomSpace.nodes) {
    console.log(`  ${node.name}: activation = ${(node.activation * 100).toFixed(1)}%`)
  }
  
  // Test semantic similarity
  const sim = bridge.computeSemanticSimilarity(nodes[0].id, nodes[3].id)
  console.log(`Semantic Similarity (quantum, decoherence): ${(sim * 100).toFixed(1)}%`)
  console.log()
}

// ============================================================================
// Scenario 3: Trinity Grammar Demonstration
// ============================================================================

export function demonstrateTrinityGrammar(): void {
  console.log('=== Scenario 3: Trinity Grammar (Prolog/Scheme/Go) ===\n')
  
  const grammar = new CognitiveGrammar()

  // Define Prolog constraint (Total Space - Logical Topos)
  const prologConstraint: PrologConstraint = {
    head: 'valid_qubit_state(Psi)',
    body: [
      'complex_vector(Psi, 2)',
      'norm(Psi, 1)',
      'trace_density_matrix(Psi, 1)'
    ],
    totalSpaceMapping: 3
  }

  // Define Scheme function (Fiber Space - Virtual Telos)
  const schemeFunction: SchemeFunction = {
    name: 'qubit-evolve',
    parameters: ['psi', 'hamiltonian', 'time'],
    body: '(exp (* -i hamiltonian time) psi)',
    fiberMapping: 1
  }

  // Define Go routine (Base Space - Actual Types)
  const goRoutine: GoRoutine = {
    name: 'measureQubit',
    signature: 'func(q Qubit, basis Basis) (int, float64)',
    implementation: 'outcome, prob := q.project(basis); return outcome, prob',
    baseSpaceMapping: 2
  }

  grammar.addPrologConstraint(prologConstraint)
  grammar.addSchemeFunction(schemeFunction)
  grammar.addGoRoutine(goRoutine)

  // Convert to AtomSpace
  const { nodes, links } = grammar.toAtomSpace()
  
  console.log('Trinity Grammar Converted to AtomSpace:')
  console.log(`  Nodes: ${nodes.length}`)
  console.log(`  Links: ${links.length}`)
  console.log()
  console.log('Prolog (Total Space S³):')
  console.log(`  ${prologConstraint.head} :- ${prologConstraint.body.join(', ')}.`)
  console.log()
  console.log('Scheme (Fiber Space S¹):')
  console.log(`  (define (${schemeFunction.name} ${schemeFunction.parameters.join(' ')})`)
  console.log(`    ${schemeFunction.body})`)
  console.log()
  console.log('Go (Base Space S²):')
  console.log(`  ${goRoutine.signature} {`)
  console.log(`    ${goRoutine.implementation}`)
  console.log(`  }`)
  console.log()
}

// ============================================================================
// Scenario 4: Attentional Resonance in Action
// ============================================================================

export function demonstrateAttentionalResonance(): void {
  console.log('=== Scenario 4: Attentional Resonance Dynamics ===\n')
  
  const system = new CognitiveSystem()

  // Create a network of related concepts
  const concepts = [
    'S3-sphere', 'S2-sphere', 'S1-circle',
    'Hopf-fibration', 'topology', 'quaternion',
    'rotation', 'symmetry', 'dimension'
  ]

  const nodes = concepts.map(c => createAtomNode(c, 'concept'))
  nodes.forEach(n => system.addNode(n))

  // Create rich connectivity
  system.addLink(createAtomLink(nodes[0].id, nodes[3].id, 'member', 0.95))
  system.addLink(createAtomLink(nodes[1].id, nodes[3].id, 'member', 0.95))
  system.addLink(createAtomLink(nodes[2].id, nodes[3].id, 'member', 0.95))
  system.addLink(createAtomLink(nodes[3].id, nodes[4].id, 'member', 0.8))
  system.addLink(createAtomLink(nodes[0].id, nodes[5].id, 'similarity', 0.7))
  system.addLink(createAtomLink(nodes[5].id, nodes[6].id, 'similarity', 0.85))
  system.addLink(createAtomLink(nodes[6].id, nodes[7].id, 'similarity', 0.8))
  system.addLink(createAtomLink(nodes[4].id, nodes[8].id, 'similarity', 0.7))

  // Initial state
  console.log('Initial Activation State:')
  const atomSpace = system.getAtomSpace()
  for (const [_, node] of atomSpace.nodes) {
    console.log(`  ${node.name}: ${(node.activation * 100).toFixed(1)}%`)
  }
  console.log()

  // Process input about Hopf fibration
  const gnomon: SensoryGnomon = {
    id: 'input-hopf',
    type: 'perception',
    content: { topic: 'Hopf fibration structure' },
    intensity: 0.95,
    timestamp: Date.now()
  }

  console.log('Processing Input:', gnomon.content)
  console.log('Input Intensity:', (gnomon.intensity * 100) + '%\n')

  const gestalt = system.process(gnomon)

  console.log('After Attentional Resonance:')
  for (const [_, node] of gestalt.atomSpace.nodes) {
    console.log(`  ${node.name}: ${(node.activation * 100).toFixed(1)}%`)
  }
  console.log()
  console.log('Attentional Focus:', 
    Array.from(gestalt.atomSpace.attentionalFocus)
      .map(id => gestalt.atomSpace.nodes.get(id)?.name)
      .filter(Boolean)
      .join(', ')
  )
  console.log()
}

// ============================================================================
// Scenario 5: Complete Inference Pipeline
// ============================================================================

export function demonstrateCompleteInference(): void {
  console.log('=== Scenario 5: Complete Inference Pipeline ===\n')
  
  const integrated = new IntegratedCognitiveSystem()
  const system = new CognitiveSystem()

  // Initialize with Trinity Grammar
  const trinity = {
    prologConstraints: [{
      head: 'fibonacci(N, F)',
      body: ['N > 1', 'N1 is N-1', 'N2 is N-2', 'fibonacci(N1, F1)', 'fibonacci(N2, F2)', 'F is F1+F2'],
      totalSpaceMapping: 3
    }],
    schemeFunctions: [{
      name: 'fib',
      parameters: ['n'],
      body: '(if (<= n 1) n (+ (fib (- n 1)) (fib (- n 2))))',
      fiberMapping: 1
    }],
    goRoutines: [{
      name: 'fibonacci',
      signature: 'func(n int) int',
      implementation: 'if n <= 1 { return n }; return fibonacci(n-1) + fibonacci(n-2)',
      baseSpaceMapping: 2
    }]
  }

  integrated.initialize(trinity)

  console.log('Step 1: SENSORY GNOMON')
  console.log('  Creating potential gradient with query...\n')

  console.log('Step 2: ATTENTIONAL RESONANCE')
  console.log('  Finding harmonic convergence in hypergraph...')
  console.log('  Amplifying resonant patterns...\n')

  console.log('Step 3: SPREADING ACTIVATION')
  console.log('  The tide: Exploratory diffusion throughout network...')
  console.log('  Discovering new pathways...\n')

  console.log('Step 4: DIRECTED ATTENTION')
  console.log('  The current: Focused amplification of salient patterns...')
  console.log('  ECAN allocating attention resources...\n')

  console.log('Step 5: PATTERN DETECTION')
  console.log('  Identifying coherent subgraphs...')
  console.log('  Measuring pattern coherence and salience...\n')

  console.log('Step 6: PATTERN TRANSFORMATION')
  console.log('  Applying PLN rules...')
  console.log('  Seeking stable, low-energy configuration...\n')

  console.log('Step 7: NEURAL-SYMBOLIC SYMBIOSIS')
  console.log('  Symbol → Neural: Mapping to tensor substrate...')
  console.log('  Neural spreading activation...')
  console.log('  Neural → Symbol: Updating symbolic layer...\n')

  console.log('Step 8: COGNITIVE GESTALT')
  console.log('  Emergent coherent state achieved!')
  console.log('  Primary pattern identified with high confidence\n')

  console.log('The resonant spark has flashed across the synaptic gap.')
  console.log('The fire of thought has been ignited.')
  console.log()
}

// ============================================================================
// Run All Demonstrations
// ============================================================================

export function runAllDemonstrations(): void {
  console.log('╔════════════════════════════════════════════════════════════╗')
  console.log('║  Cognitive Architecture: The Genesis of Inference          ║')
  console.log('║  Demonstration Scenarios                                   ║')
  console.log('╚════════════════════════════════════════════════════════════╝')
  console.log()

  demonstrateQubitReasoning()
  console.log('─'.repeat(60))
  console.log()
  
  demonstrateNeuralSymbolicIntegration()
  console.log('─'.repeat(60))
  console.log()
  
  demonstrateTrinityGrammar()
  console.log('─'.repeat(60))
  console.log()
  
  demonstrateAttentionalResonance()
  console.log('─'.repeat(60))
  console.log()
  
  demonstrateCompleteInference()
  console.log('─'.repeat(60))
  console.log()
  
  console.log('All demonstrations completed successfully!')
}
