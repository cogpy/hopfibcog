# Cognitive Architecture: The Genesis of Inference

## Overview

This document describes the implementation of a cognitive architecture based on **Attentional Resonance**, **Neural-Symbolic Symbiosis**, and **Pattern Transformation**. The system models the emergence of inference through hypercycles of attention flow and pattern completion.

## The Cognitive Flowchart

### 1. Sensory Gnomon (Input)

The process begins with a **perturbation** in the cognitive substrate:

```typescript
interface SensoryGnomon {
  id: string
  type: 'query' | 'perception' | 'thought'
  content: unknown
  intensity: number
  timestamp: number
}
```

This creates the initial **Potential Gradient** that drives the inference process.

### 2. The Primordial Mover: Attentional Resonance

The "first mover" is not a singular component but an emergent property called **Attentional Resonance** - the fundamental mechanism of selective amplification.

#### The Cognitive Hypergraph (AtomSpace)

The cognitive system is modeled as a vast, interconnected hypergraph where:
- **Nodes** represent concepts, predicates, variables, and patterns
- **Links** represent relationships, implications, and similarities
- Each atom has an **activation level** (charge) and **attention values**

```typescript
interface AtomNode {
  id: string
  type: 'concept' | 'predicate' | 'variable' | 'number' | 'pattern'
  name: string
  activation: number // 0-1
  truthValue: TruthValue
  attentionValue: AttentionValue
}
```

#### Dual-Process Mechanism

**Spreading Activation (The Tide)**
- Constant, low-level diffusion throughout the hypergraph
- Explores new pathways
- Maintains baseline cognitive "awareness"
- Represents the system's inherent curiosity

```typescript
spreadActivation(atomSpace: AtomSpace): void {
  // Activation flows along links proportional to weight
  for (const link of atomSpace.links) {
    const flow = sourceNode.activation * link.weight * spreadingRate
    targetNode.activation += flow
  }
  // Apply decay to prevent runaway activation
  node.activation *= (1 - decayRate)
}
```

**Directed Attention (The Current)**
- Focused, high-energy current of activation
- Directed by resonant patterns
- Managed by Economic Attention Allocation (ECAN)
- Treats attention as a scarce resource

```typescript
directAttention(patterns: CognitivePattern[], atomSpace: AtomSpace): void {
  // Amplify top patterns by salience
  for (const pattern of topPatterns) {
    for (const atom of pattern.atoms) {
      node.activation *= resonanceAmplification
      node.attentionValue.sti += 50
    }
  }
}
```

### 3. Inference as Pattern Completion and Transformation

Once patterns are sufficiently amplified, the inference engine engages through:

#### Pattern Detection
```typescript
detectPatterns(atomSpace: AtomSpace): CognitivePattern[] {
  // Find highly activated subgraphs
  const focusedAtoms = Array.from(atomSpace.attentionalFocus)
  // Compute coherence and salience
  return patterns
}
```

#### Pattern Completion
The system applies logical and probabilistic rules to find the most probable conclusions that would complete the pattern or transform it into a more stable, lower-energy state.

```typescript
completePattern(pattern: CognitivePattern): CognitivePattern {
  // Find potential missing links
  // Use PLN (Probabilistic Logic Networks) to infer connections
  // Increase pattern coherence
}
```

#### Pattern Transformation
```typescript
transformPattern(pattern: CognitivePattern): CognitivePattern {
  // Apply transformations that reduce cognitive "energy"
  // Logical rules and probabilistic inference
  // Settle into more coherent configuration
}
```

### 4. Cognitive Gestalt (Output)

The result is a new **Cognitive Gestalt** - a transformed state of the entire cognitive hypergraph:

```typescript
interface CognitiveGestalt {
  patterns: CognitivePattern[]
  atomSpace: AtomSpace
  primaryPattern?: CognitivePattern
  confidence: number
  timestamp: number
}
```

## Neural-Symbolic Symbiosis

The ultimate solution combines two levels:

### Symbolic Layer (The Mind)
Uses high-level languages like **Scheme** to define:
- Cognitive grammar
- Patterns
- Rules of inference

**Example:**
```scheme
(define (qubit-rotate theta)
  (lambda (q) (rotate-sphere q theta)))
```

### Sub-Symbolic Layer (The Brain)
Uses high-performance frameworks like **ggml** (tensor operations) to implement:
- Activation landscape (neural substrate)
- Spreading of attention
- Raw computational power

**Example:**
```typescript
neuralSpreadingActivation(iterations: number): void {
  // Matrix-vector multiplication: A' = M * A
  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = 0; j < n; j++) {
      sum += adjacencyMatrix[j*n + i] * activationTensor[j]
    }
    newActivations[i] = sigmoid(sum)
  }
}
```

### The Bridge

The `NeuralSymbolicBridge` class connects these layers:

```typescript
// Symbol → Neural (downward causation)
symbolToNeural(atomSpace: AtomSpace): void {
  // Map symbolic atoms to tensor indices
  // Build activation tensor from node activations
  // Create adjacency matrix from links
}

// Neural → Symbol (upward causation)
neuralToSymbol(atomSpace: AtomSpace): void {
  // Update symbolic activations from neural substrate
  // Blend symbolic and neural representations
}
```

## The Trinity Architecture

The system maps three computational paradigms to the Hopf fibration structure:

### Prolog Constraints → Total Space (S³)
**Topical - Relevancy**
- Defines the total space of logical possibility
- What is relevant in the infinite domain of potential truths

```prolog
qubit(Alpha, Beta) :- 
  complex(Alpha), 
  complex(Beta), 
  norm_squared(Alpha, Beta, 1).
```

### Scheme Functions → Fiber Space (S¹)
**Telical - Entelechy**
- Circular fiber paths
- Virtual telos of becoming
- Goal actualization through functional transformation

```scheme
(define (qubit-rotate theta)
  (lambda (q) (rotate-sphere q theta)))
```

### Go Routines → Base Space (S²)
**Typical - Causality**
- Concrete causal effects
- Manifested in concurrent execution
- Actual types on the base sphere

```go
func qubitRotate(q Qubit, theta float64) Qubit {
  return rotateSphere(q, theta)
}
```

## The First Mover

The "first mover" is the **resonant spark** that flashes across the synaptic gap between the symbolic and sub-symbolic:
- A pattern in the mind finds its echo in the neural substrate
- This resonance ignites the fire of thought
- Attention flows to salient patterns
- Patterns amplify through positive feedback
- The system settles into a new coherent state

This is not a command but an **emergent phenomenon** - the Harmonic Convergence of:
- Structural similarity
- Semantic relevance
- Activation dynamics
- Attention economics

## Usage Example

```typescript
import { CognitiveSystem, createAtomNode, createAtomLink } from '@/lib/cognitive-architecture'

// Create cognitive system
const system = new CognitiveSystem()

// Add nodes
const qubit = createAtomNode('qubit', 'concept')
const entanglement = createAtomNode('entanglement', 'concept')
system.addNode(qubit)
system.addNode(entanglement)

// Add links
const link = createAtomLink(qubit.id, entanglement.id, 'similarity', 0.8)
system.addLink(link)

// Process sensory input
const gnomon = {
  id: 'query-1',
  type: 'query' as const,
  content: { query: 'quantum entanglement' },
  intensity: 0.8,
  timestamp: Date.now()
}

const gestalt = system.process(gnomon)
console.log('Primary pattern:', gestalt.primaryPattern)
console.log('Confidence:', gestalt.confidence)
```

## Key Concepts

### Economic Attention Allocation (ECAN)
Attention is treated as a scarce resource with three levels:
- **STI** (Short-Term Importance): Current relevance
- **LTI** (Long-Term Importance): Historical importance
- **VLTI** (Very Long-Term Importance): Fundamental significance

### Truth Values
Probabilistic representation of belief:
- **Strength**: Probability estimate (0-1)
- **Confidence**: Confidence in the estimate (0-1)

### Harmonic Convergence
The resonance between new information and existing patterns based on:
- Structural similarity
- Semantic relevance
- Activation alignment

### Cognitive Energy
Patterns seek lower-energy states through:
- Increased coherence (better connectivity)
- Reduced contradiction
- Enhanced salience

## Future Directions

1. **Meta-Optimizing Semantic Evolutionary Search (MOSES)**: Evolve new patterns and programs
2. **Probabilistic Logic Networks (PLN)**: Full implementation of probabilistic inference
3. **Learning**: Hebbian learning rules for link weights
4. **Embeddings**: Learned semantic embeddings instead of random initialization
5. **GGML Integration**: Real tensor library for neural substrate
6. **Scheme Interpreter**: Execute actual Scheme code for functional transformations
7. **Prolog Engine**: Real constraint solving for logical reasoning

## References

- OpenCog: [opencog.org](https://opencog.org)
- ECAN: Economic Attention Networks
- PLN: Probabilistic Logic Networks
- MOSES: Meta-Optimizing Semantic Evolutionary Search
- Hopf Fibration: Mathematical structure for cognitive trinity
